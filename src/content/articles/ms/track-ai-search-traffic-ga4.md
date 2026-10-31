---
title: Jejak trafik ChatGPT dan carian AI dalam GA4
description: Cara melihat lawatan ChatGPT dan pembantu AI lain dalam GA4 dengan kumpulan saluran tersuai, mengapa ramai jadi Direct pada Oktober, dan apa yang tersembunyi.
topic: ai-search
type: guide
pubDate: 2026-10-31T03:37:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/track-ai-search-traffic-ga4.jpg
coverAlt: Tablet di atas meja kayu yang menunjukkan carta sumber trafik dan graf garis pelawat.
coverCredit: AS Photography di Pexels
summary:
  - GA4 boleh mengumpulkan lawatan pembantu AI dalam satu saluran. Halaman bantuan Google memberi contoh AI assistants, dan persediaannya mengambil masa kira-kira sepuluh minit.
  - Saluran baharu mesti berada di atas Referral dalam susunan saluran, kerana GA4 meletakkan setiap lawatan dalam saluran pertama yang sepadan.
  - Dari kira-kira 8 hingga 15 Oktober 2026, pautan ChatGPT dilaporkan kehilangan teg utm_source, jadi banyak lawatan dipaparkan sebagai Direct.
  - Kami tidak menjumpai apa-apa yang melabel klik daripada AI Overviews atau AI Mode Google secara berasingan dalam GA4, dan laporan AI Search Console tidak menunjukkan klik.
  - Laporkan trafik pembantu AI sebagai angka minimum, bukan jumlah keseluruhan.
sources:
  - title: Custom channel groups (Google Analytics Help)
    url: https://support.google.com/analytics/answer/13051316
  - title: ChatGPT traffic drop appears to be a tracking problem (Search Engine Journal, 15 October 2026)
    url: https://www.searchenginejournal.com/chatgpt-traffic-drop-appears-to-be-a-tracking-problem/
  - title: ChatGPT UTM tag loss was a bug, says Adobe's Huesler (Relevant Audience, October 2026)
    url: https://www.relevantaudience.com/analytics/chatgpt-utm-tag-bug-fixed-openai-confirmed-adobe/
  - title: Optimizing your website for generative AI features on Google Search (Google Search Central, updated 10 July 2026)
    url: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
faq:
  - question: Bagaimanakah saya melihat trafik ChatGPT dalam GA4?
    answer: Cipta kumpulan saluran tersuai dengan saluran bernama AI assistants, tambah syarat Source yang sepadan dengan regex seperti dalam panduan ini, dan alihkan saluran itu ke atas Referral. Kemudian pilih kumpulan itu sebagai dimensi utama dalam laporan Traffic acquisition.
  - question: Mengapakah trafik ChatGPT dipaparkan sebagai Direct?
    answer: GA4 hanya boleh melabel lawatan jika ia tiba bersama rujuk (referrer) atau teg UTM. Pada Oktober 2026 pautan sebaris ChatGPT dilaporkan kehilangan teg utm_source dan kebanyakan klik tidak membawa rujuk, jadi banyak lawatan tiada apa untuk dilabel dan jatuh ke dalam Direct.
  - question: Bolehkah saya menjejak trafik Google AI Overviews secara berasingan?
    answer: Tidak, setakat yang kami temui. Laporan AI generatif Search Console menunjukkan tera tanpa klik, dan kami tidak menjumpai dokumentasi Google yang melabel klik AI Overview dalam GA4. Anggap ia berada bersama trafik organik Google.
  - question: Adakah pembaikan teg ChatGPT akan memulihkan data yang hilang?
    answer: Tiada pengisian semula data diumumkan, jadi lawatan 8 hingga 15 Oktober yang jatuh ke dalam Direct akan kekal di sana. Anotasi tarikh itu dan bandingkan ChatGPT serta Direct bersama untuk minggu tersebut.
  - question: Adakah saya perlukan persediaan berasingan untuk Perplexity, Copilot atau Claude?
    answer: Tidak. Tambah nama sumber mereka dalam regex yang sama. Semak dahulu nilai sebenar dalam laporan Traffic acquisition anda, kerana nama sumber boleh berubah, dan semak corak itu setiap beberapa bulan.
---

GA4 boleh menunjukkan lawatan daripada ChatGPT, Perplexity, Copilot, Gemini dan Claude yang tiba bersama rujuk (referrer) atau teg UTM. GA4 tidak dapat menunjukkan lawatan yang tiba tanpa kedua-duanya, dan kami tidak menjumpai apa-apa yang memisahkan klik daripada AI Overviews atau AI Mode Google. Penyelesaiannya ialah kumpulan saluran tersuai yang mengambil masa kira-kira sepuluh minit. Anggap angka yang diberikan sebagai angka minimum, bukan jumlah keseluruhan.

## Bina kumpulan saluran AI assistants

1. Dalam GA4, buka Admin, kemudian Data display, kemudian Channel groups. Anda memerlukan peranan Editor pada property itu.
2. Klik Create new channel group, namakannya, kemudian klik Add new channel dan namakan saluran itu AI assistants.
3. Tambah syarat: Source, matches regex.
4. Tampal corak untuk pembantu AI yang anda pentingkan, contohnya:

```
.*chatgpt.*|.*openai.*|.*perplexity.*|.*gemini.*|.*copilot.*|.*claude.*
```

5. Klik Reorder, seret AI assistants ke atas Referral, klik Apply, kemudian Save group. GA4 meletakkan setiap lawatan dalam saluran pertama yang sepadan, jadi susunan menentukan hasilnya.
6. Buka Reports, Acquisition, Traffic acquisition dan pilih kumpulan baharu anda sebagai dimensi utama.

Halaman bantuan Google mempunyai contoh AI assistants sendiri dan menyatakan bahawa kumpulan saluran tersuai terpakai pada data lepas, jadi anda boleh membandingkan bulan-bulan terdahulu serta-merta. Property standard boleh mempunyai dua kumpulan tersuai. Uji corak anda terhadap nilai sumber dalam laporan anda sendiri, dan semak semula apabila pembantu AI menukar domain.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 248" role="img" aria-labelledby="rbg-g1-title rbg-g1-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-g1-title">Tempat tiga jenis lawatan berkaitan AI mendarat dalam GA4</title>
<desc id="rbg-g1-desc">Tiga baris. Pautan ChatGPT dengan teg UTM mendarat dalam saluran AI assistants anda. Pautan ChatGPT yang tegnya hilang, dari 8 hingga 15 Oktober, mendarat dalam Direct. Klik daripada jawapan AI Google mendarat bersama Google organic, tanpa label berasingan yang kami temui.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .arr { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>
<rect class="box" x="10" y="10" width="250" height="64" rx="12"/>
<text class="lab" x="28" y="38">Pautan ChatGPT</text>
<text class="sub" x="28" y="60">dengan teg UTM</text>
<path class="arr" d="M268 42 H300 M294 36 L302 42 L294 48"/>
<rect class="base" x="310" y="10" width="240" height="64" rx="12"/>
<text class="lab" x="328" y="38">AI assistants</text>
<text class="sub" x="328" y="60">saluran tersuai anda</text>
<rect class="box" x="10" y="92" width="250" height="64" rx="12"/>
<text class="lab" x="28" y="120">Pautan ChatGPT</text>
<text class="sub" x="28" y="142">teg hilang, 8 hingga 15 Okt</text>
<path class="arr" d="M268 124 H300 M294 118 L302 124 L294 130"/>
<rect class="box" x="310" y="92" width="240" height="64" rx="12"/>
<text class="lab" x="328" y="120">Direct</text>
<text class="sub" x="328" y="142">tiada apa untuk dilabel</text>
<rect class="box" x="10" y="174" width="250" height="64" rx="12"/>
<text class="lab" x="28" y="202">Jawapan AI Google</text>
<text class="sub" x="28" y="224">klik ke tapak anda</text>
<path class="arr" d="M268 206 H300 M294 200 L302 206 L294 212"/>
<rect class="box" x="310" y="174" width="240" height="64" rx="12"/>
<text class="lab" x="328" y="202">Google organic</text>
<text class="sub" x="328" y="224">tiada label khas</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Rajah 1. Tempat setiap jenis lawatan mendarat. Ringkasan kami berdasarkan sumber di bawah, bukan rajah Google.</figcaption>
</figure>

## Jurang teg ChatGPT pada Oktober

Bermula kira-kira 8 Oktober, pautan sebaris ChatGPT dilaporkan berhenti membawa teg `utm_source=chatgpt.com`, dan kebanyakan klik juga tidak membawa rujuk, jadi banyak lawatan jatuh ke dalam Direct. Search Engine Journal dan Relevant Audience melaporkan bahawa Cedric Huesler dari Adobe dimaklumkan oleh OpenAI bahawa ia pepijat (bug), dan pembaikan mula dilancarkan awal 15 Oktober. Kami tidak menjumpai kenyataan awam OpenAI, jadi pengesahan itu daripada pihak kedua. Pautan dalam panel Sources dan pautan membeli-belah kekal membawa teg.

Apa yang perlu dilakukan:

- **Anotasi 8 hingga 15 Oktober** dalam GA4, mengikut zon waktu property anda. Gangguan bermula kira-kira 2 petang waktu Pasifik pada 8 Oktober, iaitu awal pagi 9 Oktober di Malaysia (penukaran kami).
- **Baca ChatGPT dan Direct bersama** untuk halaman yang terjejas dan halaman utama anda, jangan anggap penurunan itu sebagai trafik yang hilang.
- **Jangan bina semula laporan anda kerana satu minggu.** Tiada pengisian semula data diumumkan, jadi lawatan Direct itu kekal dalam Direct.

<figure class="ph"><img src="/images/articles/track-ai-search-traffic-ga4-1.jpg" alt="Komputer riba di atas sofa kelabu yang menunjukkan papan pemuka analitik dengan carta dan peta dunia." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Foto: Lukas Blazek di Pexels</figcaption></figure>

## Laporkan dengan jujur

Sampaikan trafik pembantu AI sebagai angka minimum. Nyatakan pembantu AI yang dilindungi corak itu, tarikh yang terjejas dan bahawa ciri AI Google tidak diasingkan. Jangan dakwa trafik ini menukar lebih baik melainkan data anda sendiri menunjukkannya.

ChatGPT Ads berbeza. Jika anda menandakan pautan iklan dengan parameter UTM sendiri, ia dilaporkan tidak terjejas, dan ia tergolong dalam laporan berbayar, seperti yang kami terangkan dalam [ChatGPT Ads di Malaysia dan Singapura](/ms/ai-search/chatgpt-ads-malaysia-singapore/). Bagi bahagian Google, baca [panduan kami tentang laporan AI generatif Search Console](/ms/ai-search/search-console-generative-ai-report/), yang hanya menunjukkan tera. Gambaran yang lebih luas ada dalam [GEO lwn SEO pada 2026](/ms/ai-search/geo-vs-seo-2026/).
