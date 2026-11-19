---
title: "Query fan-out diterangkan: apa kata Google dan apa yang tidak dikatakannya"
description: Google berkata AI Overviews dan AI Mode mungkin menjalankan beberapa carian berkaitan di sebalik satu soalan. Apa yang didokumenkan, apa yang tidak, dan mengapa satu halaman bagi setiap sub-pertanyaan berisiko.
topic: ai-search
type: explainer
pubDate: 2026-11-19T19:46:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/query-fan-out-explained.jpg
coverAlt: Tangan menaip pada papan kekunci komputer riba
coverCredit: Kampus Production di Pexels
summary:
  - Query fan-out bermaksud satu soalan dipecahkan kepada beberapa carian berkaitan yang berjalan serentak, dan hasilnya digabungkan menjadi satu jawapan AI.
  - Dokumentasi Google berkata AI Overviews dan AI Mode "may use" (mungkin menggunakan) teknik ini. Google tidak memberi bilangan sub-carian dan tidak menyenaraikannya.
  - Google berkata tiada pengoptimuman khas diperlukan, dan memberi amaran bahawa halaman berasingan bagi setiap pertanyaan fan-out boleh melanggar dasar spam penyalahgunaan kandungan berskala.
  - Robby Stein dari Google pernah berkata sistem itu boleh mencari topik yang tidak disebut pengguna, dan Deep Search boleh menjalankan berpuluh-puluh malah beratus-ratus carian.
  - Tindak balas yang munasabah ialah satu halaman kukuh yang menjawab soalan susulan yang akan ditanya pembaca, serta menyemak tera AI peringkat halaman dalam Search Console.
sources:
  - title: AI features and your website (Google Search Central, dikemas kini 10 Disember 2025)
    url: https://developers.google.com/search/docs/appearance/ai-features
  - title: Optimizing your website for generative AI features on Google Search (Google Search Central, dikemas kini 10 Julai 2026)
    url: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - title: "Query Fan-Out Technique in AI Mode: New Details From Google (Search Engine Journal, 30 Julai 2025)"
    url: https://www.searchenginejournal.com/query-fan-out-technique-in-ai-mode-new-details-from-google/542385/
  - title: Generative AI performance report (Search) (Search Console Help)
    url: https://support.google.com/webmasters/answer/16984139
faq:
  - question: Apakah query fan-out?
    answer: Teknik apabila model menukarkan satu soalan kepada beberapa carian berkaitan, menjalankannya serentak dan menggabungkan hasilnya menjadi satu jawapan. Dokumentasi Google mentakrifkannya sebagai satu set pertanyaan berkaitan yang dijana model dan berjalan serentak.
  - question: Adakah Google mengesahkan AI Overviews menggunakan query fan-out?
    answer: Ya, dengan syarat. Google berkata AI Overviews dan AI Mode "may use" teknik itu. Google tidak berkata setiap pertanyaan mencetuskannya, dan tidak menyatakan berapa banyak carian dijalankan.
  - question: Bolehkah saya melihat sub-pertanyaan yang dijalankan Google?
    answer: Tidak dalam apa-apa yang diterbitkan Google. Laporan AI generatif Search Console menyenaraikan tera mengikut halaman, negara, peranti dan tarikh, tanpa pecahan pertanyaan. Alat yang mendakwa menunjukkan sub-pertanyaan sebenar hanya membuat anggaran.
  - question: Patutkah saya menulis halaman berasingan bagi setiap pertanyaan fan-out?
    answer: Google menasihatkan supaya tidak berbuat demikian. Panduannya berkata membuat halaman bagi setiap variasi pertanyaan, untuk memanipulasi kedudukan atau jawapan AI, melanggar dasar spam penyalahgunaan kandungan berskala. Tulis halaman berasingan hanya apabila sesuatu topik membantu pembaca dengan sendirinya.
  - question: Adakah saya perlukan llms.txt untuk query fan-out?
    answer: Tidak. Google berkata Search tidak menggunakan llms.txt atau fail khusus AI yang serupa, dan ia tidak membantu mahupun memudaratkan keterlihatan dalam Google Search. Anda boleh membuatnya untuk perkhidmatan lain.
  - question: Adakah query fan-out berfungsi sama dalam Bahasa Melayu?
    answer: Kami tidak tahu. Kami tidak menemui kenyataan Google tentang cara fan-out mengendalikan pertanyaan Bahasa Melayu atau campuran Bahasa Melayu dan Inggeris. Uji soalan anda sendiri dan semak data Search Console anda.
---

Tanyakan soalan panjang kepada AI Mode Google dan ia bukan sekadar mencari ayat anda. Google berkata ia boleh menjalankan beberapa carian berkaitan serentak dan menggabungkan hasilnya menjadi satu jawapan. Teknik ini dipanggil query fan-out. Banyak nasihat yang dibina atasnya hanyalah tekaan, jadi panduan ini memisahkan apa yang telah didokumenkan Google daripada apa yang belum.

## Apa yang didokumenkan Google

Halaman Google "AI features and your website" berkata AI Overviews dan AI Mode mungkin menjalankan beberapa carian berkaitan merentasi subtopik dan sumber data semasa membina jawapan. Ketika berbuat demikian, ia boleh menemui lebih banyak halaman sokongan, yang menurut Google membolehkannya memaparkan set pautan berguna yang lebih luas dan lebih pelbagai daripada carian klasik. Perkataan yang perlu diberi perhatian ialah "mungkin". Google juga berkata AI Overviews muncul hanya apabila sistemnya menilainya sebagai tambahan kepada Search klasik, jadi ia sering tidak dicetuskan. Kedua-dua ciri itu juga mungkin menggunakan model dan teknik berbeza, jadi pautan yang dipaparkan boleh berlainan.

Panduan pengoptimuman AI Google yang berasingan, dikemas kini pada 10 Julai 2026, mentakrifkan fan-out sebagai satu set pertanyaan berkaitan yang dijana oleh model dan berjalan serentak.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 300" role="img" aria-labelledby="rbg-b1-title rbg-b1-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-b1-title">Ilustrasi query fan-out</title>
<desc id="rbg-b1-desc">Satu soalan di sebelah kiri dipecahkan kepada empat carian berkaitan di tengah, yang kemudian bergabung menjadi satu jawapan dengan pautan di sebelah kanan. Sub-carian itu hanyalah contoh, kerana Google tidak menerbitkan yang sebenar.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 16px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 14px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .arr { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>
<rect class="box" x="10" y="108" width="140" height="84" rx="12"/>
<text class="lab" x="24" y="140">Satu soalan</text>
<text class="sub" x="24" y="164">ditaip pengguna</text>
<path class="arr" d="M156 150 H176 M170 144 L178 150 L170 156"/>
<rect class="box" x="184" y="14" width="192" height="52" rx="10"/>
<text class="lab" x="198" y="46">Carian berkaitan A</text>
<rect class="box" x="184" y="84" width="192" height="52" rx="10"/>
<text class="lab" x="198" y="116">Carian berkaitan B</text>
<rect class="box" x="184" y="164" width="192" height="52" rx="10"/>
<text class="lab" x="198" y="196">Carian berkaitan C</text>
<rect class="box" x="184" y="234" width="192" height="52" rx="10"/>
<text class="lab" x="198" y="266">Carian berkaitan D</text>
<path class="arr" d="M382 150 H402 M396 144 L404 150 L396 156"/>
<rect class="base" x="410" y="108" width="140" height="84" rx="12"/>
<text class="lab" x="424" y="140">Satu jawapan</text>
<text class="sub" x="424" y="164">dengan pautan</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Rajah 1. Bentuk umum query fan-out, seperti yang diterangkan Google. Bilangan dan ayat sub-carian hanyalah ilustrasi, kerana Google tidak menerbitkannya.</figcaption>
</figure>

## Apa yang ditambah oleh seorang eksekutif Google

Dalam temu bual Julai 2025 yang dilaporkan Search Engine Journal, Robby Stein dari Google menerangkan model bahasa yang membaca soalan dan mencipta carian berkaitan, sebahagiannya tentang topik yang tidak pernah disebut pengguna. Contohnya ialah pertanyaan tentang aktiviti di Nashville bersama kumpulan, yang boleh menghasilkan sub-soalan tentang restoran, bar dan aktiviti untuk kanak-kanak. Bagi Deep Search, mod yang lebih berat, penerangannya menunjukkan berpuluh-puluh malah beratus-ratus carian latar belakang dalam beberapa minit. Ini temu bual, bukan spesifikasi teknikal, jadi anggaplah perincian itu sebagai ilustrasi.

## Apa yang tidak didokumenkan

Kami tidak menemui sebarang dokumen Google yang menyatakan:

- berapa banyak sub-carian dijalankan bagi jawapan biasa;
- bagaimana sub-carian itu ditulis, atau bagaimana hasilnya disusun dan digabungkan;
- sama ada soalan yang sama menghasilkan sub-carian yang sama setiap kali.

Search Console juga tidak menyenaraikannya. Laporan AI generatifnya mengira tera mengikut halaman, negara, peranti dan tarikh, tanpa pecahan pertanyaan. Kesimpulan kami: mana-mana alat yang mendakwa menunjukkan sub-pertanyaan sebenar Google hanya membuat anggaran.

## Apa yang Google minta dibuat, dan tidak dibuat

- **Tiada keperluan tambahan.** Halaman mesti diindeks dan layak muncul dalam Search dengan petikan (snippet). Google berkata tiada pengoptimuman khas atau penanda baharu diperlukan, dan mengesyorkan asas SEO yang standard.
- **Jangan buat halaman bagi setiap pertanyaan.** Google menasihatkan supaya tidak membuat halaman berasingan bagi setiap variasi pertanyaan, termasuk pertanyaan fan-out, jika tujuannya memanipulasi kedudukan atau jawapan AI. Google berkata itu melanggar dasar spam penyalahgunaan kandungan berskala, dan bilangan halaman yang banyak tidak menjadikan sesebuah tapak lebih baik.
- **Tidak perlu llms.txt.** Google berkata Search tidak menggunakannya dan ia tidak membantu mahupun memudaratkan keterlihatan.

<figure class="ph"><img src="/images/articles/query-fan-out-explained-1.jpg" alt="Nota lekat pada grid papan putih, satu daripadanya bertulis how-to" width="1600" height="900" loading="lazy" decoding="async"><figcaption>Foto: Walls.io di Pexels</figcaption></figure>

## Tindak balas yang munasabah (pandangan kami)

Semua ini bukan nasihat Google selain perkara di atas. Inilah cara kami menerapkannya.

1. **Senaraikan soalan susulan.** Selepas pembaca mendapat jawapan utama, apa yang akan mereka tanya seterusnya? Bagi halaman tentang memilih air fryer di Malaysia, mungkin saiz, kuasa watt, julat harga, waranti dan servis. Contoh itu daripada kami.
2. **Jawab soalan itu dalam halaman yang sama,** di bawah tajuk yang jelas, dan jangan pecahkannya kepada halaman nipis. Buat halaman berasingan hanya apabila topik itu berguna kepada pembaca dengan sendirinya.
3. **Semak apa yang sudah digunakan ciri AI.** Dalam [laporan AI generatif](/ms/ai-search/search-console-generative-ai-report/) Search Console, susun halaman mengikut tera.
4. **Uji sendiri.** Jika AI Mode tersedia kepada anda, tanya soalan anda sendiri dan catat subtopik yang dicakup jawapan itu.

## Satu hujah balas

Sesetengah pakar SEO berkata fan-out menerangkan mengapa halaman yang tidak berada di kedudukan tinggi untuk pertanyaan tepat masih dipetik. Dokumentasi Google hanya berkata teknik itu boleh memaparkan set pautan yang lebih luas, bukan bahawa kedudukan tidak lagi penting. Google juga berkata klik daripada AI Overviews cenderung lebih berkualiti, walaupun halaman yang kami baca tidak memberi angka, dan laporan AI Search Console mengira tera, bukan klik. Untuk bukti tentang kedudukan dan petikan, lihat [GEO lawan SEO pada 2026](/ms/ai-search/geo-vs-seo-2026/).

## Apa yang kami tidak tahu

Kami tidak tahu bilangan sub-carian, bagaimana ia dipilih, atau betapa stabilnya ia dari sehari ke sehari. Kami tidak menemui kenyataan Google tentang pertanyaan Bahasa Melayu atau campuran Bahasa Melayu dan Inggeris. Dan kami tiada bukti bahawa menyusun halaman berdasarkan sub-pertanyaan yang diteka meningkatkan peluang ia dipetik. Anggaplah itu sebagai hipotesis untuk diuji pada halaman anda sendiri, bukan peraturan.
