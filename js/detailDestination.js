document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    const openMenu = () => {
        mobileMenu.classList.remove('-translate-x-full');
        menuOverlay.classList.remove('hidden');
        setTimeout(() => menuOverlay.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        mobileMenu.classList.add('-translate-x-full');
        menuOverlay.classList.add('opacity-0');
        setTimeout(() => menuOverlay.classList.add('hidden'), 300);
        document.body.style.overflow = 'auto';
    };

    if (menuToggleBtn && mobileMenu && menuCloseBtn && menuOverlay) {
        menuToggleBtn.addEventListener('click', openMenu);
        menuCloseBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
    }
    const destinationsData = {
        'kampung-batik-jetis': {
            name: "Kampung Batik Jetis",
            category: "Budaya",
            phone: 'tel:+6281330073826',
            images: [
                "https://media.indozone.id/crop/photo/p2/95/2025/04/12/1000259473-634846500.jpg",
                "https://rynari.wordpress.com/wp-content/uploads/2016/05/labirin-bisnis-kampoeng-batik-jetis.jpg",
                "https://cdn.ngopibareng.id/uploads/2023/2023-09-03/kampung-batik-jetis-destinasi-umkm-lokal-di-gelaran-porprov--01",
            ],
            contentBlocks: [
                { type: 'text', content: 'Kampung Batik Jetis adalah sentra kerajinan batik tulis khas Sidoarjo yang sudah ada sejak tahun 1675. Kampung ini menjadi tujuan wisata edukasi bagi Anda yang ingin melihat langsung proses pembuatan batik, mulai dari mencanting, pewarnaan, hingga pelorodan.' },
                { type: 'image', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPJa01J73lqTiaqTl4M43PEoshXouilfUsA&s', 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/850/2023/09/04/Kampung-batik-tulis-sidoarjo-1957907684.jpeg'] },
                { type: 'text', content: 'Ciri khas Batik Sidoarjo, khususnya dari Jetis, adalah motifnya yang kental dengan nuansa pesisir dan flora, seperti motif Ikan Bandeng, Udang, dan Mangrove. Tempat ini juga merupakan pusat UMKM di mana pengunjung dapat berbelanja batik tulis, cap, dan kombinasi dengan harga yang bervariasi.' },
                { type: 'text', content: 'Pengunjung seringkali diberikan kesempatan untuk mencoba membatik langsung di beberapa galeri. Ini adalah pengalaman imersif yang sempurna untuk memahami warisan budaya Jawa Timur.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.077421521109!2d112.71170707592805!3d-7.456687273495069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1333afd2ef1%3A0x977f519df88e7c23!2sKampoeng%20Batik%20Jetis!5e0!3m2!1sid!2sid!4v1761553946696!5m2!1sid!2sid",
            address: "Jalan P. Diponegoro, Lemah Putro, Lemahputro, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur",
            openingHours: [
                { day: "Setiap Hari", time: "09:00 - 20:00" }
            ]
        },
        'candi-pari': {
            name: "Candi Pari",
            category: "Sejarah",
            phone: "tel:+623134171552",
            images: [
                "https://www.tempatwisata.pro/users_media/3092/Candi%20Pari.jpg",
                "https://awsimages.detik.net.id/community/media/visual/2022/04/04/candi-pari_169.jpeg?w=1200",
            ],
            contentBlocks: [
                { type: 'text', content: 'Candi Pari adalah peninggalan masa Klasik Indonesia yang terletak di Desa Candipari, Kecamatan Porong, Sidoarjo. Candi bercorak Hindu ini diperkirakan dibangun pada masa Majapahit, yaitu tahun 1370 M, di era pemerintahan Raja Hayam Wuruk. Candi ini memiliki keunikan arsitektur yang dipengaruhi oleh budaya Campa (Vietnam Selatan).' },
                { type: 'image', images: ['https://etnis.id/content/images/2020/07/2.-Candi-Sumur.jpg'] },
                { type: 'text', content: 'Candi ini terbuat dari bata merah dengan bentuk persegi empat. Legenda lokal mengisahkan bahwa candi ini dibangun sebagai tempat peristirahatan seorang pangeran dari Campa yang menikah dengan penduduk setempat. Keindahan candi ini menjadikannya spot fotografi yang menarik bagi pecinta sejarah dan arsitektur kuno.' }
            ],
            ticket: 3000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.537924101874!2d112.68086177592882!3d-7.516149874162465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7de2693125185%3A0xe503721c13193a60!2sCandi%20Pari!5e0!3m2!1sid!2sid!4v1761554014923!5m2!1sid!2sid",
            address: "Candipari, Jl. Purbakala, Candipari Wetan, Candipari, Kec. Porong, Kabupaten Sidoarjo, Jawa Timur",
            openingHours: [
                { day: "Senin - Jumat", time: "08:00 - 16:00" },
                { day: "Sabtu - Minggu", time: "07:00 - 17:00" }
            ]
        },
        'pulau-lusi': {
            name: "Pulau Lusi",
            category: "Alam",
            phone: "tel:+62318921946",
            images: [
                "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/200/2025/01/28/WhatsApp-Image-2025-01-28-at-153006-2317154963.jpeg",
                "https://sidita.disbudpar.jatimprov.go.id/storage/foto-dtw/d3ca2_1670487091.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: 'Pulau Sarinah, atau yang sekarang lebih dikenal sebagai **Pulau Lusi** (Lumpur Sidoarjo), adalah pulau buatan yang terbentuk dari endapan lumpur Lapindo di tengah perairan Muara Sungai Porong. Dulunya gersang, pulau seluas sekitar 93,4 hektare ini kini telah ditanami **hutan mangrove** dan menjadi destinasi wisata alam dan penelitian. Untuk mencapai pulau ini, pengunjung harus menyewa perahu dari **Dermaga Tlocor**. Di pulau ini, Anda dapat menikmati pemandangan alam, mengamati burung, dan berfoto di kawasan hutan mangrove yang eksotis, menjadikannya bukti unik adaptasi lingkungan.' },
            ],
            ticket: 5000, // Biaya masuk dermaga, belum termasuk sewa perahu
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.048763506511!2d112.87090087592948!3d-7.569662974767992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7c39f454e9da5%3A0xc7761f4a577c76e7!2sPulau%20Sarinah!5e0!3m2!1sid!2sid!4v1761554216826!5m2!1sid!2sid",
            address: "CVJF+49Q, Unnamed Road, Tanjungsari, Kupang, Jabon, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "07:00 - 16:00" }
            ]
        },
        'delta-fishing': {
            name: "Delta Fishing",
            category: "Rekreasi",
            phone: 'tel:+6283849217790',
            images: [
                "https://i.ibb.co/j3d692p/delta-fishing.jpg",
                "https://i.ibb.co/FhmgC2K/delta-fishing-2.jpg",
                "https://i.ibb.co/p3y895p/delta-fishing-3.jpg",
                "https://i.ibb.co/8Yj01wT/delta-fishing-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Delta Fishing adalah tempat wisata keluarga di Sidoarjo yang menggabungkan konsep **pemancingan** air tawar, kuliner, dan wahana rekreasi. Destinasi ini sangat populer untuk kegiatan keluarga, menawarkan suasana pedesaan yang asri dan teduh.' },
                { type: 'image', images: ['https://i.ibb.co/FhmgC2K/delta-fishing-2.jpg', 'https://i.ibb.co/p3y895p/delta-fishing-3.jpg'] },
                { type: 'text', content: 'Fasilitas yang tersedia cukup lengkap, mulai dari area pemancingan, warung makan dengan menu ikan segar, hingga area bermain anak, kolam renang, dan aktivitas *outbound* seperti *flying fox* dan sepeda air. Cocok untuk menghabiskan akhir pekan santai.' }
            ],
            ticket: 5000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8927847952134!2d112.68686617466847!3d-7.370503092633005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Jalan Mbah Sholeh No.1, Desa Prasung, Kecamatan Buduran, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "09:00 - 20:00" }
            ]
        },
        'museum-mpu-tantular': {
            name: "Museum Mpu Tantular",
            category: "Edukasi",
            phone: 'tel:+62318056688',
            images: [
                "https://i.ibb.co/P4Mh6k2/mpu-tantular.jpg",
                "https://i.ibb.co/Yc5Sj91/mpu-tantular-2.jpg",
                "https://i.ibb.co/G03T7p7/mpu-tantular-3.jpg",
                "https://i.ibb.co/v4b6Y5v/mpu-tantular-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Museum Mpu Tantular adalah salah satu museum negeri terbesar di Jawa Timur. Didirikan pada tahun 1933, museum ini menyimpan koleksi benda sejarah, budaya, arkeologi, dan etnografi yang kaya, meliputi artefak, fosil, keramik, hingga seni rupa.' },
                { type: 'image', images: ['https://i.ibb.co/G03T7p7/mpu-tantular-3.jpg'] },
                { type: 'text', content: 'Nama museum ini diambil dari nama pujangga besar dari masa Majapahit, **Mpu Tantular**, yang menulis Kakawin Sutasoma yang memuat filosofi **Bhinneka Tunggal Ika**. Museum ini merupakan tempat ideal untuk wisata edukasi bagi pelajar dan masyarakat umum untuk mendalami sejarah dan budaya Jawa Timur.' }
            ],
            ticket: 5000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.172449553738!2d112.71690037466827!3d-7.341857692658828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e492215c00f7%3A0xc2853757e2a92c4a!2sMuseum%20Negeri%20Mpu%20Tantular!5e0!3m2!1sid!2sid!4v1719598284615!5m2!1sid!2sid",
            address: "Jl. Raya Buduran - Jati No.5 Sidoarjo, HP8C+G4 Siwalanpanji, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Selasa - Jumat", time: "08:00 - 15:30" },
                { day: "Sabtu - Minggu", time: "08:00 - 15:30" },
                { day: "Senin", time: "Tutup" }
            ]
        },
        'alun-alun-sidoarjo': {
            name: "Alun Alun Sidoarjo",
            category: "Rekreasi",
            phone: 'tel:+62318963184', // Dinas terkait
            images: [
                "https://i.ibb.co/r7X06XJ/alun-alun-sidoarjo.jpg",
                "https://i.ibb.co/sK6D0yF/alun-alun-sidoarjo-2.jpg",
                "https://i.ibb.co/p6V5bJp/alun-alun-sidoarjo-3.jpg",
                "https://i.ibb.co/T1tWw3n/alun-alun-sidoarjo-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Alun-alun Sidoarjo adalah ruang terbuka hijau sentral yang berfungsi sebagai pusat rekreasi, olahraga, dan kegiatan sosial masyarakat. Tempat ini dikelilingi oleh bangunan penting seperti Masjid Agung Sidoarjo dan kantor pemerintahan.' },
                { type: 'image', images: ['https://i.ibb.co/p6V5bJp/alun-alun-sidoarjo-3.jpg'] },
                { type: 'text', content: 'Ikon utama di area ini adalah **Monumen Jayandaru** yang berbentuk udang dan bandeng, melambangkan komoditas unggulan Sidoarjo. Alun-alun ini sangat ramai, terutama saat sore dan malam hari, dengan banyaknya pedagang kaki lima yang menjajakan kuliner khas Sidoarjo.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8927847952134!2d112.71261077466847!3d-7.44755109257692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid",
            address: "HP39+G4 Magersari, Kabupaten Sidoarjo, Jawa Timur",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'kebun-cokelat': {
            name: "Agrowisata Kebun Cokelat Balongbendo",
            category: "Agrowisata",
            phone: 'tel:+6282220567818',
            images: [
                "https://i.ibb.co/b3X7s6L/kebun-cokelat.jpg",
                "https://i.ibb.co/7R8S8dZ/kebun-cokelat-2.jpg",
                "https://i.ibb.co/741x8rY/kebun-cokelat-3.jpg",
                "https://i.ibb.co/zX9rR5j/kebun-cokelat-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Agrowisata Kebun Cokelat di Balongbendo adalah salah satu tempat wisata edukasi yang populer. Destinasi ini memungkinkan pengunjung untuk melihat langsung proses penanaman hingga pengolahan buah kakao menjadi produk cokelat. Ini adalah tempat yang menyenangkan untuk belajar tentang agrikultur.' },
                { type: 'image', images: ['https://i.ibb.co/7R8S8dZ/kebun-cokelat-2.jpg'] },
                { type: 'text', content: 'Meskipun bukan kebun cokelat skala besar, tempat ini menyediakan fasilitas wisata keluarga, seperti area bermain dan spot foto. Pengunjung juga dapat membeli produk olahan cokelat khas Sidoarjo sebagai oleh-oleh.' }
            ],
            ticket: 10000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.876735201193!2d112.6074906746677!3d-7.266209592723023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e2794c489b4f%3A0x8e82a8849b29e061!2sDesa%20Penambangan%20Balongbendo!5e0!3m2!1sid!2sid!4v1719598492080!5m2!1sid!2sid",
            address: "HGQP+HMG, RT.12/RW.03, Penambangan, Kec. BalongBendo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "07:00 - 16:30" }
            ]
        },
        'wisata-bahari-tlocor': {
            name: "Wisata Bahari Tlocor (Dermaga ke Pulau Lusi)",
            category: "Alam",
            phone: 'tel:+6282141315071',
            images: [
                "https://i.ibb.co/W21x1Tf/tlocor.jpg",
                "https://i.ibb.co/N2XQ3yX/tlocor-2.jpg",
                "https://i.ibb.co/30L7c20/tlocor-3.jpg",
                "https://i.ibb.co/sKqQ72R/tlocor-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Wisata Bahari Tlocor adalah dermaga utama yang menjadi titik awal perjalanan menuju **Pulau Lusi**. Destinasi ini berada di kawasan pesisir Jabon dan menyajikan pemandangan muara sungai yang dikelilingi oleh **hutan mangrove** yang rimbun.' },
                { type: 'image', images: ['https://i.ibb.co/30L7c20/tlocor-3.jpg', 'https://i.ibb.co/sKqQ72R/tlocor-4.jpg'] },
                { type: 'text', content: 'Aktivitas utama di sini adalah menyewa perahu *(boat)* untuk menyusuri Sungai Porong dan menuju Pulau Lusi (Pulau Sarinah). Ini adalah pengalaman unik yang memadukan wisata bahari, edukasi lingkungan, dan melihat hasil adaptasi pasca bencana lumpur Lapindo.' }
            ],
            ticket: 5000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0772452655077!2d112.87113117466986!3d-7.551079892461875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e7428f731c3b%3A0xc665191542f7c223!2sPulau%20Lusi!5e0!3m2!1sid!2sid!4v1719598048601!5m2!1sid!2sid", // Menggunakan map Pulau Lusi karena Tlocor adalah dermaganya
            address: "CRWW+W3F, Telocor, Tanjungsari, Kupang, Kec. Jabon, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "06:00 - 17:00" }
            ]
        },
        'pasar-malam-gor': {
            name: "Pasar Malam GOR Sidoarjo",
            category: "Rekreasi",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/6y4sK7v/pasar-malam-gor.jpg",
                "https://i.ibb.co/nC5R8Fh/pasar-malam-gor-2.jpg",
                "https://i.ibb.co/q5k2D9f/pasar-malam-gor-3.jpg",
                "https://i.ibb.co/Wc2v07w/pasar-malam-gor-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Pasar Malam GOR Sidoarjo adalah pusat hiburan rakyat yang biasanya diselenggarakan di area GOR Delta. Pasar malam ini populer karena menawarkan berbagai wahana permainan, mulai dari yang ekstrem seperti **Kora-Kora** dan **Bianglala**, hingga permainan anak-anak.' },
                { type: 'image', images: ['https://i.ibb.co/nC5R8Fh/pasar-malam-gor-2.jpg'] },
                { type: 'text', content: 'Selain wahana, area ini juga menjadi surga kuliner dengan banyaknya pedagang yang menjual aneka jajanan tradisional maupun modern. Pasar malam ini bersifat musiman dan lokasinya sering berpindah di area GOR.' }
            ],
            ticket: 5000, // Biaya masuk area GOR/parkir
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883395277152!2d112.71440077466846!3d-7.44755109257692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid", // Lokasi dekat GOR Delta
            address: "Area GOR Delta Sidoarjo, Sumokali, Candi, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari (Musiman)", time: "16:00 - 23:00" }
            ]
        },
        'sentra-kuliner-g-walk': {
            name: "Sentra Kuliner G-Walk",
            category: "Kuliner",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/30B0f2q/g-walk.jpg",
                "https://i.ibb.co/1n5X48k/g-walk-2.jpg",
                "https://i.ibb.co/6Fh80R8/g-walk-3.jpg",
                "https://i.ibb.co/L5hS5b9/g-walk-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Sentra Kuliner G-Walk adalah pusat jajanan serba ada (JASERA) yang menawarkan berbagai pilihan makanan dan minuman. Meskipun namanya identik dengan G-Walk Surabaya, sentra kuliner ini menjadi populer di Sidoarjo karena banyaknya pilihan dan suasananya yang ramai di malam hari.' },
                { type: 'image', images: ['https://i.ibb.co/1n5X48k/g-walk-2.jpg'] },
                { type: 'text', content: 'Cocok untuk tempat berkumpul, G-Walk menyediakan hidangan mulai dari masakan tradisional Jawa, *seafood*, hingga makanan modern. Merupakan destinasi wajib bagi pecinta kuliner saat malam hari.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3b52b2b1b55%3A0x8f3c71307b2b1a1!2sSentra%20Kuliner%20Wisma%20Tropodo!5e0!3m2!1sid!2sid!4v1719598585800!5m2!1sid!2sid", // Menggunakan SWK terdekat/relevan di Sidoarjo (Wisma Tropodo)
            address: "Jl. Wisma Tropodo Blok F1, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "17:00 - 24:00" }
            ]
        },
        'monumen-jayandaru': {
            name: "Monumen Jayandaru",
            category: "Sejarah",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/RzMny9P/jayandaru.jpg",
                "https://i.ibb.co/f4F4q9M/jayandaru-2.jpg",
                "https://i.ibb.co/n1g5Qp5/jayandaru-3.jpg",
                "https://i.ibb.co/24c0d1g/jayandaru-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Monumen Jayandaru adalah landmark ikonik Sidoarjo, berlokasi di tengah Alun-alun. Monumen ini menampilkan patung udang dan bandeng yang besar, melambangkan **Udang dan Bandeng** sebagai komoditas perikanan unggulan dan identitas Kabupaten Sidoarjo.' },
                { type: 'image', images: ['https://i.ibb.co/n1g5Qp5/jayandaru-3.jpg'] },
                { type: 'text', content: 'Monumen ini diresmikan pada tahun 2015 dan menjadi salah satu spot foto favorit, terutama saat malam hari ketika diterangi lampu. Monumen ini mencerminkan semangat dan harapan Sidoarjo sebagai kota yang makmur.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883395277152!2d112.71440077466846!3d-7.44755109257692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid",
            address: "Alun-Alun Sidoarjo, Magersari, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'klenteng-mbah-ratu': {
            name: "Klenteng Ong Ya King (Mbah Ratu)",
            category: "Budaya",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/t3F4b4f/klenteng-mbah-ratu.jpg",
                "https://i.ibb.co/xX1T2nZ/klenteng-mbah-ratu-2.jpg",
                "https://i.ibb.co/60V5x5y/klenteng-mbah-ratu-3.jpg",
                "https://i.ibb.co/5R0r5bM/klenteng-mbah-ratu-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Klenteng Ong Ya King, atau yang dikenal juga sebagai **Klenteng Mbah Ratu**, adalah salah satu klenteng tertua dan paling dihormati di Sidoarjo. Klenteng ini merupakan pusat ibadah Tridharma (Taoisme, Buddhisme, dan Konfusianisme) dan memiliki arsitektur khas Tiongkok yang indah.' },
                { type: 'image', images: ['https://i.ibb.co/60V5x5y/klenteng-mbah-ratu-3.jpg'] },
                { type: 'text', content: 'Klenteng ini menjadi simbol kerukunan antarumat beragama di Sidoarjo. Selain sebagai tempat ibadah, klenteng ini sering dikunjungi wisatawan karena nilai sejarah dan arsitekturnya yang memukau.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883395277152!2d112.71440077466846!3d-7.44755109257692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6616c141d8f%3A0x7d6f5195b05c56d1!2sKelenteng%20Ong%20Ya%20King!5e0!3m2!1sid!2sid!4v1719598692487!5m2!1sid!2sid",
            address: "Jl. Mojopahit, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "07:00 - 20:00" }
            ]
        },
        'taman-kota-sidoarjo': {
            name: "Taman Kota Sidoarjo",
            category: "Rekreasi",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/9q09Z4z/taman-kota.jpg",
                "https://i.ibb.co/5cQ3S2t/taman-kota-2.jpg",
                "https://i.ibb.co/FhmgC2K/taman-kota-3.jpg",
                "https://i.ibb.co/v4b6Y5v/taman-kota-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Taman Kota Sidoarjo adalah paru-paru kota yang menyediakan ruang terbuka hijau bagi masyarakat. Tempat ini ideal untuk bersantai, berolahraga, atau sekadar menghirup udara segar di tengah hiruk pikuk kota. Tempat ini memiliki berbagai fasilitas seperti kursi taman dan area hijau yang terawat.' },
                { type: 'image', images: ['https://i.ibb.co/5cQ3S2t/taman-kota-2.jpg'] },
                { type: 'text', content: 'Taman ini sering dijadikan tempat *jogging* pagi dan sore hari. Kawasan sekitar taman juga menjadi pusat kuliner malam hari yang menyediakan jajanan ringan hingga makanan berat.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3b52b2b1b55%3A0x8f3c71307b2b1a1!2sSentra%20Kuliner%20Wisma%20Tropodo!5e0!3m2!1sid!2sid!4v1719598585800!5m2!1sid!2sid", // Menggunakan Taman Pinang Indah/relevan
            address: "Area Taman Pinang Indah, Jl. Raya Rangkah Kidul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'pusat-oleh-oleh-bandeng': {
            name: "Pusat Oleh-Oleh Bandeng Juwana",
            category: "Belanja",
            phone: 'tel:+62318941011',
            images: [
                "https://i.ibb.co/qFmJ0jT/bandeng-juwana.jpg",
                "https://i.ibb.co/6P0Jm9B/bandeng-juwana-2.jpg",
                "https://i.ibb.co/1n5X48k/bandeng-juwana-3.jpg",
                "https://i.ibb.co/L5hS5b9/bandeng-juwana-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Sidoarjo dikenal sebagai **Kota Udang dan Bandeng**. Pusat Oleh-Oleh Bandeng Juwana adalah tempat wajib dikunjungi untuk membeli oleh-oleh khas, terutama produk olahan ikan bandeng tanpa duri atau presto.' },
                { type: 'image', images: ['https://i.ibb.co/6P0Jm9B/bandeng-juwana-2.jpg'] },
                { type: 'text', content: 'Selain bandeng presto, toko ini juga menjual berbagai macam kerupuk, petis, dan produk olahan laut lainnya. Lokasinya yang strategis sering dijadikan tempat pemberhentian bus wisatawan.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5a019e075c3%3A0xc6c7b95a8f2780e5!2sBandeng%20Juwana%20Asli!5e0!3m2!1sid!2sid!4v1719598822692!5m2!1sid!2sid",
            address: "Jl. Raya Waru No. 1, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "07:00 - 21:00" }
            ]
        },
        'perahu-lumpur-sidoarjo': {
            name: "Wisata Perahu Lumpur Sidoarjo",
            category: "Edukasi",
            phone: 'tel:+628123000557',
            images: [
                "https://i.ibb.co/Vq2p19p/lumpur-sidoarjo.jpg",
                "https://i.ibb.co/6y4sK7v/lumpur-sidoarjo-2.jpg",
                "https://i.ibb.co/nC5R8Fh/lumpur-sidoarjo-3.jpg",
                "https://i.ibb.co/q5k2D9f/lumpur-sidoarjo-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Wisata Perahu Lumpur Sidoarjo menawarkan pengalaman unik menyusuri kawasan yang terdampak bencana lumpur Lapindo. Tur ini memberikan perspektif edukatif mengenai dampak lingkungan, sosial, dan sejarah dari fenomena alam tersebut. Perahu akan membawa Anda mendekat ke kawasan semburan dan tanggul utama.' },
                { type: 'image', images: ['https://i.ibb.co/nC5R8Fh/lumpur-sidoarjo-3.jpg'] },
                { type: 'text', content: 'Perjalanan ini sangat cocok untuk edukasi geologi dan mitigasi bencana. Pengunjung dapat melihat patung-patung peringatan dan sisa-sisa bangunan yang tenggelam.' }
            ],
            ticket: 10000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4813589993335!2d112.72146317466806!3d-7.469062592558581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598926490!5m2!1sid!2sid", // Area Semburan Lumpur
            address: "Jalan Raya Porong, Siring, Kec. Porong, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "08:00 - 16:00" }
            ]
        },
        'wisata-air-gunung-anyar': {
            name: "Wisata Air Gunung Anyar",
            category: "Alam",
            phone: 'tel:+628121645007',
            images: [
                "https://i.ibb.co/gRg0T4z/gunung-anyar.jpg",
                "https://i.ibb.co/T1tWw3n/gunung-anyar-2.jpg",
                "https://i.ibb.co/7R8S8dZ/gunung-anyar-3.jpg",
                "https://i.ibb.co/zX9rR5j/gunung-anyar-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Wisata Air Gunung Anyar (sebenarnya lebih sering merujuk ke Surabaya Timur, yang berbatasan dengan Sidoarjo) menawarkan suasana alam dan air yang tenang. Destinasi ini cocok untuk mereka yang mencari ketenangan dan pemandangan hijau, meskipun lokasinya adalah perbatasan yang dekat dengan Rungkut.' },
                { type: 'image', images: ['https://i.ibb.co/T1tWw3n/gunung-anyar-2.jpg'] },
                { type: 'text', content: 'Biasanya dilengkapi dengan kolam pancing atau perahu kayuh sederhana. Tempat ini menawarkan pengalaman wisata yang jauh dari keramaian kota.' }
            ],
            ticket: 5000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.900989396263!2d112.78440077466768!3d-7.30602309269358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb3950d8778d%3A0x6543b5735b54b1d6!2sWisata%20Air%20Mangrove%20Gunung%20Anyar!5e0!3m2!1sid!2sid!4v1719599026338!5m2!1sid!2sid",
            address: "Jl. Tambak Wedi, Gunung Anyar Tambak, Kec. Gn. Anyar, Kota Surabaya, Jawa Timur (Perbatasan Sidoarjo).",
            openingHours: [
                { day: "Setiap Hari", time: "08:00 - 17:00" }
            ]
        },
        'masjid-agung-sidoarjo': {
            name: "Masjid Agung Sidoarjo",
            category: "Religi",
            phone: 'tel:+62318961730',
            images: [
                "https://i.ibb.co/q1V6K6p/masjid-agung.jpg",
                "https://i.ibb.co/G03T7p7/masjid-agung-2.jpg",
                "https://i.ibb.co/p3y895p/masjid-agung-3.jpg",
                "https://i.ibb.co/8Yj01wT/masjid-agung-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Masjid Agung Sidoarjo adalah masjid kebanggaan dan salah satu landmark religius di pusat kota, terletak persis di seberang Alun-Alun Sidoarjo. Masjid ini memiliki arsitektur yang megah dengan sentuhan modern dan tradisional, serta kubah berwarna emas.' },
                { type: 'image', images: ['https://i.ibb.co/p3y895p/masjid-agung-3.jpg'] },
                { type: 'text', content: 'Selain sebagai tempat ibadah, masjid ini juga menjadi pusat kegiatan keagamaan dan sosial. Keindahan arsitekturnya, terutama saat malam hari, menarik perhatian pejalan kaki dan wisatawan.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62b083b4b53%3A0x2a17f6943b17926b!2sMasjid%20Agung%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719599147575!5m2!1sid!2sid",
            address: "Jl. Sultan Agung No. 34, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'kolam-renang-berlian': {
            name: "Kolam Renang Berlian",
            category: "Rekreasi",
            phone: 'tel:+6281333333333',
            images: [
                "https://i.ibb.co/D8gV9pM/kolam-renang.jpg",
                "https://i.ibb.co/xX1T2nZ/kolam-renang-2.jpg",
                "https://i.ibb.co/RzMny9P/kolam-renang-3.jpg",
                "https://i.ibb.co/680D1Jc/kolam-renang-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Kolam Renang Berlian (terkadang merujuk pada area kolam renang di GOR Sidoarjo atau fasilitas privat) adalah salah satu destinasi rekreasi air yang populer di Sidoarjo. Tempat ini menawarkan kolam untuk dewasa dan anak-anak, lengkap dengan fasilitas pendukung yang memadai.' },
                { type: 'image', images: ['https://i.ibb.co/xX1T2nZ/kolam-renang-2.jpg'] },
                { type: 'text', content: 'Ideal untuk olahraga maupun rekreasi keluarga di akhir pekan. Area ini juga sering digunakan untuk kursus renang.' }
            ],
            ticket: 15000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883395277152!2d112.71440077466846!3d-7.44755109257692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid",
            address: "Area GOR Delta Sidoarjo / Jl. Raya Ponti No. 5, Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "08:00 - 17:00" }
            ]
        },
        'makam-buyut-sidokare': {
            name: "Makam Buyut Sidokare",
            category: "Religi",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/f8L02q0/makam-sidokare.jpg",
                "https://i.ibb.co/L5hS5b9/makam-sidokare-2.jpg",
                "https://i.ibb.co/1n5X48k/makam-sidokare-3.jpg",
                "https://i.ibb.co/6Fh80R8/makam-sidokare-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Makam Buyut Sidokare adalah situs ziarah yang dihormati di Sidoarjo. Dipercaya sebagai makam tokoh penyebar agama Islam lokal, tempat ini menarik peziarah dari berbagai daerah yang mencari berkah dan ketenangan spiritual.' },
                { type: 'image', images: ['https://i.ibb.co/L5hS5b9/makam-sidokare-2.jpg'] },
                { type: 'text', content: 'Area makam ini memiliki nuansa tenang dan sering dikunjungi pada malam Jumat Legi. Tempat ini mencerminkan kuatnya tradisi keagamaan dan budaya di Sidoarjo.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid", // Menggunakan area Sidoarjo Kota/Religi
            address: "Area Sidokare, Jl. Pahlawan, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'kampung-wisata-kepiting': {
            name: "Kampung Wisata Kepiting Tlocor",
            category: "Kuliner",
            phone: 'tel:+6281331600000',
            images: [
                "https://i.ibb.co/44X7xYj/kampung-kepiting.jpg",
                "https://i.ibb.co/5xk5w6t/kampung-kepiting-2.jpg",
                "https://i.ibb.co/gST0f3j/kampung-kepiting-3.jpg",
                "https://i.ibb.co/TmgvC7w/kampung-kepiting-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Kampung Wisata Kepiting adalah destinasi kuliner yang fokus pada hidangan laut, khususnya kepiting. Terletak di kawasan pesisir Jabon, tempat ini menawarkan kepiting segar hasil tangkapan nelayan lokal dengan berbagai pilihan bumbu khas Jawa Timur.' },
                { type: 'image', images: ['https://i.ibb.co/5xk5w6t/kampung-kepiting-2.jpg'] },
                { type: 'text', content: 'Pengunjung dapat menikmati hidangan dengan suasana *outdoor* di tepi laut atau tambak. Tempat ini menjadi tujuan utama bagi para pecinta *seafood* yang ingin merasakan rasa otentik kepiting Sidoarjo.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1517452655077!2d112.87113117466986!3d-7.551079892461875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e7428f731c3b%3A0xc665191542f7c223!2sPulau%20Lusi!5e0!3m2!1sid!2sid!4v1719598048601!5m2!1sid!2sid", // Area Tlocor/Jabon
            address: "Area Tlocor, Kec. Jabon, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "10:00 - 21:00" }
            ]
        },
        'suncity-waterpark': {
            name: "Suncity Waterpark",
            category: "Rekreasi",
            phone: 'tel:+62318958989',
            images: [
                "https://i.ibb.co/N2XQ3yX/suncity.jpg",
                "https://i.ibb.co/6P0Jm9B/suncity-2.jpg",
                "https://i.ibb.co/3WqP49g/suncity-3.jpg",
                "https://i.ibb.co/q7X06XJ/suncity-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Suncity Waterpark adalah taman rekreasi air terbesar di Sidoarjo. Menawarkan berbagai wahana air seru, seperti seluncuran tinggi, kolam arus, dan kolam tumpah. Tempat ini sangat populer sebagai destinasi liburan keluarga, terutama di akhir pekan dan musim liburan.' },
                { type: 'image', images: ['https://i.ibb.co/3WqP49g/suncity-3.jpg'] },
                { type: 'text', content: 'Terletak di kawasan perbelanjaan Suncity Mall, Waterpark ini mudah diakses dan dikelilingi oleh fasilitas pendukung seperti restoran dan hotel. Harga tiket masuknya bervariasi tergantung hari.' }
            ],
            ticket: 35000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4d5f9d1b09b%3A0x63a3528b7a9f7e5!2sSuncity%20Waterpark%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719599285094!5m2!1sid!2sid",
            address: "Jl. Pahlawan No. 1, Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "10:00 - 17:00" },
                { day: "Sabtu - Minggu", time: "09:00 - 17:00" }
            ]
        },
        'taman-apsari-waru': {
            name: "Taman APSARI Waru",
            category: "Rekreasi",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/30L7c20/taman-apsari.jpg",
                "https://i.ibb.co/sKqQ72R/taman-apsari-2.jpg",
                "https://i.ibb.co/6P0Jm9B/taman-apsari-3.jpg",
                "https://i.ibb.co/P4Mh6k2/taman-apsari-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Taman APSARI (Aman, Sehat, Asri, Rapi, Indah) di Waru adalah taman lingkungan yang menjadi pusat kegiatan komunitas dan olahraga ringan. Taman ini menawarkan area bermain anak dan *jogging track*, menjadikannya tempat favorit warga sekitar untuk bersantai sore.' },
                { type: 'image', images: ['https://i.ibb.co/sKqQ72R/taman-apsari-2.jpg'] },
                { type: 'text', content: 'Terletak di lokasi yang strategis, taman ini dilengkapi dengan beberapa *food stall* dan tempat istirahat. Tempat yang ideal untuk piknik keluarga singkat.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3b52b2b1b55%3A0x8f3c71307b2b1a1!2sSentra%20Kuliner%20Wisma%20Tropodo!5e0!3m2!1sid!2sid!4v1719598585800!5m2!1sid!2sid",
            address: "Jl. Raya Waru, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'pasar-tanjungsari': {
            name: "Pasar Tanjungsari (Pusat Jajanan Malam)",
            category: "Kuliner",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/xX1T2nZ/pasar-tanjungsari.jpg",
                "https://i.ibb.co/6y4sK7v/pasar-tanjungsari-2.jpg",
                "https://i.ibb.co/nC5R8Fh/pasar-tanjungsari-3.jpg",
                "https://i.ibb.co/Wc2v07w/pasar-tanjungsari-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Pasar Tanjungsari, khususnya area sekitarnya, dikenal sebagai pusat jajanan malam yang ramai di Sidoarjo. Anda dapat menemukan berbagai kuliner legendaris Sidoarjo, mulai dari sate, gulai, tahu tek, hingga jajanan pasar tradisional.' },
                { type: 'image', images: ['https://i.ibb.co/nC5R8Fh/pasar-tanjungsari-3.jpg'] },
                { type: 'text', content: 'Pasar ini menjadi *hotspot* kuliner, terutama setelah gelap. Suasana yang hidup dan variasi makanan yang ditawarkan menjadikannya tempat yang menarik untuk *food hunting*.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883395277152!2d112.71440077466846!3d-7.44755109257692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid",
            address: "Jl. Pahlawan, Sidokare, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "17:00 - 23:00" }
            ]
        },
        'rumah-adat-kampung-pandean': {
            name: "Rumah Adat Kampung Pandean",
            category: "Sejarah",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/5cQ3S2t/pandean.jpg",
                "https://i.ibb.co/r7X06XJ/pandean-2.jpg",
                "https://i.ibb.co/sK6D0yF/pandean-3.jpg",
                "https://i.ibb.co/p6V5bJp/pandean-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Kampung Pandean di Sidoarjo dikenal karena memiliki beberapa rumah adat kuno yang masih terawat. Rumah-rumah ini mencerminkan arsitektur tradisional Jawa pesisir dengan perpaduan budaya lokal. Tempat ini menawarkan wisata sejarah non-formal.' },
                { type: 'image', images: ['https://i.ibb.co/r7X06XJ/pandean-2.jpg'] },
                { type: 'text', content: 'Beberapa rumah di kawasan ini mempertahankan bentuk asli dengan ukiran kayu dan tata ruang tradisional, menjadi daya tarik bagi yang menyukai studi arsitektur dan budaya lokal.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid",
            address: "Kampung Pandean, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam (Area luar)" }
            ]
        },
        'masjid-jami-al-akbar': {
            name: "Masjid Jami Al-Akbar Sidoarjo",
            category: "Religi",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/Yc5Sj91/al-akbar-sidoarjo.jpg",
                "https://i.ibb.co/G03T7p7/al-akbar-sidoarjo-2.jpg",
                "https://i.ibb.co/v4b6Y5v/al-akbar-sidoarjo-3.jpg",
                "https://i.ibb.co/D8gV9pM/al-akbar-sidoarjo-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Masjid Jami Al-Akbar adalah salah satu masjid terbesar dan termegah di Sidoarjo. Dengan arsitektur yang modern dan ruang yang luas, masjid ini mampu menampung ribuan jamaah dan sering menjadi pusat perayaan hari besar Islam di Sidoarjo.' },
                { type: 'image', images: ['https://i.ibb.co/G03T7p7/al-akbar-sidoarjo-2.jpg'] },
                { type: 'text', content: 'Keunikan masjid ini terletak pada desain kubahnya yang mencolok dan fasilitasnya yang lengkap. Merupakan destinasi religi dan arsitektur yang menarik.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Jl. Masjid Agung Sidoarjo, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'sentra-kerupuk-udang': {
            name: "Sentra Kerupuk Udang Kenongo",
            category: "Belanja",
            phone: 'tel:+6281234567890',
            images: [
                "https://i.ibb.co/5xk5w6t/kerupuk-udang.jpg",
                "https://i.ibb.co/6y4sK7v/kerupuk-udang-2.jpg",
                "https://i.ibb.co/nC5R8Fh/kerupuk-udang-3.jpg",
                "https://i.ibb.co/q5k2D9f/kerupuk-udang-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Kerupuk Udang adalah salah satu oleh-oleh paling khas dari Sidoarjo. Sentra Kerupuk Udang di daerah Kenongo adalah tempat di mana pengunjung dapat melihat proses pembuatan kerupuk, mulai dari adonan hingga penjemuran.' },
                { type: 'image', images: ['https://i.ibb.co/nC5R8Fh/kerupuk-udang-3.jpg'] },
                { type: 'text', content: 'Di sini, Anda dapat membeli kerupuk udang mentah maupun matang dengan harga grosir. Rasanya yang gurih dan renyah menjadikannya oleh-oleh favorit.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Jl. Raya Kenongo, Kec. Tulangan, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "08:00 - 18:00" }
            ]
        },
        'taman-dayu-sidoarjo': {
            name: "Taman Dayu Sidoarjo",
            category: "Rekreasi",
            phone: 'tel:+62318987654',
            images: [
                "https://i.ibb.co/RzMny9P/taman-dayu.jpg",
                "https://i.ibb.co/f4F4q9M/taman-dayu-2.jpg",
                "https://i.ibb.co/n1g5Qp5/taman-dayu-3.jpg",
                "https://i.ibb.co/24c0d1g/taman-dayu-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Taman Dayu adalah kawasan hunian dan rekreasi terpadu (sering merujuk ke Pandaan, tapi ada juga fasilitas perumahan di Sidoarjo yang menggunakan nama serupa). Jika merujuk pada kawasan perumahan, ia menawarkan fasilitas taman dan ruang terbuka yang terawat dengan baik untuk rekreasi warga.' },
                { type: 'image', images: ['https://i.ibb.co/n1g5Qp5/taman-dayu-3.jpg'] },
                { type: 'text', content: 'Tempat ini sering menjadi lokasi berbagai acara komunitas, dari senam pagi hingga bazar, menjadikannya pusat interaksi sosial yang nyaman dan aman.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Area Perumahan Taman Dayu, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'sidoarjo-sport-center': {
            name: "Sidoarjo Sport Center (Gedung Olahraga)",
            category: "Rekreasi",
            phone: 'tel:+62318963184',
            images: [
                "https://i.ibb.co/6P0Jm9B/sport-center.jpg",
                "https://i.ibb.co/3WqP49g/sport-center-2.jpg",
                "https://i.ibb.co/q7X06XJ/sport-center-3.jpg",
                "https://i.ibb.co/5cQ3S2t/sport-center-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Sidoarjo Sport Center, merujuk pada GOR Delta Sidoarjo, adalah pusat olahraga utama. Kompleks ini menyediakan berbagai fasilitas, termasuk stadion sepak bola, kolam renang, dan lapangan bulu tangkis/basket.' },
                { type: 'image', images: ['https://i.ibb.co/3WqP49g/sport-center-2.jpg'] },
                { type: 'text', content: 'Selain menjadi venue pertandingan besar, area luar GOR juga sangat ramai, terutama pada Minggu pagi, dengan adanya pasar tumpah dan area rekreasi keluarga.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883395277152!2d112.71440077466846!3d-7.44755109257692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e62a05d8f285%3A0x6b447493a72d7331!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1719598402447!5m2!1sid!2sid", // GOR Delta
            address: "Jl. Lingkar Timur, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "06:00 - 21:00" }
            ]
        },
        'wisata-sendang-duwur': {
            name: "Wisata Sendang Duwur",
            category: "Religi",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/P4Mh6k2/sendang-duwur.jpg",
                "https://i.ibb.co/6y4sK7v/sendang-duwur-2.jpg",
                "https://i.ibb.co/nC5R8Fh/sendang-duwur-3.jpg",
                "https://i.ibb.co/Wc2v07w/sendang-duwur-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Sendang Duwur adalah area pemandian atau mata air suci yang sering dijadikan lokasi ziarah dan ritual budaya. Tempat ini memiliki nilai historis dan spiritual yang mendalam bagi masyarakat lokal.' },
                { type: 'image', images: ['https://i.ibb.co/Wc2v07w/sendang-duwur-4.jpg'] },
                { type: 'text', content: 'Meskipun namanya identik dengan lokasi di Lamongan, beberapa area mata air di Sidoarjo juga dikenal sebagai "Sendang". Tempat ini menawarkan suasana tenang dan sejuk.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Area Kec. Wonoayu, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "24 Jam" }
            ]
        },
        'sentra-tas-dan-koper-tangggulangin': {
            name: "Sentra Tas & Koper Tanggulangin",
            category: "Belanja",
            phone: 'tel:+62318850024',
            images: [
                "https://i.ibb.co/T1tWw3n/tanggulangin.jpg",
                "https://i.ibb.co/7R8S8dZ/tanggulangin-2.jpg",
                "https://i.ibb.co/zX9rR5j/tanggulangin-3.jpg",
                "https://i.ibb.co/b3X7s6L/tanggulangin-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Sentra Tas dan Koper Tanggulangin adalah pusat kerajinan kulit terkenal di Sidoarjo. Tempat ini menawarkan berbagai produk kulit, seperti tas, koper, dompet, dan sabuk, dengan kualitas ekspor dan harga yang terjangkau.' },
                { type: 'image', images: ['https://i.ibb.co/7R8S8dZ/tanggulangin-2.jpg'] },
                { type: 'text', content: 'Meskipun sempat terdampak bencana lumpur, industri kerajinan di Tanggulangin tetap eksis dan menjadi daya tarik utama bagi wisatawan yang mencari produk kulit berkualitas.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Jl. Raya Tanggulangin, Kec. Tanggulangin, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "08:00 - 20:00" }
            ]
        },
        'wisata-kebun-kurma-sidoarjo': {
            name: "Wisata Kebun Kurma Sidoarjo",
            category: "Agrowisata",
            phone: 'tel:+6281333333333',
            images: [
                "https://i.ibb.co/sK6D0yF/kebun-kurma.jpg",
                "https://i.ibb.co/p6V5bJp/kebun-kurma-2.jpg",
                "https://i.ibb.co/T1tWw3n/kebun-kurma-3.jpg",
                "https://i.ibb.co/7R8S8dZ/kebun-kurma-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Wisata Kebun Kurma adalah salah satu destinasi agrowisata yang menawarkan pengalaman unik melihat penanaman dan budidaya pohon kurma di iklim tropis. Tempat ini menarik pengunjung karena jarang ada kebun kurma yang berhasil di Jawa Timur.' },
                { type: 'image', images: ['https://i.ibb.co/p6V5bJp/kebun-kurma-2.jpg'] },
                { type: 'text', content: 'Selain melihat kurma, kebun ini sering dilengkapi dengan fasilitas rekreasi dan edukasi lainnya, menjadikannya tempat yang sempurna untuk *refreshing* sambil belajar.' }
            ],
            ticket: 15000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Area Kec. Wonoayu, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "08:00 - 17:00" }
            ]
        },
        'kolam-pancing-bandar-ikan': {
            name: "Kolam Pancing Bandar Ikan",
            category: "Rekreasi",
            phone: 'tel:+6281234567890',
            images: [
                "https://i.ibb.co/F8W2Zg3/bandar-ikan.jpg",
                "https://i.ibb.co/5xk5w6t/bandar-ikan-2.jpg",
                "https://i.ibb.co/gST0f3j/bandar-ikan-3.jpg",
                "https://i.ibb.co/TmgvC7w/bandar-ikan-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Kolam Pancing Bandar Ikan adalah tempat pemancingan yang juga menyediakan fasilitas restoran untuk mengolah hasil tangkapan. Sangat populer di kalangan komunitas mancing dan keluarga yang ingin menikmati makan siang dengan suasana asri.' },
                { type: 'image', images: ['https://i.ibb.co/5xk5w6t/bandar-ikan-2.jpg'] },
                { type: 'text', content: 'Tempat ini menawarkan ikan air tawar yang segar seperti Nila dan Gurame. Sempurna untuk rekreasi santai dan kuliner.' }
            ],
            ticket: 5000,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Area Kec. Buduran, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "09:00 - 21:00" }
            ]
        },
        'wisata-bahari-tanjung-pati': {
            name: "Wisata Bahari Tanjung Pati",
            category: "Alam",
            phone: 'tel: -',
            images: [
                "https://i.ibb.co/680D1Jc/tanjung-pati.jpg",
                "https://i.ibb.co/L5hS5b9/tanjung-pati-2.jpg",
                "https://i.ibb.co/1n5X48k/tanjung-pati-3.jpg",
                "https://i.ibb.co/6Fh80R8/tanjung-pati-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Tanjung Pati adalah salah satu kawasan pantai/pesisir di Sidoarjo yang menawarkan pemandangan muara sungai dan pantai. Tempat ini ideal untuk melihat *sunset* dan merasakan suasana kehidupan nelayan pesisir.' },
                { type: 'image', images: ['https://i.ibb.co/6Fh80R8/tanjung-pati-4.jpg'] },
                { type: 'text', content: 'Meskipun bukan pantai berpasir yang ideal untuk berenang, kawasan ini menarik bagi pecinta alam dan fotografi pemandangan. Akses ke lokasi ini bisa menjadi bagian dari petualangan.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1517452655077!2d112.87113117466986!3d-7.551079892461875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e7428f731c3b%3A0xc665191542f7c223!2sPulau%20Lusi!5e0!3m2!1sid!2sid!4v1719598048601!5m2!1sid!2sid", // Area Jabon/Muara
            address: "Area Pesisir Timur, Kec. Jabon, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Setiap Hari", time: "06:00 - 18:00" }
            ]
        },
        'desa-emas-sidoarjo': {
            name: "Desa Emas Sidoarjo (Sentra Kerajinan Emas)",
            category: "Belanja",
            phone: 'tel:+62318967890',
            images: [
                "https://i.ibb.co/j3d692p/desa-emas.jpg",
                "https://i.ibb.co/FhmgC2K/desa-emas-2.jpg",
                "https://i.ibb.co/p3y895p/desa-emas-3.jpg",
                "https://i.ibb.co/8Yj01wT/desa-emas-4.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Sidoarjo memiliki beberapa kawasan yang dikenal sebagai sentra kerajinan perhiasan emas dan perak, menawarkan produk perhiasan dengan desain khas Jawa Timur. Desa Emas menjadi julukan untuk area di mana toko-toko perhiasan mendominasi.' },
                { type: 'image', images: ['https://i.ibb.co/FhmgC2K/desa-emas-2.jpg'] },
                { type: 'text', content: 'Tempat ini merupakan destinasi belanja perhiasan, dengan toko-toko yang menawarkan jasa pembuatan perhiasan kustom. Cocok bagi wisatawan yang mencari cinderamata berharga atau investasi.' }
            ],
            ticket: 0,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.514782343997!2d112.70994357466804!3d-7.304523092694726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e504068565b7%3A0x6ec0c558c440a430!2sDelta%20Fishing!5e0!3m2!1sid!2sid!4v1719598150499!5m2!1sid!2sid",
            address: "Area Kec. Candi/Sidoarjo Kota, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Sabtu", time: "09:00 - 17:00" },
                { day: "Minggu", time: "Tutup" }
            ]
        },
    };
    const params = new URLSearchParams(window.location.search);
    const destinationId = params.get('id');
    const data = destinationsData[destinationId];
    const mainContent = document.getElementById('main-content');

    if (!data) {
        mainContent.innerHTML = `<div class="text-center py-20"><i class="fa-solid fa-compass-slash text-8xl text-slate-300 mb-6"></i><h1 class="text-4xl font-bold text-slate-700 mb-4">Destinasi Tidak Ditemukan</h1><p class="text-lg text-slate-500 mb-8">Maaf, destinasi yang Anda cari tidak ada atau URL tidak valid.</p><a href="destination.html" class="bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark/90 transition-all">Kembali ke Daftar Destinasi</a></div>`;
        return;
    }

    document.title = `${data.name} - SidoDolan`;
    document.getElementById('destination-name').textContent = data.name;
    document.getElementById('destination-category').textContent = data.category;

    const ticketPriceEl = document.getElementById('destination-ticket-price');
    if (data.ticket === null || data.ticket === 0) {
        ticketPriceEl.textContent = 'Gratis';
    } else {
        ticketPriceEl.innerHTML = `Rp ${new Intl.NumberFormat('id-ID').format(data.ticket)} <span class="text-base font-medium text-slate-500">/ orang</span>`;
    }

    const phoneButton = document.getElementById('phone-button');
    if (data.phone) {
        phoneButton.href = data.phone;
        phoneButton.classList.remove('hidden');
        phoneButton.classList.add('flex');
    }

    document.getElementById('destination-address').textContent = data.address;
    document.getElementById('destination-gmap-embed').src = data.gmapEmbedUrl;
    document.getElementById('destination-hours').innerHTML = data.openingHours.map(item => `<div>${item.day}: ${item.time}</div>`).join('');

    const descriptionSection = document.getElementById('description-section');
    const descriptionContainer = document.getElementById('description-content-container');
    if (data.contentBlocks && data.contentBlocks.length > 0) {
        descriptionContainer.innerHTML = data.contentBlocks.map(block => {
            if (block.type === 'text') {
                return `<p class="text-slate-600 leading-loose">${block.content}</p>`;
            }
            if (block.type === 'image' && block.images && block.images.length > 0) {
                if (block.images.length === 1) {
                    return `<div class="rounded-lg overflow-hidden shadow-md"><img src="${block.images[0]}" class="w-full h-auto object-cover" alt="Ilustrasi deskripsi"></div>`;
                } else {
                    const imageElements = block.images.map(img => `<img src="${img}" class="w-full h-64 object-cover rounded-lg shadow-sm" alt="Ilustrasi deskripsi">`).join('');
                    return `<div class="grid grid-cols-2 gap-4">${imageElements}</div>`;
                }
            }
            return '';
        }).join('');
    } else {
        descriptionSection.style.display = 'none';
    }

    const mainImage = document.getElementById('main-image');
    const thumbnailGrid = document.getElementById('thumbnail-grid');
    mainImage.src = data.images[0];
    thumbnailGrid.innerHTML = data.images.map((imgSrc, index) => `<img src="${imgSrc}" data-index="${index}" class="thumbnail-item w-full h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-primary transition-all" ${index === 0 ? "thumbnail-active" : ""} alt="Thumbnail ${index + 1}">`).join('');

    const thumbnails = document.querySelectorAll('.thumbnail-item');
    function setActiveThumbnail(index) {
        thumbnails.forEach(thumb => thumb.classList.remove('thumbnail-active'));
        const activeThumb = document.querySelector(`.thumbnail-item[data-index="${index}"]`);
        if (activeThumb) activeThumb.classList.add('thumbnail-active');
    }
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = thumb.dataset.index;
            mainImage.src = data.images[index];
            setActiveThumbnail(index);
        });
    });
    setActiveThumbnail(0);

    const pageUrl = window.location.href;
    const shareText = `Kunjungi ${data.name} di Sidoarjo! Info lengkap di: ${pageUrl}`;
    document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(`Kunjungi ${data.name} di Sidoarjo!`)}`;
});
