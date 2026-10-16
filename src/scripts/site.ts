import { paint } from './viz';

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

/* ---------- header: solid after scroll, tucks away when scrolling down ---------- */
const hdr = $('#hdr');
let lastY = scrollY;
function onScroll() {
  const y = scrollY;
  if (hdr) {
    hdr.classList.toggle('tucked', y > lastY && y > 300);
    hdr.classList.toggle('solid', y > 40);
  }
  lastY = y;
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- theme: System follows the device, a manual choice is remembered ---------- */
function applyTheme(v: string, save: boolean) {
  if (v === 'light' || v === 'dark') root.setAttribute('data-theme', v);
  else { v = 'system'; root.removeAttribute('data-theme'); }
  $$('[data-theme-set]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.themeSet === v)));
  if (save) {
    try { v === 'system' ? localStorage.removeItem('rbn-theme') : localStorage.setItem('rbn-theme', v); } catch { /* storage blocked */ }
  }
}
let saved = 'system';
try { saved = localStorage.getItem('rbn-theme') || 'system'; } catch { /* storage blocked */ }
applyTheme(saved, false);
$$('[data-theme-set]').forEach((b) => b.addEventListener('click', () => applyTheme(b.dataset.themeSet || 'system', true)));

/* ---------- Index menu ---------- */
const ov = $('#ixOver');
const openBtn = $('#openIx');
function preview(a: HTMLElement) {
  const cv = $<HTMLCanvasElement>('#ixCanvas');
  if (!cv) return;
  cv.dataset.viz = a.dataset.pvKind || 'terrain';
  cv.dataset.seed = a.dataset.pvSeed || '1';
  cv.dataset.night = a.dataset.pvKind === 'team' ? '1' : '';
  cv.dataset.big = '1';
  requestAnimationFrame(() => paint(cv));
  const cap = $('#ixCap');
  if (cap) cap.textContent = a.querySelector('span')?.textContent || '';
  $$('#ixList a').forEach((x) => x.classList.toggle('on', x === a));
}
function openIx() {
  if (!ov) return;
  ov.hidden = false;
  openBtn?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  const first = $('#ixList a');
  if (first) preview(first);
  $<HTMLButtonElement>('#closeIx')?.focus();
}
function closeIx() {
  if (!ov || ov.hidden) return;
  ov.hidden = true;
  openBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  openBtn?.focus();
}
openBtn?.addEventListener('click', openIx);
$('#closeIx')?.addEventListener('click', closeIx);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeIx(); });
$$('#ixList a').forEach((a) => {
  a.addEventListener('mouseenter', () => preview(a));
  a.addEventListener('focus', () => preview(a));
});

/* ---------- "Three ways to be found" explainer ---------- */
const guide = $('#guide');
if (guide) {
  const tabs = $$('.g-tab', guide);
  const panels = $$('.g-panel', guide);
  const copies = $$('.g-copy', guide);
  const serp = $('.serp', guide);
  const rows = serp ? $$('.r', serp) : [];
  const place = (pos: number) => {
    const order = rows.map((_, i) => i).filter((i) => i !== 6);
    order.splice(pos, 0, 6);
    order.forEach((ri, slot) => {
      const el = rows[ri];
      el.style.top = `${slot * 46}px`;
      const n = el.querySelector('.n');
      if (n) n.textContent = String(slot + 1);
    });
  };
  if (rows.length) place(6);
  let gi = 0, timer: number | undefined, paused = false;
  const show = (i: number, user = false) => {
    gi = i;
    tabs.forEach((b, k) => {
      b.setAttribute('aria-selected', String(k === i));
      b.tabIndex = k === i ? 0 : -1;
      const bar = b.querySelector<HTMLElement>('.bar');
      if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
    });
    panels.forEach((p, k) => { p.hidden = k !== i; p.classList.remove('live'); });
    copies.forEach((p, k) => { p.hidden = k !== i; });
    requestAnimationFrame(() => requestAnimationFrame(() => panels[i]?.classList.add('live')));
    if (i === 0 && rows.length) { place(6); setTimeout(() => place(1), 500); }
    if (user) { paused = true; guide.classList.add('paused'); }
    clearTimeout(timer);
    if (!paused && !RM) timer = window.setTimeout(() => show((gi + 1) % tabs.length), 7000);
  };
  tabs.forEach((b, k) => {
    b.addEventListener('click', () => show(k, true));
    b.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const n = (k + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
        show(n, true); tabs[n].focus();
      }
    });
  });
  new IntersectionObserver((es, io) => es.forEach((e) => { if (e.isIntersecting) { show(0); io.disconnect(); } }), { threshold: 0.3 }).observe(guide);
}

/* ---------- article: reading progress and contents ---------- */
const prog = $('#progress i');
const lay = $('.a-lay');
if (prog && lay) {
  const heads = $$('.prose h2[id]');
  const links = $$('.toc a');
  const tick = () => {
    const r = lay.getBoundingClientRect();
    const d = Math.min(1, Math.max(0, (-r.top + innerHeight * 0.3) / (r.height - innerHeight * 0.4)));
    prog.style.width = `${d * 100}%`;
    let cur = '';
    heads.forEach((h) => { if (h.getBoundingClientRect().top < 160) cur = h.id; });
    links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${cur}`));
  };
  addEventListener('scroll', tick, { passive: true });
  tick();
}

/* ---------- contact form (Formspree) ---------- */
const form = $<HTMLFormElement>('#cform');
if (form) {
  const sent = $('#sent');
  const note = $('#formNote');
  const btn = $<HTMLButtonElement>('button[type="submit"]', form);
  const setErr = (id: string, bad: boolean) => {
    const f = $(`#${id}`);
    f?.classList.toggle('err', bad);
    const m = f?.querySelector<HTMLElement>('.msg');
    if (m) m.hidden = !bad;
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const em = $<HTMLInputElement>('#f-email', form)!, ms = $<HTMLTextAreaElement>('#f-msg', form)!, ok = $<HTMLInputElement>('#f-ok', form)!;
    const a = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim()), b = ms.value.trim().length > 0, c = ok.checked;
    setErr('fe', !a); setErr('fm', !b); setErr('fc', !c);
    if (!a) return em.focus();
    if (!b) return ms.focus();
    if (!c) return ok.focus();
    if (note) note.hidden = true;
    if (form.action.includes('YOUR_FORM_ID')) {
      if (note) { note.textContent = form.dataset.notReady || ''; note.hidden = false; }
      return;
    }
    const label = btn?.querySelector('span');
    const orig = label?.textContent;
    if (btn) btn.disabled = true;
    if (label) label.textContent = form.dataset.sending || '…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      form.hidden = true;
      if (sent) { sent.hidden = false; sent.querySelector<HTMLElement>('h2')?.focus(); }
    } catch {
      if (note) { note.textContent = form.dataset.fail || ''; note.hidden = false; }
    } finally {
      if (btn) btn.disabled = false;
      if (label && orig) label.textContent = orig;
    }
  });
  $('#again')?.addEventListener('click', () => { if (sent) sent.hidden = true; form.hidden = false; });
}
