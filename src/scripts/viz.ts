/**
 * Generated visuals. Every <canvas data-viz="terrain|network|roots|team" data-seed="n"> on a page
 * is drawn here, in the brand colours of the current theme. The same seed always draws the same picture.
 */

type Opts = { big?: boolean; night?: boolean; overlay?: boolean };
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

function rng(a: number) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeNoise(seed: number) {
  const r = rng(seed), p = new Uint8Array(512), g: [number, number][] = [];
  for (let i = 0; i < 256; i++) { p[i] = i; const a = r() * Math.PI * 2; g.push([Math.cos(a), Math.sin(a)]); }
  for (let i = 255; i > 0; i--) { const j = (r() * (i + 1)) | 0; [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 256; i++) p[i + 256] = p[i];
  const f = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  return (x: number, y: number) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
    x -= Math.floor(x); y -= Math.floor(y);
    const d = (h: number, dx: number, dy: number) => { const v = g[p[h]]; return v[0] * dx + v[1] * dy; };
    const a = d(X + p[Y], x, y), b = d(X + 1 + p[Y], x - 1, y), c = d(X + p[Y + 1], x, y - 1), e = d(X + 1 + p[Y + 1], x - 1, y - 1);
    const u = f(x), v = f(y);
    return a + (b - a) * u + (c - a) * v + (a - b - c + e) * u * v;
  };
}

function colours() {
  const s = getComputedStyle(document.documentElement);
  const g = (n: string) => s.getPropertyValue(n).trim();
  return {
    paper: g('--paper'), ink: g('--ink'), muted: g('--ink-muted'), line: g('--hairline'), sunk: g('--surface-sunken'),
    terra: g('--terracotta'), night: g('--night'), nfg: g('--night-fg'), nmut: g('--night-muted'), nline: g('--night-line'),
  };
}

/** Line colours for drawing on top of a photo: light strokes, no background. */
function overlayColours() {
  return { ink: 'rgba(246,244,238,0.9)', muted: 'rgba(246,244,238,0.55)', line: 'rgba(246,244,238,0.16)' };
}

function fit(cv: HTMLCanvasElement) {
  const dpr = Math.min(2, devicePixelRatio || 1);
  const w = cv.clientWidth, h = cv.clientHeight;
  if (!w || !h) return null;
  const W = Math.round(w * dpr), H = Math.round(h * dpr);
  if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
  const ctx = cv.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

const gauss = (x: number, y: number, px: number, py: number, s: number) => {
  const dx = x - px, dy = y - py;
  return Math.exp(-(dx * dx + dy * dy) / (2 * s * s));
};

type ContourOpts = { cell?: number; levels?: number; lo?: number; hi?: number; weak: string; strong: string; ww?: number; sw?: number };

/** Contour lines by marching squares. Returns the highest point. */
function contours(ctx: CanvasRenderingContext2D, w: number, h: number, H: (x: number, y: number) => number, o: ContourOpts) {
  const cs = o.cell || 8, nx = Math.ceil(w / cs) + 1, ny = Math.ceil(h / cs) + 1, G = new Float32Array(nx * ny);
  let mx = -1e9, mi = 0;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const v = H(i * cs, j * cs); G[j * nx + i] = v; if (v > mx) { mx = v; mi = j * nx + i; } }
  const L = o.levels || 18, lo = o.lo ?? 0.02, hi = o.hi ?? 1;
  for (let k = 1; k <= L; k++) {
    const lv = lo + ((hi - lo) * k) / L, idx = k % 5 === 0;
    ctx.beginPath();
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = G[j * nx + i], b = G[j * nx + i + 1], c = G[(j + 1) * nx + i + 1], d = G[(j + 1) * nx + i];
      const s = (a > lv ? 8 : 0) | (b > lv ? 4 : 0) | (c > lv ? 2 : 0) | (d > lv ? 1 : 0);
      if (s === 0 || s === 15) continue;
      const x = i * cs, y = j * cs, t = (p: number, q: number) => (lv - p) / (q - p);
      const T = [x + cs * t(a, b), y], R = [x + cs, y + cs * t(b, c)], B = [x + cs * t(d, c), y + cs], Lf = [x, y + cs * t(a, d)];
      const seg = (P: number[], Q: number[]) => { ctx.moveTo(P[0], P[1]); ctx.lineTo(Q[0], Q[1]); };
      switch (s) {
        case 1: case 14: seg(Lf, B); break;
        case 2: case 13: seg(B, R); break;
        case 3: case 12: seg(Lf, R); break;
        case 4: case 11: seg(T, R); break;
        case 5: seg(Lf, T); seg(B, R); break;
        case 6: case 9: seg(T, B); break;
        case 7: case 8: seg(Lf, T); break;
        case 10: seg(T, R); seg(Lf, B); break;
      }
    }
    ctx.strokeStyle = idx ? o.strong : o.weak;
    ctx.lineWidth = idx ? o.sw || 1.6 : o.ww || 0.8;
    ctx.stroke();
  }
  return { x: (mi % nx) * cs, y: Math.floor(mi / nx) * cs };
}

function drawTerrain(cv: HTMLCanvasElement, seed: number, o: Opts = {}) {
  const f = fit(cv); if (!f) return;
  const { ctx, w, h } = f, c = colours(), r = rng(seed), N = makeNoise(seed);
  const ov = o.overlay ? overlayColours() : null;
  if (ov) ctx.clearRect(0, 0, w, h); else { ctx.fillStyle = c.sunk; ctx.fillRect(0, 0, w, h); }
  const pk: number[][] = [];
  const n = 2 + ((r() * 2) | 0);
  for (let i = 0; i < n; i++) pk.push([w * (0.2 + r() * 0.6), h * (0.2 + r() * 0.6), 0.5 + r() * 0.5, Math.min(w, h) * (0.18 + r() * 0.2)]);
  const sc = (1 / Math.max(w, h)) * 3.2;
  const H = (x: number, y: number) => {
    let v = 0;
    for (const p of pk) v += p[2] * gauss(x, y, p[0], p[1], p[3]);
    return v * 0.85 + (N(x * sc, y * sc) * 0.5 + N(x * sc * 2.3, y * sc * 2.3) * 0.22) * 0.55 + 0.18;
  };
  const top = contours(ctx, w, h, H, { cell: Math.max(4, Math.min(w, h) / 70), levels: 16, lo: 0.05, hi: 1.05, weak: ov ? ov.line : c.muted, strong: ov ? ov.muted : c.ink, ww: 0.7, sw: 1.4 });
  ctx.fillStyle = c.terra; ctx.beginPath(); ctx.arc(top.x, top.y, Math.max(5, Math.min(w, h) * 0.028), 0, 7); ctx.fill();
}

function drawNetwork(cv: HTMLCanvasElement, seed: number, o: Opts = {}) {
  const f = fit(cv); if (!f) return;
  const { ctx, w, h } = f, c = colours(), r = rng(seed);
  const ov = o.overlay ? overlayColours() : null;
  const bg = o.night ? c.night : c.sunk;
  const ink = ov ? ov.ink : o.night ? c.nfg : c.ink, mut = ov ? ov.muted : o.night ? c.nmut : c.muted, ln = ov ? ov.line : o.night ? c.nline : c.line;
  if (ov) ctx.clearRect(0, 0, w, h); else { ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); }
  const n = o.big ? 70 : Math.min(60, Math.round(18 + (w * h) / 9000));
  const pad = Math.min(w, h) * 0.08, pts: { x: number; y: number; s: number }[] = [];
  for (let i = 0; i < n; i++) {
    let x = 0, y = 0, ok = false, tries = 0;
    do { x = pad + r() * (w - 2 * pad); y = pad + r() * (h - 2 * pad); ok = pts.every((p) => Math.hypot(p.x - x, p.y - y) > Math.min(w, h) * 0.06); tries++; } while (!ok && tries < 30);
    pts.push({ x, y, s: 1 + r() * 2.5 });
  }
  const E: [number, number][] = [];
  pts.forEach((p, i) => {
    const near = pts.map((q, j) => [j, Math.hypot(q.x - p.x, q.y - p.y)]).filter((a) => a[0] !== i).sort((a, b) => a[1] - b[1]).slice(0, 2 + (r() < 0.3 ? 1 : 0));
    near.forEach(([j]) => { if (!E.some((e) => (e[0] === j && e[1] === i) || (e[0] === i && e[1] === j))) E.push([i, j]); });
  });
  let hub = 0;
  const score = (p: { x: number; y: number }) => Math.abs(p.x - w * 0.6) + Math.abs(p.y - h * 0.42);
  pts.forEach((p, i) => { if (score(p) < score(pts[hub])) hub = i; });
  const Hb = pts[hub];
  ctx.strokeStyle = ln; ctx.lineWidth = 1;
  for (let k = 1; k <= 5; k++) { ctx.beginPath(); ctx.arc(Hb.x, Hb.y, Math.min(w, h) * 0.11 * k, 0, 7); ctx.stroke(); }
  ctx.lineCap = 'round';
  ctx.globalAlpha = 0.55; ctx.strokeStyle = mut; ctx.lineWidth = 1.2;
  E.forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(pts[b].x, pts[b].y); ctx.stroke(); });
  ctx.globalAlpha = 1;
  const src = pts.map((p, i) => [i, Math.hypot(p.x - Hb.x, p.y - Hb.y)]).filter((a) => a[0] !== hub).sort((a, b) => a[1] - b[1]).slice(2, 6).map((a) => a[0]);
  ctx.strokeStyle = ink; ctx.lineWidth = Math.max(2.5, Math.min(w, h) * 0.012);
  src.forEach((i) => { ctx.beginPath(); ctx.moveTo(Hb.x, Hb.y); ctx.lineTo(pts[i].x, pts[i].y); ctx.stroke(); });
  pts.forEach((p, i) => {
    if (i === hub) return;
    const big = src.includes(i);
    ctx.fillStyle = big ? ink : mut;
    ctx.beginPath(); ctx.arc(p.x, p.y, big ? Math.max(5, Math.min(w, h) * 0.02) : p.s, 0, 7); ctx.fill();
  });
  ctx.fillStyle = ink; ctx.beginPath(); ctx.arc(Hb.x, Hb.y, Math.max(8, Math.min(w, h) * 0.035), 0, 7); ctx.fill();
  const cited = pts[src[0]];
  if (cited) { ctx.fillStyle = c.terra; ctx.beginPath(); ctx.arc(cited.x, cited.y, Math.max(7, Math.min(w, h) * 0.03), 0, 7); ctx.fill(); }
}

function drawRoots(cv: HTMLCanvasElement, seed: number) {
  const f = fit(cv); if (!f) return;
  const { ctx, w, h } = f, c = colours(), r = rng(seed);
  ctx.fillStyle = c.sunk; ctx.fillRect(0, 0, w, h);
  const ground = h * (0.2 + r() * 0.08), base = Math.min(w, h);
  ctx.strokeStyle = c.line; ctx.lineWidth = 1;
  for (let k = 1; k < 10; k++) {
    const y = ground + (k * (h - ground)) / 10;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 8) { const yy = y + Math.sin(x * 0.015 + k * 1.7) * 4 + Math.sin(x * 0.006 + k) * 6; x ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy); }
    ctx.stroke();
  }
  ctx.lineCap = 'round';
  const tips: number[][] = [];
  const br = (x: number, y: number, a: number, len: number, d: number, wd: number) => {
    const bend = (r() - 0.5) * 0.6, x2 = x + Math.cos(a) * len, y2 = Math.min(h - 4, y + Math.sin(a) * len);
    ctx.strokeStyle = d < 3 ? c.ink : c.muted; ctx.lineWidth = wd;
    ctx.beginPath(); ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + Math.cos(a + bend) * len * 0.55, y + Math.sin(a + bend) * len * 0.55, x2, y2); ctx.stroke();
    if (d >= 7 || y2 >= h - 6 || len < base * 0.02) { tips.push([x2, y2]); return; }
    const k = d < 2 ? 3 : r() < 0.6 ? 2 : 1;
    for (let i = 0; i < k; i++) {
      const spread = d < 2 ? 1.4 : 0.9;
      br(x2, y2, Math.PI / 2 + (a - Math.PI / 2) * 0.6 + (r() - 0.5) * spread, len * (0.7 + r() * 0.15), d + 1, Math.max(0.7, wd * 0.62));
    }
  };
  const n = 1 + ((r() * 2) | 0);
  for (let p = 0; p < n; p++) {
    const x = n === 1 ? w * (0.45 + r() * 0.1) : w * (0.3 + p * 0.4 + (r() - 0.5) * 0.08);
    br(x, ground, Math.PI / 2, base * 0.13, 0, Math.max(3, base * 0.018));
    const sh = base * (0.1 + r() * 0.05), lw = Math.max(2.5, base * 0.012);
    ctx.strokeStyle = c.ink; ctx.lineWidth = lw;
    ctx.beginPath(); ctx.moveTo(x, ground); ctx.lineTo(x, ground - sh); ctx.stroke();
    ctx.fillStyle = c.ink;
    ([[-1, 0.55], [1, 0.8]] as const).forEach(([s, t]) => {
      const ly = ground - sh * t, L = base * 0.07;
      ctx.beginPath(); ctx.moveTo(x, ly);
      ctx.quadraticCurveTo(x + s * L * 0.5, ly - L * 0.55, x + s * L, ly - L * 0.15);
      ctx.quadraticCurveTo(x + s * L * 0.5, ly + L * 0.1, x, ly); ctx.fill();
    });
  }
  ctx.strokeStyle = c.ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(0, ground); ctx.lineTo(w, ground); ctx.stroke();
  ctx.fillStyle = c.muted;
  tips.forEach((t) => { ctx.beginPath(); ctx.arc(t[0], t[1], 1.6, 0, 7); ctx.fill(); });
  const deep = tips.sort((a, b) => b[1] - a[1])[0];
  if (deep) { ctx.fillStyle = c.terra; ctx.beginPath(); ctx.arc(deep[0], deep[1], Math.max(6, base * 0.026), 0, 7); ctx.fill(); }
}

/** Web development: a page wireframe on a layout grid. */
function drawGrid(cv: HTMLCanvasElement, seed: number, o: Opts = {}) {
  const f = fit(cv); if (!f) return;
  const { ctx, w, h } = f, c = colours(), r = rng(seed);
  const ov = o.overlay ? overlayColours() : null;
  const ink = ov ? ov.ink : c.ink, mut = ov ? ov.muted : c.muted, ln = ov ? ov.line : c.line;
  if (ov) ctx.clearRect(0, 0, w, h); else { ctx.fillStyle = c.sunk; ctx.fillRect(0, 0, w, h); }
  const cols = w < 500 ? 6 : 12, pad = Math.max(16, w * 0.06), gw = w - pad * 2, cw = gw / cols, base = Math.min(w, h);
  ctx.strokeStyle = ln; ctx.lineWidth = 1;
  for (let i = 0; i <= cols; i++) { const x = Math.round(pad + i * cw) + 0.5; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  const row = Math.max(14, h / 18);
  for (let y = row; y < h; y += row) { ctx.beginPath(); ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(w, Math.round(y) + 0.5); ctx.stroke(); }
  const snapX = (n: number) => pad + Math.round(n) * cw;
  const box = (c0: number, c1: number, y: number, hh: number, rad = 6) => { const x = snapX(c0), ww = snapX(c1) - x; ctx.beginPath(); ctx.roundRect(x, y, ww, hh, rad); ctx.stroke(); return { x, y, w: ww, h: hh }; };
  const boxInk = ov ? ov.muted : ink;
  ctx.lineWidth = Math.max(1.5, base * 0.006); ctx.strokeStyle = boxInk;
  let y = h * 0.1;
  box(0, cols, y, row * 1.2, 8);
  ctx.fillStyle = boxInk; ctx.beginPath(); ctx.arc(snapX(0) + row * 0.6, y + row * 0.6, row * 0.22, 0, 7); ctx.fill();
  y += row * 2;
  const heroCols = Math.round(cols * (0.55 + r() * 0.2));
  const hero = box(0, heroCols, y, row * (3 + Math.round(r() * 2)), 10);
  ctx.strokeStyle = ov ? ov.line : mut; ctx.lineWidth = Math.max(2, base * 0.012); ctx.lineCap = 'round';
  for (let i = 0; i < 3; i++) { const ly = hero.y + row * (0.8 + i * 0.8); ctx.beginPath(); ctx.moveTo(hero.x + row * 0.6, ly); ctx.lineTo(hero.x + hero.w * (0.75 - i * 0.18), ly); ctx.stroke(); }
  ctx.lineWidth = Math.max(1.5, base * 0.006); ctx.strokeStyle = boxInk;
  box(heroCols, cols, y, hero.h, 10);
  y += hero.h + row;
  const n = cols === 12 ? 3 : 2, span = cols / n, cards: { x: number; y: number; w: number; h: number }[] = [];
  for (let i = 0; i < n; i++) cards.push(box(i * span, (i + 1) * span, y, Math.min(row * 4, h - y - row), 8));
  const target = cards[Math.floor(r() * cards.length)];
  ctx.fillStyle = c.terra; ctx.beginPath(); ctx.arc(target.x + target.w * 0.82, target.y + target.h * 0.3, Math.max(6, base * 0.026), 0, 7); ctx.fill();
}

function drawTeam(cv: HTMLCanvasElement, seed: number, o: Opts = {}) {
  const f = fit(cv); if (!f) return;
  const { ctx, w, h } = f, c = colours(), r = rng(seed);
  if (o.overlay) ctx.clearRect(0, 0, w, h); else { ctx.fillStyle = c.night; ctx.fillRect(0, 0, w, h); }
  const m = w < 760, cx = m ? w * 0.5 : w * 0.68, cy = m ? h * 0.26 : h * 0.44, rx = m ? w * 0.4 : w * 0.24, ry = m ? h * 0.17 : h * 0.3;
  const hubs = m ? [[w * 0.42, h * 0.18], [w * 0.66, h * 0.3], [w * 0.38, h * 0.34]] : [[w * 0.62, h * 0.28], [w * 0.82, h * 0.5], [w * 0.56, h * 0.6]];
  const ppl: number[][] = [];
  for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2 + r() * 0.4; ppl.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
  ctx.lineCap = 'round';
  ctx.strokeStyle = c.nline; ctx.lineWidth = 1;
  for (let k = 1; k <= 7; k++) { ctx.beginPath(); ctx.arc(cx, cy, Math.min(w, h) * 0.07 * k, 0, 7); ctx.stroke(); }
  ppl.forEach((p, i) => hubs.forEach((hb, j) => {
    if ((i + j) % 2 === 0 || r() < 0.3) {
      ctx.strokeStyle = c.nmut; ctx.globalAlpha = 0.6; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(hb[0], hb[1]); ctx.stroke(); ctx.globalAlpha = 1;
    }
  }));
  hubs.forEach((hb, j) => { ctx.fillStyle = j === 0 ? c.terra : c.nfg; ctx.beginPath(); ctx.arc(hb[0], hb[1], j === 0 ? 12 : 9, 0, 7); ctx.fill(); });
  ctx.strokeStyle = c.nfg; ctx.lineWidth = 2;
  ppl.forEach((p) => { ctx.beginPath(); ctx.arc(p[0], p[1], 10, 0, 7); ctx.stroke(); });
}

function drawFooter(cv: HTMLCanvasElement) {
  const f = fit(cv); if (!f) return;
  const { ctx, w, h } = f, c = colours(), N = makeNoise(3), sc = 2.6 / Math.max(w, h);
  ctx.fillStyle = c.night; ctx.fillRect(0, 0, w, h);
  contours(ctx, w, h, (x, y) => (N(x * sc, y * sc) * 0.6 + N(x * sc * 2.2, y * sc * 2.2) * 0.25) * 0.8 + 0.5 - (y / h) * 0.25,
    { cell: 10, levels: 16, lo: 0.1, hi: 0.95, weak: c.nline, strong: c.nmut, ww: 0.8, sw: 1.2 });
}

function drawLost(cv: HTMLCanvasElement) {
  const f = fit(cv); if (!f) return;
  const { ctx, w, h } = f, c = colours(), N = makeNoise(404), sc = 3 / Math.max(w, h);
  ctx.fillStyle = c.paper; ctx.fillRect(0, 0, w, h);
  contours(ctx, w, h, (x, y) => gauss(x, y, w * 0.3, h * 0.35, Math.min(w, h) * 0.22) * 0.8 + N(x * sc, y * sc) * 0.3 + 0.25 - Math.max(0, y / h - 0.55) * 1.2,
    { cell: 9, levels: 20, lo: 0.05, hi: 1.1, weak: c.muted, strong: c.ink, ww: 0.7, sw: 1.4 });
  ctx.setLineDash([2, 8]); ctx.lineCap = 'round'; ctx.strokeStyle = c.terra; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.3, h * 0.35); ctx.bezierCurveTo(w * 0.45, h * 0.15, w * 0.6, h * 0.45, w * 0.72, h * 0.3); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = c.ink; ctx.beginPath(); ctx.moveTo(w * 0.3 - 7, h * 0.35 + 6); ctx.lineTo(w * 0.3 + 7, h * 0.35 + 6); ctx.lineTo(w * 0.3, h * 0.35 - 7); ctx.fill();
}

const DRAW: Record<string, (cv: HTMLCanvasElement, seed: number, o?: Opts) => void> = {
  terrain: drawTerrain, network: drawNetwork, roots: drawRoots, team: drawTeam, grid: drawGrid,
  footer: (cv) => drawFooter(cv), lost: (cv) => drawLost(cv),
};

export function paint(cv: HTMLCanvasElement) {
  const k = cv.dataset.viz || '';
  if (!DRAW[k] || !cv.offsetParent) return;
  DRAW[k](cv, Number(cv.dataset.seed) || 1, { big: cv.dataset.big === '1', night: cv.dataset.night === '1', overlay: cv.dataset.overlay === '1' });
}

export function paintAll(root: ParentNode = document) {
  root.querySelectorAll<HTMLCanvasElement>('canvas[data-viz]').forEach(paint);
}

/* ---------- animated hero map ---------- */
type Peak = [number, number, number];
function initHero() {
  const field = document.getElementById('field');
  const cv = document.getElementById('heroCanvas') as HTMLCanvasElement | null;
  if (!field || !cv) return null;
  const heights: Record<string, number> = JSON.parse(field.dataset.heights || '{}');
  const st = { mx: -9999, my: -9999, tx: -9999, ty: -9999, t: 0, run: false };
  const N = makeNoise(7);
  const layout = (w: number): Record<string, Peak> => {
    const m = w < 760;
    const pos: Record<string, [number, number]> = m
      ? { seo: [0.26, 0.3], 'ai-search': [0.7, 0.22], 'web-development': [0.62, 0.46] }
      : { seo: [0.2, 0.36], 'ai-search': [0.55, 0.28], 'web-development': [0.8, 0.5] };
    const out: Record<string, Peak> = {};
    for (const k in pos) out[k] = [pos[k][0], pos[k][1], heights[k] ?? 0.7];
    return out;
  };
  const frame = () => {
    const f = fit(cv); if (!f) return;
    const { ctx, w, h } = f, c = colours();
    ctx.fillStyle = c.paper; ctx.fillRect(0, 0, w, h);
    st.mx += (st.tx - st.mx) * 0.08; st.my += (st.ty - st.my) * 0.08;
    const P = layout(w), sc = 3 / Math.max(w, h), s = Math.min(w, h), flatY = w < 760 ? 0.58 : 0.62;
    const H = (x: number, y: number) => {
      let v = 0;
      for (const k in P) { const p = P[k]; v += p[2] * gauss(x, y, p[0] * w, p[1] * h, s * (k === 'ai-search' ? 0.24 : 0.19)); }
      v += gauss(x, y, st.mx, st.my, s * 0.09) * 0.35;
      v = v * 0.9 + (N(x * sc + st.t * 0.05, y * sc) * 0.55 + N(x * sc * 2.4, y * sc * 2.4 - st.t * 0.03) * 0.22) * 0.5 + 0.2;
      const fy = y / h;
      if (fy > flatY) { const k = Math.min(1, (fy - flatY) / 0.12); v = v * (1 - k); }
      return v;
    };
    contours(ctx, w, h, H, { cell: w < 760 ? 7 : 9, levels: 22, lo: 0.06, hi: 1.18, weak: c.muted, strong: c.ink, ww: 0.7, sw: 1.5 });
    for (const k in P) {
      const el = field.querySelector<HTMLElement>(`[data-peak="${k}"]`);
      if (el) { el.style.left = `${P[k][0] * 100}%`; el.style.top = `${P[k][1] * 100}%`; }
    }
  };
  const loop = () => { if (!st.run) return; st.t += 1 / 60; frame(); requestAnimationFrame(loop); };
  const start = () => { if (RM) { frame(); return; } if (st.run) return; st.run = true; requestAnimationFrame(loop); };
  const stop = () => { st.run = false; };
  field.addEventListener('pointermove', (e) => {
    const r = cv.getBoundingClientRect();
    st.tx = e.clientX - r.left; st.ty = e.clientY - r.top;
    if (st.mx < -999) { st.mx = st.tx; st.my = st.ty; }
  });
  field.addEventListener('pointerleave', () => { st.tx = -9999; st.ty = -9999; });
  new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop()))).observe(field);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  frame();
  return frame;
}

const heroFrame = initHero();
export function repaint() { paintAll(); heroFrame?.(); }

paintAll();
let rt: number | undefined;
addEventListener('resize', () => { clearTimeout(rt); rt = window.setTimeout(repaint, 150); });
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', repaint);
new MutationObserver(repaint).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
document.fonts?.ready.then(() => heroFrame?.());
