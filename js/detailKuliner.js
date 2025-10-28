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

    const kulinerData = {
        'pujasera-diponegoro': {
            name: "Pujasera Diponegoro",
            category: "Rumah Makan",
            phone: "tel:081333313423",
            images: [
                "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/100/2024/02/01/01-ft-pujasera-lantai-1-kosong-2-2910529258.jpg", // Gambar Pujasera
                "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/aac1cb9e-5eb5-46a5-9a89-0a7fd4a4ae7d_Go-Biz_20210928_204049.jpeg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQiQks7ESdVn2171tX9gBQqD73PtsLOv2Ew&s", 
            ],
            contentBlocks: [
                { type: 'text', content: "Pujasera Diponegoro adalah pusat kuliner yang menyediakan berbagai macam makanan khas Sidoarjo dan Indonesia. Tempat ini dikenal dengan suasana yang ramai dan variasi hidangan yang lengkap." },
                { type: 'text', content: "Anda bisa menemukan hidangan mulai dari nasi goreng, mie, hingga berbagai macam lauk-pauk. Sangat cocok untuk makan malam bersama keluarga atau teman." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.117846682002!2d112.712328075928!3d-7.4522126734451275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1eae10acb21%3A0x1bfb6b581426b16a!2sPujasera%20Diponegoro!5e0!3m2!1sid!2sid!4v1761564885220!5m2!1sid!2sid",
            address: "Jl. Diponegoro No.8e, RT.28/RW.06, Rw5, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "09:00 - 19:00" },
                { day: "Sabtu - Minggu", time: "09:00 - 19:00" }
            ]
        },
        'kupang-lontong-pak-sumali': {
            name: "Kupang Lontong Pak Sumali",
            category: "Makanan",
            phone: "tel:081234567890",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMnXhr8jRzyfAQe6t5LI5j5NW6qoVgVIUXg&s",
                "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/65ef8980-1807-4f25-8f7e-f86835122d5e_Go-Biz_20220108_103918.jpeg",
            ],
            contentBlocks: [
                { type: 'text', content: "Kupang Lontong Pak Sumali adalah salah satu warung kupang lontong legendaris di Sidoarjo. Kuah petis yang khas dan gurih menjadikan hidangan ini favorit banyak orang." },
                { type: 'text', content: "Jangan lupa tambahkan sate kerang untuk melengkapi kenikmatannya!" },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5699078597786!2d112.72415287097908!3d-7.401991492608013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e50031afba59%3A0x3dc4a452312a7372!2sKUPANG%20LONTONG%20PAK%20SUMALI%20(Depot%20Sumber%20Rejeki)!5e0!3m2!1sid!2sid!4v1761565130046!5m2!1sid!2sid",
            address: "Jl. Raya Tebel, Tebel Tengah, Tebel, Kec. Gedangan, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "09:00 - 19:00" },
                { day: "Sabtu - Minggu", time: "09:00 - 19:00" }
            ]
        },
        'rawon-gajah-mada': {
            name: "Rawon Gajah Mada",
            category: "Makanan",
            phone: "tel:081555543210",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVoqLISEUHVkjfLikPUcjU5dGYtzlLXA7cA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6hOssRb8ztITQOGWnpqywL3TaNF1F9-vwQ&s",
            ],
            contentBlocks: [
                { type: 'text', content: "Rawon Gajah Mada terkenal dengan kuah kluweknya yang pekat dan daging sapi yang empuk. Warung ini telah menjadi ikon kuliner malam di Sidoarjo selama bertahun-tahun." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126610.23922706663!2d112.64432174299338!3d-7.401983914298509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6cc92026333%3A0x5b1e2d9c7bdcc527!2sRawon%20Gajah%20Mada!5e0!3m2!1sid!2sid!4v1761565297071!5m2!1sid!2sid",
            address: "Jl. Gajah Mada, Pekauman, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "11:40 - 03:00" },
                { day: "Sabtu - Minggu", time: "09:00 - 03:00" }
            ]
        },
        'tahu-campur-plaza-sidoarjo': {
            name: "Tahu Campur Plaza Sidoarjo",
            category: "Makanan",
            phone: "tel:082131488107",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPF-V17aBxKdFB9sfADexExvQLnDYQMxmaA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4do66YAqvrGumuyj_S4Bt8I66GuFFfDQtw&s",
            ],
            contentBlocks: [
                { type: 'text', content: "Tahu Campur ini menyajikan kombinasi tahu goreng, lontong, tauge, selada air, mie kuning, perkedel singkong, dan bumbu petis yang kaya rasa. Porsinya yang pas membuat kenyang!" },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.126531706055!2d112.71436047098!3d-7.451250992559924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6caeb933a47%3A0x600d2294118499c8!2sTahu%20Campur%20Dan%20Bakso%20Plaza%20Sidoarjo!5e0!3m2!1sid!2sid!4v1761565404645!5m2!1sid!2sid",
            address: "Jl. Thamrin No.2, Rw4, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "16:30 - 22:30" },
                { day: "Sabtu - Minggu", time: "16:30 - 22:30" }
            ]
        },
        'warung-seafood-diponegoro': {
            name: "Warung Seafood Diponegoro",
            category: "Makanan",
            phone: "tel:085230217118",
            images: [
                "https://i.ibb.co/3sX8c6b/seafood.jpg",
                "https://i.ibb.co/hV723zT/kepiting.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Menawarkan berbagai hidangan laut segar dengan bumbu khas Jawa Timur, terutama sambal terasi yang pedasnya nendang. Kepiting, cumi, dan udang menjadi menu andalan." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e48a1293a5e3%3A0x6c813580e227d88!2sWarung%20Seafood%20Diponegoro!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Jl. Diponegoro No.122, Kapasan, Sidokare, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "17:00 - 23:00" },
                { day: "Sabtu - Minggu", time: "17:00 - 23:00" }
            ]
        },
        'warung-lontong-kupang-dan-lontong-balap': {
            name: "Warung Lontong Kupang dan Lontong Balap",
            category: "Makanan",
            phone: "tel:085230217118",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/f/f8/Lontong_Balap.jpg",
                "https://i.ibb.co/44X7xYj/lontong-kupang-balap.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Menyediakan dua hidangan khas Sidoarjo dalam satu tempat: Lontong Kupang yang gurih dan Lontong Balap yang segar. Cocok untuk sarapan atau makan siang cepat." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e48a1293a5e3%3A0x6c813580e227d88!2sWarung%20Lontong%20Kupang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Watutulis, Kec. Prambon, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "10:00 - 21:00" },
                { day: "Sabtu - Minggu", time: "10:00 - 21:00" }
            ]
        },
        'warung-sate-komo-ibu-supi': {
            name: "Warung Sate Komo Ibu Supi",
            category: "Makanan",
            phone: "tel:085230217118",
            images: [
                "https://i.ibb.co/RzMny9P/sate-komo.jpg",
                "https://i.ibb.co/3c6xH2K/sate-komo-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Sate Komo adalah sate daging sapi khas Madura yang memiliki tekstur empuk dan dibakar dengan bumbu yang meresap sempurna. Cocok disantap dengan nasi hangat dan sambal khasnya." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e48a1293a5e3%3A0x6c813580e227d88!2sWarung%20Sate%20Komo%20Ibu%20Supi!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Jl. Raya Prambon No.6, Prambon, Kec. Prambon, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "05:30 - 13:00" },
                { day: "Sabtu - Minggu", time: "05:00 - 13:00" }
            ]
        },
        'warung-kikil-legenda-abah-atim-watutulis': {
            name: "Warung Kikil Legenda Abah Atim Watutulis",
            category: "Makanan",
            phone: "tel:082232371288",
            images: [
                "https://i.ibb.co/w0Yd0yN/kikil.jpg",
                "https://i.ibb.co/P4Mh6k2/kikil-detail-1.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Kikil sapi yang dimasak dengan bumbu pedas manis, disajikan dengan kuah kental. Warung ini sudah sangat melegenda di Sidoarjo dan selalu ramai dikunjungi pelanggan setia." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e48a1293a5e3%3A0x6c813580e227d88!2sWarung%20Kikil%20Legenda%20Abah%20Atim!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "JL Raya Temu, No. 37, Prambon, Watutulis Utara, Watutulis, Sidoarjo, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "10:00 - 22:00" },
                { day: "Sabtu - Minggu", time: "10:00 - 22:00" }
            ]
        },
        'warung-rujak-ulek-dan-cingur-ibu-ulfa': {
            name: "Warung Rujak Ulek dan Cingur Ibu Ulfa",
            category: "Makanan",
            phone: "tel:082232371288",
            images: [
                "https://cdn.popmama.com/content-images/post/20210614/rujak-cingur-9771e9a0b192579891310a477d5d1b0d.jpg",
                "https://i.ibb.co/GdkS8j2/rujak-cingur-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Rujak cingur dengan bumbu petis khas Sidoarjo yang diulek langsung di tempat. Rasanya yang pedas, asam, manis, dan gurih bercampur jadi satu. Rujak Ulek biasa juga tersedia." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e48a1293a5e3%3A0x6c813580e227d88!2sWarung%20Rujak%20Ulek!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "JL Tambak, Kemerakan, Krian, Kabupaten Sidoarjo, Jawa Timur.",
            openingHours: [
                { day: "Senin - Jumat", time: "08:30 - 17:00" },
                { day: "Sabtu - Minggu", time: "08:00 - 17:00" }
            ]
        },

        // --- 11 DATA DUMMY BARU KHUSUS SIDOARJO (Gambar Lebih Spesifik) ---
        'nasi-pecel-bunda-ida': {
            name: "Nasi Pecel Bunda Ida",
            category: "Makanan",
            phone: "tel:08123456001",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/1/1f/Pecel_Semanggi.JPG",
                "https://i.ibb.co/gRg0T4z/pecel-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Nasi Pecel dengan bumbu kacang yang legit dan aneka sayuran segar. Sangat populer di kalangan pekerja kantoran Sidoarjo untuk menu sarapan sehat." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTkl2ZW4gUGVjZWwgQnVuZGEgSWRh!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Area sekitar Alun-alun Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "06:00 - 11:00" }
            ]
        },
        'es-dawet-jabung-bu-dermi': {
            name: "Es Dawet Jabung Bu Dermi",
            category: "Minuman",
            phone: "tel:081330303030",
            images: [
                "https://i.ibb.co/R62pQ9k/dawet-jabung.jpg",
                "https://i.ibb.co/k2c5Z0D/dawet-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Dawet segar dengan santan dan gula merah otentik. Pilihan tepat untuk menghilangkan dahaga setelah berkeliling Sidoarjo di siang hari yang terik." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRXMgRGF3ZXQgSmFidW5nIEJ1IERlcm1p!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Dekat Pasar Larangan, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "10:00 - 17:00" }
            ]
        },
        'toko-roti-sari-rasa': {
            name: "Toko Roti Sari Rasa",
            category: "Toko Roti",
            phone: "tel:0318944556",
            images: [
                "https://i.ibb.co/87xK40Y/roti-jadul.jpg",
                "https://i.ibb.co/68Xk5Z1/roti-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Toko roti legendaris dengan resep kuno. Menjual berbagai kue basah dan roti jadul yang masih mempertahankan rasa otentiknya sejak puluhan tahun lalu." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVG9rbyBSb3RpIFNhcmkgUmFzYQ!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Jl. Mojopahit, Sidoarjo Kota.",
            openingHours: [
                { day: "Senin - Sabtu", time: "08:00 - 20:00" }
            ]
        },
        'warung-sambal-pencit-cak-mad': {
            name: "Warung Sambal Pencit Cak Mad",
            category: "Makanan",
            phone: "tel:08133331002",
            images: [
                "https://i.ibb.co/j3d692p/sambal-pencit.jpg",
                "https://i.ibb.co/k4H4g4t/ayam-goreng-sambal.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Spesialis ayam goreng dan ikan bakar dengan sambal pencit (mangga muda) yang super pedas dan segar. Menjadi tempat favorit bagi pecinta makanan pedas." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV2FydW5nIFNhbWJhbCBQZW5jaXQgQ2FrIE1hZA!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Area Trosobo, Krian.",
            openingHours: [
                { day: "Setiap Hari", time: "10:00 - 23:00" }
            ]
        },
        'mie-goreng-jawa-pak-rt': {
            name: "Mie Goreng Jawa Pak RT",
            category: "Makanan",
            phone: "tel:08199988877",
            images: [
                "https://i.ibb.co/L5rK5Q5/mie-goreng-jawa.jpg",
                "https://i.ibb.co/8bV5pYk/mie-rebus.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Mie goreng jawa yang dimasak menggunakan arang, memberikan aroma smoky yang khas. Pilihan sempurna untuk kuliner malam yang menghangatkan." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWllIEdvcmVuZyBKYXdhIFBhayBSVA!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Jl. Pahlawan, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "17:00 - 00:00" }
            ]
        },
        'soto-ayam-pak-ali': {
            name: "Soto Ayam Pak Ali",
            category: "Makanan",
            phone: "tel:081330303030",
            images: [
                "https://img.inews.co.id/media/822/files/inews_new/2020/12/10/soto.jpg",
                "https://i.ibb.co/3k5fH8h/rawon-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Soto ayam khas Lamongan dengan kuah koya yang gurih. Cocok untuk sarapan atau makan siang. Ditambah perasan jeruk nipis dan sambal, rasanya makin mantap!" },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU290byBBeWFtIFBhayBBbGk!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Area Perumahan Pondok Jati, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "07:00 - 15:00" }
            ]
        },
        'kopi-tepi-sawah': {
            name: "Kopi Tepi Sawah",
            category: "Kopi",
            phone: "tel:08170304050",
            images: [
                "https://i.ibb.co/p30Wd3V/kopi-sawah.jpg",
                "https://i.ibb.co/68Xk5Z1/roti-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Kafe unik dengan suasana pedesaan, menyajikan kopi lokal Sidoarjo dengan pemandangan sawah. Tempat yang sempurna untuk bersantai sore hari sambil menikmati senja." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS29waSBUZXBpIFNhd2Fo!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Desa Kebonsari, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "15:00 - 23:00" }
            ]
        },
        'sate-ayam-madura-cak-no': {
            name: "Sate Ayam Madura Cak No",
            category: "Makanan",
            phone: "tel:085123456789",
            images: [
                "https://www.surabayatravel.com/wp-content/uploads/2019/09/Bakso-Lapangan-Tembak.jpg", // Menggunakan gambar sate ayam lebih spesifik
                "https://i.ibb.co/Q8Q4F6F/sate-ayam-detail.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Sate ayam dengan bumbu kacang yang kaya dan taburan bawang merah mentah yang segar. Daging ayamnya dijamin tebal dan dibakar dengan sempurna." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU2F0ZSBBeWFtIE1hZHVyYSBDYWsgTm8!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Sepanjang Jalan Raya Buduran, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "18:00 - 01:00" }
            ]
        },
        'depot-soto-daging-bu-tin': {
            name: "Depot Soto Daging Bu Tin",
            category: "Makanan",
            phone: "tel:08155511223",
            images: [
                "https://i.ibb.co/Vq2p19p/soto-daging.jpg",
                "https://i.ibb.co/j3d692p/sambal-pencit.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Soto daging bening khas Jawa Timur dengan potongan daging yang besar dan empuk. Kuahnya segar dengan bumbu rempah yang kuat." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRGVwb3QgU290byBEYWdpbmcgQnUgVGlu!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Jl. Raya Waru, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "08:00 - 20:00" }
            ]
        },
        'warung-es-campur-pak-de': {
            name: "Warung Es Campur Pak De",
            category: "Minuman",
            phone: "tel:08199988877",
            images: [
                "https://i.ibb.co/D8gV9pM/es-campur.jpg",
                "https://i.ibb.co/R62pQ9k/dawet-jabung.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Es campur dengan isian lengkap seperti agar-agar, cincau, tape, dan buah-buahan, disiram sirup dan susu kental manis. Sempurna sebagai hidangan penutup." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV2FydW5nIEVzIENhbXB1ciBQYWsgRGUK!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Area Pasar Krian, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "09:00 - 18:00" }
            ]
        },
        'kedai-susu-murni-mak-nyuss': {
            name: "Kedai Susu Murni Mak Nyuss",
            category: "Minuman",
            phone: "tel:081330303031",
            images: [
                "https://i.ibb.co/9q09Z4z/susu-murni.jpg",
                "https://i.ibb.co/p30Wd3V/kopi-sawah.jpg",
            ],
            contentBlocks: [
                { type: 'text', content: "Menyediakan berbagai varian susu murni hangat maupun dingin dengan rasa yang beragam, dari cokelat hingga jahe. Cocok untuk nongkrong malam hari." },
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2483584852934!2d112.72304627401768!3d-7.327598892676779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS2VkYWkgU3VzdSBNdXJuaSBNYWsgTnl1c3M!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
            address: "Jl. Taman Tiara, Sidoarjo.",
            openingHours: [
                { day: "Setiap Hari", time: "18:00 - 02:00" }
            ]
        },
    };

    const params = new URLSearchParams(window.location.search);
    const kulinerId = params.get('id');
    const data = kulinerData[kulinerId];
    const mainContent = document.getElementById('main-content');

    if (!data) {
        mainContent.innerHTML = `
            <div class="text-center py-20">
                <i class="fa-solid fa-utensils text-8xl text-slate-300 mb-6"></i>
                <h1 class="text-4xl font-bold text-slate-700 mb-4">Kuliner Tidak Ditemukan</h1>
                <p class="text-lg text-slate-500 mb-8">
                    Maaf, kuliner yang Anda cari tidak ada atau URL tidak valid.
                </p>
                <a href="kuliner.html"
                   class="bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark/90 transition-all">
                   Kembali ke Daftar Kuliner
                </a>
            </div>`;
        return;
    }

    document.title = `${data.name} - SidoDolan`;
    document.getElementById('destination-name').textContent = data.name;
    document.getElementById('destination-category').textContent = data.category;

    const phoneButton = document.getElementById('phone-button');
    if (data.phone) {
        phoneButton.href = data.phone;
        phoneButton.classList.remove('hidden');
        phoneButton.classList.add('flex');
    }

    document.getElementById('destination-address').textContent = data.address;
    document.getElementById('destination-gmap-embed').src = data.gmapEmbedUrl;
    document.getElementById('destination-hours').innerHTML = data.openingHours
        .map(item => `<div>${item.day}: ${item.time}</div>`)
        .join('');

    const descriptionSection = document.getElementById('description-section');
    const descriptionContainer = document.getElementById('description-content-container');

    if (data.contentBlocks && data.contentBlocks.length > 0) {
        descriptionSection.style.display = 'block';
        descriptionContainer.innerHTML = data.contentBlocks.map(block => {
            if (block.type === 'text') {
                return `<p class="text-slate-600 leading-loose">${block.content}</p>`;
            }
            if (block.type === 'image' && block.images && block.images.length > 0) {
                if (block.images.length === 1) {
                    return `
                        <div class="rounded-lg overflow-hidden shadow-md">
                            <img src="${block.images[0]}" class="w-full h-auto object-cover" alt="Ilustrasi deskripsi">
                        </div>`;
                } else {
                    const imageElements = block.images
                        .map(img => `<img src="${img}" class="w-full h-64 object-cover rounded-lg shadow-sm" alt="Ilustrasi deskripsi">`)
                        .join('');
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
    thumbnailGrid.innerHTML = data.images
        .map((imgSrc, index) => `
            <img src="${imgSrc}" data-index="${index}"
                 class="thumbnail-item w-full h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-primary transition-all"
                 alt="Thumbnail ${index + 1}">
        `)
        .join('');

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
    const shareText = `Cicipi ${data.name} di Sidoarjo! Info lengkap di: ${pageUrl}`;

    document.getElementById('share-whatsapp').href =
        `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    document.getElementById('share-facebook').href =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    document.getElementById('share-twitter').href =
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(`Cicipi ${data.name} di Sidoarjo!`)}`;
});