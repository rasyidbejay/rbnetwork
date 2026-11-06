---
title: 301, 302, 307 atau 308, ubah hala mana untuk SEO
description: Ubah hala mana yang perlu digunakan apabila halaman berpindah. Apa kata dokumentasi Google tentang 301, 302, 307 dan 308, serta kesilapan yang lazim.
topic: web-development
type: guide
pubDate: 2026-11-06T22:00:00.000Z
updatedDate: ''
draft: false
summary:
  - Gunakan 301 atau 308 apabila perpindahan kekal, dan 302 atau 307 apabila sementara. Dokumentasi Google melayan 308 seperti 301 dan 307 seperti 302.
  - Ubah hala kekal memberitahu Google bahawa sasaran patut menjadi URL kanonik. Ubah hala sementara tidak, walaupun sasaran masih boleh diindeks.
  - 307 dan 308 penting apabila permintaan borang atau API mesti mengekalkan kaedah dan kandungannya. Bagi paparan halaman biasa, bezanya kecil.
  - Satu ringkasan terkini mendakwa 302 tidak menyalurkan isyarat kedudukan. Itu lebih kuat daripada kenyataan bertulis Google, jadi kami berpegang pada dokumentasi.
sources:
  - title: Redirects and Google Search (Google Search Central, updated 14 April 2026)
    url: https://developers.google.com/search/docs/crawling-indexing/301-redirects
  - title: How HTTP status codes, and network and DNS errors affect Google Search (Google Search Console Help)
    url: https://support.google.com/webmasters/answer/93641
  - title: Google explains how redirects affect ranking signals (Search Engine Journal, 5 November 2026)
    url: https://www.searchenginejournal.com/google-explains-how-redirects-affect-ranking-signals/595967/
  - title: Google treats 308 redirects as 301 redirects (Search Engine Roundtable, 12 July 2021)
    url: https://seroundtable.com/google-308-redirects-as-301-redirects-31732.html
  - title: Google says there is no PageRank dilution with 30x redirects (Search Engine Land, 2016)
    url: https://searchengineland.com/google-no-pagerank-dilution-using-301-302-30x-redirects-anymore-254608
  - title: 301 Moved Permanently (MDN Web Docs)
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301
  - title: RFC 7538, the 308 Permanent Redirect status code (IETF)
    url: https://datatracker.ietf.org/doc/html/rfc7538
faq:
  - question: Adakah ubah hala 301 menyebabkan kedudukan hilang?
    answer: Gary Illyes dari Google berkata pada 2016 bahawa ubah hala 30x tidak lagi kehilangan PageRank. Dokumentasi Google menyatakan ubah hala kekal memberi isyarat bahawa sasaran patut menjadi URL kanonik. URL lama masih boleh muncul seketika selepas perpindahan.
  - question: Adakah Google melayan 308 seperti 301?
    answer: Ya. Dokumentasi kod status Google menyenaraikan 308 setara dengan 301, dan Gary Illyes berkata pada 2021 bahawa Google menggabungkan kedua-duanya.
  - question: Adakah 302 buruk untuk SEO?
    answer: Tidak, jika perpindahan itu memang sementara. Google mengekalkan halaman asal dalam hasil bagi ubah hala sementara. Ia pilihan yang kurang baik untuk perpindahan kekal, kerana anda memberitahu Google bahawa halaman asal mungkin kembali.
  - question: Bila saya perlukan 307 atau 308?
    answer: Apabila permintaan mesti mengekalkan kaedah dan kandungannya, seperti POST borang atau panggilan API. Bagi paparan halaman biasa, 301 dan 308 berkelakuan sama, begitu juga 302 dan 307.
  - question: Bolehkah saya guna meta refresh atau ubah hala JavaScript?
    answer: Google lebih suka ubah hala di sisi pelayan. Meta refresh serta-merta dikira kekal dan yang berlengah dikira sementara. Ubah hala JavaScript ialah pilihan terakhir kerana pemaparan boleh gagal dan Google mungkin tidak pernah melihatnya.
  - question: Berapa banyak ubah hala berturut-turut yang terlalu banyak?
    answer: Googlebot mengikut sehingga 10 lompatan, tetapi setiap lompatan melambatkan pengguna. Halakan URL lama terus ke halaman akhir.
---

Apabila halaman berpindah, kod status yang anda pilih memberitahu Google dan pelayar jenis perpindahan itu. Panduan ini menjawab yang mana satu untuk digunakan. Ia berasaskan dokumentasi Google sendiri, dengan satu catatan tentang di mana sebuah ringkasan terkini melampaui dokumentasi itu.

## Jawapan ringkas

- **Berpindah selama-lamanya:** 301, atau 308.
- **Berpindah buat sementara dan akan kembali:** 302, atau 307.
- **Permintaan mesti mengekalkan kaedah dan kandungannya, seperti borang atau API:** 308 jika kekal, 307 jika sementara.

| Kod | Jenis | Apa yang Google lakukan | Kaedah kekal? |
| --- | --- | --- | --- |
| 301 | Kekal | Menunjukkan URL baharu dan menganggapnya kanonik | POST mungkin bertukar kepada GET |
| 308 | Kekal | Sama seperti 301 | Ya |
| 302 | Sementara | Mengekalkan halaman asal dalam hasil | POST mungkin bertukar kepada GET |
| 307 | Sementara | Sama seperti 302 | Ya |

## Apa kata dokumentasi Google

Halaman ubah hala Google, dikemas kini kali terakhir pada 14 April 2026, menyatakan perkara berikut:

- **Ubah hala kekal** menunjukkan sasaran baharu dalam hasil. Gunakannya hanya apabila anda pasti perpindahan itu tidak akan diterbalikkan.
- **Ubah hala sementara** mengekalkan halaman asal dalam hasil. Ia tidak memberi isyarat bahawa sasaran itu kanonik, walaupun sasaran masih boleh diindeks jika isyarat lain menunjuk kepadanya.
- **Ubah hala di sisi pelayan** disyorkan. Meta refresh sifar saat dikira kekal dan kelewatan yang lebih lama dikira sementara. Ubah hala JavaScript ialah pilihan terakhir, kerana pemaparan boleh gagal dan Google mungkin tidak pernah melihatnya.
- **Selepas berpindah,** URL lama mungkin terus muncul seketika. Halaman itu menyatakan ia akan pudar dengan masa.

Halaman kod status Google menyenaraikan 308 setara dengan 301 dan 307 setara dengan 302, serta menyatakan Googlebot mengikut sehingga 10 lompatan ubah hala. Gary Illyes berkata pada 2016 bahawa ubah hala 30x tidak kehilangan PageRank.

## Bila 307 dan 308 penting

Apabila pelayar menerima 301 atau 302 sebagai jawapan kepada permintaan POST, ia mungkin bertukar kepada GET untuk permintaan seterusnya. MDN mencatat perkara itu dibenarkan, dan 308 melarang pertukaran kaedah. RFC 7538 memperkenalkan 308 untuk menutup jurang itu, dan 307 melakukan perkara sama bagi perpindahan sementara. Jadi proses pembayaran, borang log masuk atau titik akhir API patut menggunakan 308 atau 307. Bagi halaman biasa yang sekadar dibuka orang, setiap pasangan berkelakuan sama.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:600px;height:auto" viewBox="0 0 600 250" role="img" aria-labelledby="rbg-c6-title rbg-c6-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-c6-title">Ubah hala mana yang perlu digunakan</title>
<desc id="rbg-c6-desc">Carta alir keputusan. Adakah URL lama akan kembali? Jika ya, gunakan 302, atau 307 jika kaedah mesti kekal. Jika tidak, tanya sama ada kaedah mesti kekal. Jika ya, gunakan 308. Jika tidak, gunakan 301.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; text-anchor: middle; }
.rbg .lab { font-size: 16px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 14px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .hotbox { fill: var(--terracotta, #B5562F); }
.rbg .hotlab { font-size: 16px; font-weight: 500; fill: #fff; }
.rbg .arr { stroke: var(--ink, #1B1B18); stroke-width: 2; fill: none; }
</style>
<rect class="box" x="200" y="10" width="200" height="50" rx="8"/>
<text class="lab" x="300" y="40">URL lama kembali?</text>
<path class="arr" d="M200 35 H110 V90 M104 80 L110 90 L116 80"/>
<path class="arr" d="M400 35 H490 V90 M484 80 L490 90 L496 80"/>
<text class="sub" x="150" y="28">Ya</text>
<text class="sub" x="450" y="28">Tidak</text>
<rect class="box" x="10" y="95" width="200" height="50" rx="8"/>
<text class="lab" x="110" y="125">Kaedah mesti kekal?</text>
<rect class="box" x="390" y="95" width="200" height="50" rx="8"/>
<text class="lab" x="490" y="125">Kaedah mesti kekal?</text>
<path class="arr" d="M60 145 V190 M54 180 L60 190 L66 180"/>
<path class="arr" d="M160 145 V190 M154 180 L160 190 L166 180"/>
<path class="arr" d="M440 145 V190 M434 180 L440 190 L446 180"/>
<path class="arr" d="M540 145 V190 M534 180 L540 190 L546 180"/>
<text class="sub" x="36" y="168">Tidak</text>
<text class="sub" x="184" y="168">Ya</text>
<text class="sub" x="420" y="168">Ya</text>
<text class="sub" x="566" y="168">Tidak</text>
<rect class="box" x="20" y="195" width="80" height="40" rx="8"/>
<text class="lab" x="60" y="221">302</text>
<rect class="box" x="120" y="195" width="80" height="40" rx="8"/>
<text class="lab" x="160" y="221">307</text>
<rect class="box" x="400" y="195" width="80" height="40" rx="8"/>
<text class="lab" x="440" y="221">308</text>
<rect class="hotbox" x="500" y="195" width="80" height="40" rx="8"/>
<text class="hotlab" x="540" y="221">301</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Rajah 1. Memilih ubah hala. Bacaan kami terhadap dokumentasi Google, MDN dan RFC 7538.</figcaption>
</figure>

## Kes lazim

Ini bacaan kami terhadap peraturan di atas, bukan senarai daripada Google:

- **HTTP ke HTTPS, atau satu nama hos ke yang lain:** 301.
- **Halaman yang dinamakan semula atau digabungkan:** 301 ke halaman paling sepadan.
- **Halaman penyelenggaraan singkat atau tawaran bermusim:** 302.
- **Domain yang berpindah:** 301 bagi setiap URL lama ke padanan barunya. Jangkakan URL lama kekal dalam hasil seketika.

## Kesilapan yang perlu dielakkan

- **Membiarkan 302 pada perpindahan kekal.** Anda memberitahu Google halaman asal mungkin kembali.
- **Rantaian dan gelung.** Googlebot mengikut sehingga 10 lompatan, dan setiap satu melambatkan pengguna. Halakan URL lama terus ke halaman akhir.
- **Mengubah hala semuanya ke halaman utama.** Nasihat Google bagi halaman yang dibuang tanpa pengganti serupa ialah 404 atau 410.
- **Menggunakan JavaScript apabila ubah hala di sisi pelayan boleh dibuat.**

## Di mana ringkasan terkini melampaui dokumentasi

Search Engine Journal meringkaskan perbincangan Google antara Gary Illyes dan Cherry Prommawin pada 5 November. Ia mengatakan 302 tidak menyalurkan isyarat kedudukan dan URL baharu sebahagian besarnya diabaikan. Halaman bertulis Google menyatakan kurang daripada itu: ubah hala sementara tidak memberi isyarat bahawa sasaran kanonik, walaupun sasaran masih boleh diindeks. Illyes berkata pada 2016 bahawa ubah hala 30x tidak kehilangan PageRank. Kedua-dua dakwaan ini tidak sama.

Artikel itu tidak menamakan videonya, dan kami tidak menemuinya, jadi kami tidak mengulang versi yang lebih kuat. Bahagian tentang kanibalisasi kandungan ialah pendapat penulisnya, bukan Google.

## Cara menyemak ubah hala

```
curl -sI https://example.com/old-page | head -n 5
```

Baca baris status dan pengepala Location. Dalam pelayar, tab Network menunjukkan perkara yang sama. URL inspection dalam Search Console menunjukkan URL mana yang dipilih Google sebagai kanonik. Tetapan berbeza mengikut hos dan rangka kerja, jadi semak kod status yang dipulangkan oleh anda dan jangan anggap ia kekal.

Untuk semakan berkaitan, lihat [apa yang status 4xx lakukan pada URL anda](/ms/web-development/http-4xx-status-google-search/) dan [senarai semak SEO untuk tapak web buatan AI](/ms/web-development/ai-built-website-seo/).
