---
title: Adakah tapak web anda sedia untuk ejen AI?
description: Ejen pelayar membaca halaman melalui tangkapan skrin, HTML dan accessibility tree. Apa yang membantu kini, semakan Lighthouse dan yang masih eksperimen.
topic: web-development
type: guide
pubDate: 2026-10-31T03:39:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/ai-agent-ready-website.jpg
coverAlt: Tangan robot putih memegang cawan putih kecil berisi kekunci papan kekunci hitam, dilihat dari atas.
coverCredit: Tara Winstead di Pexels
summary:
  - Panduan web.dev Google berkata ejen pelayar AI membaca sesebuah tapak melalui tangkapan skrin, HTML dan accessibility tree, dan kerja yang sama turut membantu pelawat manusia.
  - Asas yang paling membantu ialah butang dan pautan sebenar, medan borang berlabel, tiada tindanan tidak kelihatan dan susun atur yang stabil.
  - Lighthouse 13.3.0 menambah kategori Agentic Browsing. Dalam larian kami bagi 13.5.0 pada binaan setempat tapak ini, skornya 1 daripada 1.
  - llms.txt tidak berguna untuk Google Search, dan WebMCP ialah standard yang dicadangkan dan masih dalam pratonton awal.
sources:
  - title: Build agent-friendly websites (web.dev, updated 1 April 2026)
    url: https://web.dev/articles/ai-agent-site-ux
  - title: Optimizing your website for generative AI features on Google Search (Google Search Central, updated 10 July 2026)
    url: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - title: Lighthouse v13.3.0 release notes (GitHub)
    url: https://github.com/GoogleChrome/lighthouse/releases/tag/v13.3.0
  - title: Lighthouse v13.5.0 release notes (GitHub)
    url: https://github.com/GoogleChrome/lighthouse/releases/tag/v13.5.0
  - title: WebMCP is available for early preview (Chrome for Developers)
    url: https://developer.chrome.com/blog/webmcp-epp
faq:
  - question: Apakah tapak web yang sedia untuk ejen AI?
    answer: Tapak yang boleh dibaca dan dikendalikan ejen pelayar AI tanpa meneka. Dalam amalan, ini bermaksud butang dan pautan sebenar, medan borang berlabel, susun atur yang stabil dan accessibility tree yang bersih. Panduan web.dev Google berkata kerja ini turut menjadikan tapak lebih baik untuk manusia.
  - question: Apakah yang disemak kategori Agentic Browsing Lighthouse?
    answer: Dalam larian Lighthouse 13.5.0 kami, ia menyenaraikan semakan accessibility tree, anjakan susun atur, semakan format llms.txt, tiga semakan WebMCP dan semakan fail Agent Resource Discovery. Semakan fail dan WebMCP dipaparkan sebagai tidak berkenaan pada tapak yang tidak mempunyai semua itu.
  - question: Adakah saya perlukan llms.txt atau fail katalog ejen untuk Google?
    answer: Tidak. Google berkata Search tidak menggunakan fail llms.txt, dan mencipta satu tidak akan membantu atau menjejaskan keterlihatan anda dalam Google Search. Perkhidmatan lain mungkin membaca fail sebegitu, jadi ia pilihan.
  - question: Apakah WebMCP?
    answer: Standard web yang dicadangkan untuk membolehkan sesebuah tapak menerangkan alat yang boleh digunakan ejen, melalui borang HTML atau JavaScript. Chrome menyifatkannya sebagai pratonton awal, dan web.dev memberi amaran ia sedang dibangunkan secara aktif dan mungkin berubah.
  - question: Bagaimanakah ejen pelayar AI membaca sesebuah tapak web?
    answer: Google berkata mereka boleh menganalisis tangkapan skrin, memeriksa struktur halaman dalam DOM dan mentafsir accessibility tree. Ejen moden menggabungkan ketiga-tiganya, jadi sesebuah halaman patut menerangkan dirinya dengan jelas dalam setiap satu.
---

Ejen pelayar AI cuba menyiapkan tugasan untuk orang, seperti membandingkan produk atau menempah meja. Sama ada mereka berjaya di tapak anda bergantung kurang pada fail baharu dan lebih pada kualiti binaan yang biasa. Panduan Google sendiri berkata demikian, dan Lighthouse kini mempunyai kategori yang menyemak sebahagiannya. Panduan ini membezakan apa yang membantu hari ini daripada apa yang masih eksperimen.

## Bagaimana ejen membaca halaman anda

Panduan web.dev Google berkata ejen melihat sesebuah tapak dalam tiga cara: tangkapan skrin, HTML dan accessibility tree (pokok kebolehcapaian), dan ejen moden menggabungkan ketiga-tiganya. Panduan Google tentang ciri AI generatif berkata perkara yang sama. Halaman yang nampak betul tetapi mempunyai kawalan tanpa label, susun atur yang berubah-ubah atau tindanan tersembunyi memberi tiga paparan itu jawapan yang berbeza. Accessibility tree paling penting untuk borang dan butang. Ia ialah ringkasan pelayar tentang peranan, nama dan keadaan setiap kawalan, dan ejen hanya boleh bertindak dengan yakin pada kawalan yang mempunyai nama yang jelas.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 218" role="img" aria-labelledby="rbg-b1-title rbg-b1-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-b1-title">Bagaimana ejen pelayar membaca halaman</title>
<desc id="rbg-b1-desc">Tiga input menyuap satu ejen. Tangkapan skrin, struktur HTML dan accessibility tree semuanya menuju ke kotak yang berbunyi ejen memutuskan apa yang hendak diklik atau diisi.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .arr { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>
<rect class="box" x="10" y="10" width="220" height="54" rx="12"/>
<text class="lab" x="28" y="42">Tangkapan skrin</text>
<rect class="box" x="10" y="82" width="220" height="54" rx="12"/>
<text class="lab" x="28" y="114">Struktur HTML</text>
<rect class="box" x="10" y="154" width="220" height="54" rx="12"/>
<text class="lab" x="28" y="186">Accessibility tree</text>
<path class="arr" d="M230 37 L318 100 M230 109 H318 M230 181 L318 118 M310 103 L320 109 L310 115"/>
<rect class="base" x="320" y="62" width="230" height="94" rx="12"/>
<text class="lab" x="340" y="102">Ejen</text>
<text class="sub" x="340" y="128">putuskan apa untuk klik</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Rajah 1. Tiga paparan itu, seperti yang diterangkan web.dev. Lukisan kami.</figcaption>
</figure>

## Enam semakan yang membantu hari ini

Daripada panduan web.dev:

1. Gunakan elemen `<button>` dan `<a>` sebenar, bukan `<div>` atau `<span>` yang digayakan. Jika tidak boleh, tambah `role` dan `tabindex` yang betul.
2. Pautkan setiap `<label>` kepada mediannya dengan atribut `for`.
3. Buang tindanan lut sinar yang menutup butang.
4. Kekalkan kawalan utama, seperti Add to cart, di tempat yang sama pada halaman yang serupa.
5. Pastikan elemen yang boleh diklik kelihatan, lebih besar daripada 8 piksel persegi, dan tetapkan `cursor: pointer`.
6. Buka accessibility tree dalam Chrome DevTools dan baiki apa yang kelihatan salah.

<figure class="ph"><img src="/images/articles/ai-agent-ready-website-1.jpg" alt="Gambar dekat kod berwarna-warni pada skrin komputer yang gelap." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Foto: Nemuel Sereti di Pexels</figcaption></figure>

## Apa yang disemak Lighthouse

Lighthouse 13.3.0 menambah kategori Agentic Browsing pada tetapan lalai, dan 13.5.0 menambah audit untuk fail katalog Agent Resource Discovery. Pada 31 Oktober 2026 kami menjalankan versi 13.5.0 daripada baris arahan pada binaan setempat tapak ini, dengan `npx lighthouse <url> --only-categories=agentic-browsing`. Kategori itu mendapat skor 1 daripada 1. Audit accessibility tree lulus dan anjakan susun atur ialah 0. Audit llms.txt, WebMCP dan katalog tidak berkenaan, kerana tapak ini tidak mempunyai fail atau alat tersebut. Dalam 13.5.0 kategori itu menyenaraikan tujuh audit: accessibility tree, anjakan susun atur, format llms.txt, tiga semakan WebMCP dan semakan katalog. Nota 13.3.0 menyatakan kategori itu dijangka hadir dalam DevTools Chrome 150 dan dalam PageSpeed Insights, jadi anda mungkin boleh menjalankannya tanpa baris arahan.

Itu larian setempat, bukan tapak langsung, jadi keputusan anda mungkin berbeza. Kami tidak menjumpai apa-apa yang menyatakan skor ini menjejaskan kedudukan Search.

## Tambahan yang masih eksperimen

- **llms.txt.** Google berkata Search tidak menggunakannya, dan fail itu tidak membantu atau menjejaskan keterlihatan dalam Google Search. Perkhidmatan lain mungkin membacanya.
- **WebMCP.** Standard yang dicadangkan untuk membolehkan sesebuah tapak mendedahkan alat kepada ejen melalui borang HTML atau JavaScript. Chrome menyebutnya pratonton awal, dan web.dev berkata ia mungkin berubah. Pembangun tapak transaksi mungkin mahu memerhatikannya. Kebanyakan perniagaan boleh menunggu.

## Apa yang kami masih tidak tahu

Kami tidak tahu ejen mana yang melawat tapak di Malaysia, seberapa kerap mereka menyiapkan pembelian, atau bagaimana skor ejen Lighthouse berkait dengan kejayaan tugasan sebenar. Kami juga hanya menguji satu tapak, iaitu tapak ini, pada binaan setempat, jadi keputusan Lighthouse kami tidak boleh dijadikan penanda aras untuk tapak lain. Google membingkaikan perkara ini sebagai sesuatu untuk diteroka jika ia relevan kepada perniagaan anda dan anda ada masa lapang.

Untuk gambaran yang lebih luas, baca [SEO, AEO dan GEO diterangkan](/ms/seo/seo-aeo-geo-explained/). Jika anda membina tapak dengan alat AI, rencana seterusnya membincangkan [asas SEO yang perlu disemak](/ms/web-development/ai-built-website-seo/).
