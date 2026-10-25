---
title: Cara membaca laporan AI generatif Search Console
description: Search Console kini menunjukkan kekerapan halaman anda muncul dalam AI Overviews dan AI Mode. Inilah yang dikira laporan itu, yang tiada dan cara membacanya.
topic: ai-search
type: guide
pubDate: 2026-10-25T09:00:00.000Z
draft: false
cover: /images/articles/search-console-generative-ai-report.jpg
coverAlt: Gambar dekat papan pemuka analitik pada skrin komputer riba, dengan jubin untuk kadar klik lalu, kos setiap penukaran dan skor kualiti
coverCredit: Stephen Dawson di Unsplash
summary:
  - Google mengumumkan laporan prestasi AI generatif pada 3 Jun 2026 dan berkata laporan itu sampai kepada semua tapak web di seluruh dunia pada 31 Ogos.
  - Ia meliputi AI Overviews dan AI Mode, dan satu-satunya metriknya ialah tera. Ia tidak menunjukkan klik, kadar klik lalu atau kedudukan.
  - Datanya merupakan sebahagian daripada hasil Web dalam laporan Performance utama, jadi jangan sesekali menjumlahkan kedua-dua angka.
  - Dalam AI Overview, setiap pautan diberi kedudukan keseluruhan blok, jadi kedudukan tidak banyak menggambarkan keterlihatan AI.
  - Kawalan Search generative AI dalam Settings boleh mengecualikan tapak daripada ciri ini. Google berkata ia tidak digunakan sebagai isyarat kedudukan di bahagian lain Search.
sources:
  - title: Generative AI performance report (Search) (Search Console Help)
    url: https://support.google.com/webmasters/answer/16984139
  - title: Introducing Search Generative AI performance reports in Search Console (Google Search Central Blog, 3 June 2026)
    url: https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
  - title: Search generative AI control (Search Console Help)
    url: https://support.google.com/webmasters/answer/16908024
  - title: What are impressions, position, and clicks? (Search Console Help)
    url: https://support.google.com/webmasters/answer/7042828
  - title: Announcing web multimodal Search performance reporting in Search Console (Google Search Central Blog, 24 September 2026)
    url: https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc
  - title: Google Admits Search Console Reporting For AI Search Is Inadequate (Search Engine Journal, 13 September 2026)
    url: https://www.searchenginejournal.com/google-admits-search-console-reporting-for-ai-search-is-inadequate/
faq:
  - question: Apakah yang ditunjukkan oleh laporan AI generatif Search Console?
    answer: Ia menunjukkan berapa kali pautan ke tapak anda dipaparkan dalam ciri AI generatif Google di Search, iaitu AI Overviews dan AI Mode buat masa ini. Anda boleh memecahkan tera itu mengikut halaman, negara, peranti dan tarikh, serta menapis carian berasaskan teks atau imej (multimodal).
  - question: Adakah laporan AI generatif menunjukkan klik?
    answer: Tidak. Halaman bantuan Google hanya menerangkan tera. Klik pada pautan dalam AI Overviews dan AI Mode dikira dalam laporan Performance utama, tetapi Search Console belum mengasingkannya daripada klik web lain.
  - question: Mengapa saya tidak nampak laporan AI generatif dalam Search Console?
    answer: Google berkata laporan itu hanya muncul apabila tapak menerima tera yang mencukupi dalam ciri AI generatif. Jika ia tiada, tapak mungkin belum mempunyai data yang cukup, atau mungkin dikecualikan daripada ciri ini dalam Settings.
  - question: Patutkah saya menjumlahkan tera AI generatif dengan tera Search biasa?
    answer: Tidak. Laporan AI generatif menggunakan data Web yang sama dengan laporan Performance utama, jadi tera AI sudah termasuk di situ. Menjumlahkan kedua-dua angka bermakna mengiranya dua kali.
  - question: Adakah mengecualikan tapak daripada AI Overviews menjejaskan kedudukan biasa saya?
    answer: Google berkata kawalan Search generative AI tidak digunakan sebagai isyarat kedudukan atau kemasukan untuk bahagian lain Search. Pengecualian membuang tapak daripada AI Overviews, AI Mode dan ciri AI generatif dalam Discover, dan anda kehilangan trafik serta tera daripadanya.
  - question: Bagaimanakah kedudukan dikira untuk AI Overviews?
    answer: AI Overview menduduki satu kedudukan pada halaman hasil carian, dan setiap pautan di dalamnya diberi kedudukan yang sama. AI Mode menggunakan kaedah yang sama seperti halaman hasil biasa, dan soalan susulan dikira sebagai pertanyaan baharu.
---

Sejak 31 Ogos, setiap tapak web boleh melihat paparan baharu dalam Search Console: kekerapan halamannya muncul dalam jawapan AI Google. Bunyinya seperti ukuran yang lama dinanti oleh ramai pemilik tapak. Hakikatnya, laporan ini menjawab satu soalan sempit dengan baik dan membiarkan beberapa soalan lain terbuka.

Panduan ini menerangkan apa yang dikira laporan itu, apa yang tiada, dan cara membacanya tanpa tersilap tafsir. Kami pernah menyentuh laporan ini secara ringkas dalam [rencana kami tentang carian AI baharu Google](/ms/ai-search/google-ai-search-redesign-malaysia/). Di sini kami pergi lebih mendalam. Apabila kami membuat tafsiran sendiri, kami nyatakannya.

## Apa itu laporan ini

Google mengumumkan laporan prestasi Search generative AI pada 3 Jun 2026 dan mula-mula melancarkannya kepada sebahagian tapak web. Nota pada pengumuman itu kini menyatakan laporan tersebut sampai kepada semua tapak web di seluruh dunia pada 31 Ogos. Sesetengah media industri memberikan tarikh lebih awal untuk pelancaran yang lebih luas, jadi kami menggunakan kata-kata Google sendiri.

Laporan ini meliputi dua ciri buat masa ini:

- **AI Overviews**, ringkasan AI yang boleh muncul di bahagian atas halaman hasil carian biasa.
- **AI Mode**, carian perbualan Google.

Google berkata senarai ini mungkin berubah dari semasa ke semasa. Data daripada eksperimen Search Labs dikecualikan, dan Discover mempunyai laporan AI generatif tersendiri yang tidak diliputi panduan ini.

## Apa yang diukur, dan apa yang tiada

Laporan ini mempunyai satu metrik: **tera** (impressions), iaitu bilangan kali pautan ke tapak anda dipaparkan kepada pengguna dalam ciri AI generatif. Anda boleh mengumpulkan angka itu dalam empat cara:

- **Pages**, mengikut URL akhir selepas ubah hala. Kebanyakan data dikreditkan kepada URL kanonik.
- **Countries**, mengikut lokasi asal carian.
- **Devices**, desktop, tablet atau mudah alih.
- **Dates**, mengikut hari, minggu atau bulan, dalam waktu Pasifik.

Terdapat juga penapis jenis carian. **Web: text-based** meliputi carian yang ditaip dalam kotak carian biasa. **Web: multimodal**, yang ditambah pada 24 September, meliputi carian menggunakan imej: Google Lens, Circle to Search pada Android, muat naik imej ke Search dan ciri "Search this image" dalam Chrome.

Apa yang tiada sama pentingnya. Halaman bantuan tidak menyenaraikan klik, kadar klik lalu atau kedudukan purata untuk ciri ini. Pengumuman Google menyatakan metrik lain mungkin ditambah dari semasa ke semasa, tetapi tiada tarikh diberikan.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 300" role="img" aria-labelledby="rbg-c-title rbg-c-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-c-title">Kedudukan laporan AI generatif dalam data Search Console</title>
<desc id="rbg-c-desc">Rajah dua kotak bersarang. Kotak luar ialah jenis carian Web dalam laporan prestasi Search, yang mengira tera, klik, kadar klik lalu dan kedudukan untuk semua hasil web. Di dalamnya, kotak lebih kecil menandakan tera daripada ciri AI generatif, iaitu AI Overviews dan AI Mode. Laporan prestasi AI generatif hanya menunjukkan bahagian dalam itu, dan hanya tera, jadi jumlahnya sudah termasuk dalam laporan luar.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .inner { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .seed { fill: var(--terracotta, #B5562F); }
</style>
<rect class="box" x="10" y="10" width="540" height="280" rx="16"/>
<text class="lab" x="34" y="46">Laporan prestasi Search, Web</text>
<text class="sub" x="34" y="72">Semua hasil web: tera, klik, CTR, kedudukan</text>
<rect class="inner" x="34" y="100" width="492" height="166" rx="12"/>
<circle class="seed" cx="64" cy="134" r="7"/>
<text class="lab" x="82" y="140">Ciri AI generatif</text>
<text class="sub" x="82" y="166">AI Overviews dan AI Mode</text>
<text class="sub" x="58" y="210">Laporan AI generatif hanya menunjukkan bahagian</text>
<text class="sub" x="58" y="236">ini, dan hanya tera. Jumlahnya sudah dikira</text>
<text class="sub" x="58" y="262">dalam laporan luar.</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Rajah 1. Laporan AI generatif ialah paparan tertapis bagi data yang sudah ada dalam jenis carian Web laporan Performance. Berdasarkan halaman Search Console Help Google. Saiz kotak sekadar gambaran, bukan mengikut skala.</figcaption>
</figure>

## Cara Google mengira tera dan kedudukan

Tiga peraturan pengiraan menjelaskan kebanyakan kekeliruan yang kami lihat.

- **Satu tapak, satu tera bagi setiap ciri.** Dalam carta, beberapa pautan daripada tapak yang sama dalam satu ciri AI dikira sebagai satu tera. Jumlah dalam jadual diagregat mengikut harta (property), atau mengikut halaman apabila anda mengumpulkan mengikut halaman, jadi jumlah carta dan jadual boleh berbeza. Itu dijangka, bukan pepijat.
- **AI Overview ialah satu kedudukan.** Halaman definisi Google menyatakan AI Overview menduduki satu kedudukan pada halaman hasil carian, dan setiap pautan di dalamnya diberi kedudukan yang sama. Menjadi sumber pertama atau kelima dalam ringkasan kelihatan serupa.
- **AI Mode berfungsi seperti halaman hasil carian.** Kedudukan mengikut kaedah biasa, dan soalan susulan dianggap pertanyaan baharu dengan tera, kedudukan dan klik tersendiri.

John Mueller dari Google mengakui had ini pada September, dengan berkata kedudukan bagi ciri ini sukar dilaporkan dengan cara yang berguna, menurut Search Engine Journal. Laporan yang sama menyatakan tera boleh dikira apabila AI Overview dimuatkan walaupun pembaca tidak pernah menatal ke pautan anda. Bacaan kami: anggap tera AI sebagai ukuran kelayakan dan jangkauan, bukan perhatian.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 330" role="img" aria-labelledby="rbg-d-title rbg-d-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-d-title">Cara kedudukan dikira untuk pautan dalam AI Overview</title>
<desc id="rbg-d-desc">Halaman hasil carian yang dipermudah. Di bahagian atas, blok AI Overview mengandungi tiga pautan sumber: halaman anda, tapak B dan tapak C. Ketiga-tiganya dilaporkan pada kedudukan 1, iaitu kedudukan keseluruhan blok. Di bawahnya, dua hasil biasa dilaporkan pada kedudukan 2 dan 3.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .chip { fill: none; stroke: var(--ink-muted, #5A5850); stroke-width: 1.5; }
.rbg .mine { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .seed { fill: var(--terracotta, #B5562F); }
.rbg .end { text-anchor: end; }
</style>
<rect class="box" x="10" y="10" width="540" height="190" rx="16"/>
<text class="lab" x="34" y="44">AI Overview</text>
<text class="sub end" x="526" y="44">satu blok, kedudukan 1</text>
<rect class="mine" x="34" y="62" width="492" height="36" rx="10"/>
<circle class="seed" cx="56" cy="80" r="6"/>
<text class="lab" x="72" y="86">Halaman anda</text>
<text class="sub end" x="512" y="86">kedudukan 1</text>
<rect class="chip" x="34" y="106" width="492" height="36" rx="10"/>
<text class="lab" x="56" y="130">Tapak B</text>
<text class="sub end" x="512" y="130">kedudukan 1</text>
<rect class="chip" x="34" y="150" width="492" height="36" rx="10"/>
<text class="lab" x="56" y="174">Tapak C</text>
<text class="sub end" x="512" y="174">kedudukan 1</text>
<rect class="box" x="10" y="216" width="540" height="48" rx="12"/>
<text class="lab" x="34" y="246">Hasil biasa</text>
<text class="sub end" x="526" y="246">kedudukan 2</text>
<rect class="box" x="10" y="274" width="540" height="48" rx="12"/>
<text class="lab" x="34" y="304">Hasil biasa</text>
<text class="sub end" x="526" y="304">kedudukan 3</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Rajah 2. Setiap pautan dalam AI Overview mengambil kedudukan blok, tanpa mengira susunannya dalam ringkasan. Dipermudah daripada halaman bantuan Google "What are impressions, position, and clicks?".</figcaption>
</figure>

## Membaca laporan, langkah demi langkah

1. **Pastikan ia wujud.** Google berkata laporan ini hanya muncul apabila tapak mempunyai tera yang mencukupi dalam ciri AI. Di tapak kami sendiri, yang baru berusia beberapa minggu, ia belum muncul. Jika laporan tiada pada tapak yang sudah lama beroperasi, buka **Settings**, kemudian **Search generative AI**, dan pastikan tapak tidak dikecualikan.
2. **Tetapkan julat tarikh yang panjang.** Data terbaharu mungkin bersifat awal, ditunjukkan sebagai garis bertitik, dan boleh berubah dalam beberapa jam. Abaikan sehari dua terakhir apabila menilai trend.
3. **Mulakan dengan Pages.** Isih mengikut tera untuk melihat URL yang digunakan ciri AI, kemudian isih secara terbalik untuk mencari halaman penting yang tidak pernah muncul. Kedua-dua senarai berguna.
4. **Baca Countries dan Devices.** Ini menunjukkan dari mana datangnya keterlihatan AI anda. Tapak Malaysia mungkin mendapati sebahagian besarnya datang dari luar negara, atau sebaliknya.
5. **Tukar jenis carian.** Bandingkan text-based dengan multimodal. Jika anda menjual produk fizikal, carian imej mungkin lebih penting daripada jangkaan.
6. **Bandingkan dengan laporan utama, jangan jumlahkan.** Buka hasil Web dalam laporan Performance untuk halaman dan tarikh yang sama. Angka AI ialah sebahagian daripada jumlah itu, yang memberi anggaran kasar bahagian keterlihatan yang datang melalui ciri AI.
7. **Eksport dengan berhati-hati.** Google menyatakan nilai yang dipaparkan sebagai "~" atau "-" menjadi sifar dalam eksport, dan had biasa 1,000 baris jadual terpakai.

## Bagaimana dengan klik

Klik pada pautan luar dalam AI Overviews dan AI Mode memang dikira, tetapi dalam laporan Performance utama, bercampur dengan setiap klik web yang lain. Search Console tiada paparan yang mengasingkannya. Buat masa ini, cara jujur untuk menilai sama ada keterlihatan AI membawa pelawat ialah secara tidak langsung: bandingkan tera AI sesuatu halaman dengan klik dan penukaran halaman itu dari semasa ke semasa, dan anggap hubungan itu sebagai korelasi, bukan bukti. Itu cadangan kami, bukan Google.

## Kawalan untuk menarik diri

Keluaran yang sama menambah tetapan di **Settings**, kemudian **Search generative AI**. Ia mempunyai tiga pilihan:

- **Include**, tetapan lalai untuk setiap harta. Kandungan anda boleh muncul dalam dan membantu menyokong jawapan AI.
- **Exclude.** Pautan dan kandungan anda dikeluarkan daripada AI Overviews, AI Mode dan ciri AI generatif dalam Discover, dan anda tidak mendapat trafik atau tera daripadanya.
- **Inherit from parent**, tetapan lalai untuk harta anak, yang mengikut harta induk terdekat yang telah ditetapkan.

Google berkata kawalan ini tidak digunakan sebagai isyarat kedudukan atau kemasukan untuk bahagian lain Search, dan perubahan biasanya berkuat kuasa dalam satu hingga dua hari. Dua had perlu diketahui. Kandungan yang dikecualikan mungkin masih membantu Google memahami pertanyaan dan bahasa. Kawalan ini juga tidak meliputi latihan model AI, yang dikendalikan oleh Google-Extended. Gunakan **noindex** hanya jika anda mahu halaman dikeluarkan sepenuhnya daripada Search. Pandangan kami: bagi kebanyakan tapak, laporan ini ialah sebab untuk kekal dan mengukur, bukan untuk keluar.

## Adakah ia terpakai di Malaysia?

Ya. Kata-kata Google ialah semua tapak web di seluruh dunia, dan paparan Countries membolehkan anda melihat Malaysia secara berasingan. Kami tidak menemui data khusus Malaysia tentang tera AI, jadi sebarang penanda aras tempatan yang anda baca ialah anggaran seseorang. Laporan anda sendiri ialah bukti yang lebih baik. Untuk cara perubahan AI Google yang lebih luas sampai kepada pencari di Malaysia, baca [analisis kami sebelum ini](/ms/ai-search/google-ai-search-redesign-malaysia/). Jika trafik anda berubah sekitar akhir September, ketepikan dahulu [kemas kini spam September](/ms/seo/google-september-2026-spam-update/) sebelum menyalahkan ciri AI.

## Apa yang kami masih belum tahu

Kami tidak tahu bila, atau sama ada, Google akan menambah klik atau kedudukan yang lebih berguna pada laporan ini. Google berkata ia sedang berbincang dengan pemilik tapak tentang perkara yang patut ditambah, tanpa tarikh. Kami tidak tahu berapa banyak daripada tera AI yang benar-benar mendapat perhatian, kerana ciri itu boleh dimuatkan tanpa pembaca menatal ke pautan anda. Kami juga tiada data awam tentang prestasi halaman berbahasa Melayu dalam AI Overviews berbanding halaman bahasa Inggeris. Kami akan mengemas kini panduan ini apabila Google mengubah laporan tersebut.
