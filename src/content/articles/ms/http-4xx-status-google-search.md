---
title: Apa yang status 4xx lakukan pada URL anda dalam Google
description: Jurutera Google jelaskan kenapa VLC kekal diindeks walaupun memaparkan ralat 418. Apa kata dokumentasi tentang kod 4xx dan cara menyemak tapak anda.
topic: web-development
type: guide
pubDate: 2026-11-06T21:58:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/http-4xx-status-google-search.jpg
coverAlt: Barisan kabel tampal gentian optik biru dan putih yang dipasang pada panel rangkaian.
coverCredit: Brett Sayles di Pexels
summary:
  - Dokumentasi Google menyatakan URL yang memulangkan ralat 4xx, selain 429, dianggap tidak wujud, dan yang sudah diindeks akan dibuang daripada indeks.
  - Gary Illyes berkata tapak VLC, yang memaparkan status 418, dilindungi sementara daripada tercicir kerana ia halaman penting. Ia hilang snippet dan favicon.
  - Itu satu kes pada satu tapak. Tiada apa-apa yang menunjukkan tapak biasa akan dilindungi, dan dokumentasi menyatakan sebaliknya.
  - Semak apa yang dipulangkan halaman ralat anda, baiki soft 404, dan jangan bergantung pada dikekalkan dalam indeks.
sources:
  - title: VLC stays indexed despite a 418 error, Google explains (Search Engine Roundtable, 5 November 2026)
    url: https://www.seroundtable.com/google-protected-important-urls-index-42464.html
  - title: How HTTP status codes, and network and DNS errors affect Google Search (Google Search Central)
    url: https://developers.google.com/search/docs/crawling-indexing/http-network-errors
  - title: How HTTP status codes, and network and DNS errors affect Google Search (Google Search Console Help)
    url: https://support.google.com/webmasters/answer/93641
faq:
  - question: Adakah Google mengekalkan halaman dalam indeks jika ia memulangkan 404?
    answer: Menurut dokumentasi Google, tidak. URL yang memulangkan status 4xx tidak dipertimbangkan untuk pengindeksan, dan yang sudah diindeks akan dibuang. Kes VLC digambarkan sebagai pengecualian sementara bagi halaman yang sangat penting.
  - question: Adakah 410 dibuang lebih cepat daripada 404?
    answer: Dokumentasi Google melayan semua kod 4xx kecuali 429 dengan cara yang sama, jadi kami tidak boleh menjanjikan perbezaan. Sesetengah laman pihak ketiga mendakwa 410 lebih pantas, dan kami tidak dapat mengesahkannya daripada Google.
  - question: Apa yang berlaku dengan status 418?
    answer: Dokumentasi Google menyatakan kod luar biasa seperti 418 tidak diliputi. Dalam kes VLC, Gary Illyes berkata ia dilayan seperti ralat 4xx yang lain, pada dasarnya sebagai tidak ditemui.
  - question: Bagaimana pula dengan ralat 429 dan 5xx?
    answer: Perangkak Google memperlahankan rangkakan. URL yang sudah diindeks dikekalkan untuk seketika, tetapi akhirnya dibuang jika ralat berterusan.
  - question: Apakah soft 404?
    answer: Halaman yang memulangkan status 200 tetapi sebenarnya halaman ralat, seperti templat kosong. Search Console menandakannya. Jika halaman sudah tiada tanpa pengganti, pulangkan 404 atau 410 yang sebenar.
  - question: Kenapa VLC hilang favicon?
    answer: Apabila halaman tidak dapat dibaca, Google tidak lagi tahu kandungannya, jadi ia hanya menunjukkan pautan dan tajuk terakhir yang elok, tanpa snippet dan tanpa favicon. VLC kini memulangkan 200, dan Gary Illyes menjangka favicon akan kembali.
---

Komen daripada Google minggu ini mudah disalah baca sebagai "ralat 4xx selamat". Ia tidak selamat. Inilah yang berlaku kepada VLC, apa kata dokumentasi Google, dan apa yang perlu disemak pada tapak anda sendiri.

## Apa yang berlaku kepada VLC

Search Engine Roundtable melaporkan pada 5 November bahawa laman web VLC kehilangan favicon dalam hasil Google. Gary Illyes dari Google mengulas di LinkedIn. Tapak VLC memaparkan HTTP 418, kod "I'm a teapot", dan Google melayannya seperti ralat 4xx yang lain, pada dasarnya sebagai tidak ditemui.

Oleh kerana VLC salah satu halaman terpenting di internet, kata Illyes, Search melindungi URL itu buat sementara daripada tercicir terus daripada indeks. Kesan sampingannya, Google tidak lagi tahu apa kandungan halaman itu, lalu hanya menunjukkan pautan dan tajuk terakhir yang elok, tanpa snippet dan tanpa favicon. VLC kini memulangkan 200 dengan kandungan, dan beliau menjangka favicon akan kembali.

Barry Schwartz menawarkan bacaan lain: tapak itu masih muncul apabila dicari mengikut nama, dan itu mungkin sekadar mencerminkan betapa pentingnya ia. Itu tafsirannya.

Tiga perkara tidak diketahui. Apa maksud "penting" bagi Google. Berapa lama "sementara" itu. Dan sama ada perkara seumpama ini terpakai kepada tapak biasa. Tiada apa dalam laporan itu yang mengatakan ia terpakai.

## Apa kata dokumentasi Google

| Status | Apa yang Google lakukan |
| --- | --- |
| 200 | Kandungan boleh dipertimbangkan untuk pengindeksan. |
| 301, 308 | Perpindahan kekal. Google mengikut sehingga 10 lompatan ubah hala. |
| 302, 307 | Perpindahan sementara. Google mengikutnya. |
| 404, 410, dan 4xx lain kecuali 429 | Dilayan sama. Kandungan tidak wujud. URL yang diindeks dibuang, halaman 404 baharu tidak diproses, dan rangkakan beransur perlahan. |
| 429 | Dilayan sebagai ralat pelayan. Rangkakan diperlahankan. |
| 5xx | Rangkakan diperlahankan. URL yang diindeks dikekalkan seketika, kemudian dibuang jika ralat berterusan. |

Dokumentasi menyatakan kod luar biasa seperti 418 tidak diliputi. Itu menjadikan kes VLC satu kenyataan tentang satu tapak, bukan peraturan.

## Soft 404 dan halaman ralat tersuai

Soft 404 ialah halaman yang memulangkan 200 tetapi sebenarnya halaman ralat. Search Console melaporkannya dalam laporan Page indexing. Nasihat Google ialah pulangkan 404 atau 410 yang sebenar apabila sesuatu halaman sudah tiada dan tiada pengganti yang serupa.

Halaman 404 tersuai wajar disemak. Google mencatat ia dibuat untuk pengguna, jadi pelayan tetap mesti memulangkan status 404. Jika tidak, halaman ralat itu sendiri mungkin diindeks.

<figure class="ph"><img src="/images/articles/http-4xx-status-google-search-1.jpg" alt="Lebuh raya kosong yang disekat merentasi semua lorong oleh penghadang merah putih." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Foto: Jeffry Surianto di Pexels</figcaption></figure>

## Dari mana datangnya ralat 4xx yang tidak disengajakan

Jadual Google mengumpulkan 401 dan 403 bersama 404 dan 410, jadi halaman yang disekat untuk perangkak dilayan seperti halaman yang tidak wujud. Punca lazim yang patut dicari:

- **Dinding log masuk dan sesi tamat** yang menjawab perangkak dengan 401 atau 403.
- **Perlindungan bot atau firewall** yang menyekat sesetengah pengunjung dengan 403.
- **Halaman yang dipadam atau dinamakan semula** dalam sistem kandungan, tanpa ubah hala.
- **Variasi URL** seperti huruf besar yang berbeza atau garis condong di hujung yang tertinggal.

## Cara menyemak tapak anda

1. **Minta URL yang tidak wujud** dan baca baris statusnya, bukan halamannya:

```
curl -sI https://example.com/this-page-does-not-exist | head -n 1
```

2. **Buka laporan Page indexing dalam Search Console** dan cari sebab seperti "Not found (404)" dan "Soft 404". Google menyatakan setiap isu dalam panduan kod statusnya menghasilkan ralat atau amaran yang sepadan di sana.
3. **Cari dalam log pelayan** anda untuk respons 4xx berulang pada URL yang sepatutnya berfungsi.
4. **Baiki puncanya.** Jika halaman berpindah, ubah halanya ke padanan terdekat (lihat [ubah hala mana yang perlu digunakan](/ms/web-development/redirect-types-301-302-307-308/)). Jika ia sudah tiada, pulangkan 404 atau 410.

Kemudian asingkan dapatan anda kepada empat kumpulan. Halaman yang sepatutnya berfungsi perlu dibaiki dahulu. Halaman yang berpindah perlukan ubah hala. Halaman yang sudah tiada patut memulangkan 404 atau 410. URL yang tidak pernah wujud, seperti salah taip dari tapak lain, biasanya boleh dibiarkan.

Kami tidak menguji tapak sebenar untuk rencana ini, jadi arahan di atas ialah kaedah, bukan keputusan.

## Selepas anda membaiki halaman

Apabila URL memulangkan 200 semula dengan kandungan sebenar, Google perlu merangkaknya sekali lagi sebelum snippet dan favicon boleh kembali, dan dokumentasi tidak memberi jangka masa. Alat URL inspection dalam Search Console membolehkan anda meminta rangkakan baharu bagi satu halaman, tetapi ia bukan jaminan. Kes VLC sendiri menunjukkan coraknya: pembaikan dibuat dahulu, dan favicon hanya dijangka menyusul.

Jika halaman sengaja dibuang, jangan baiki. 404 atau 410 yang bersih ialah jawapan yang betul, dan dokumentasi menyatakan rangkakan URL sedemikian beransur perlahan.

## Apa yang tidak patut diambil daripada kes VLC

- **Jangan sengaja memaparkan kod luar biasa.** Dokumentasi tidak meliputinya.
- **Jangan bergantung pada perlindungan.** Dokumentasi menyatakan URL 4xx yang sudah diindeks akan dibuang.
- **Ingat kosnya.** Walaupun URL kekal tersenarai, halaman yang tidak dapat dibaca Google tiada snippet dan tiada favicon.

Untuk senarai semak asas teknikal yang lebih luas, lihat [adakah tapak web anda sedia untuk ejen AI](/ms/web-development/ai-agent-ready-website/).
