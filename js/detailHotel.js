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

    const hotels = [
        // --- 5 DATA REAL/UTAMA ---
        {
            id: "aston-sidoarjo-city-hotel-conference-center",
            name: "Aston Sidoarjo City Hotel & Conference Center",
            lokasi: "Jl. Kahuripan Raya No.14, Entalsewu, Kec. Buduran, Kabupaten Sidoarjo, Jawa Timur 61252",
            rating: 4.8,
            images: [
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Hotel ini menawarkan berbagai fasilitas seperti kolam renang luar ruangan, restoran, dan layanan kamar, serta akses mudah ke pusat perbelanjaan dan landmark di sekitar Sidoarjo. Akomodasi ini memiliki konsep modern dengan standar internasional dan beragam pilihan tipe kamar.",
            phone: "03199717000",
            gmapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2733410885967!2d112.69165517592768!3d-7.434976273252829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e198632032e3%3A0x8dd46af575404565!2sAston%20Sidoarjo%20City%20Hotel%20%26%20Conference%20Center!5e0!3m2!1sid!2sid!4v1761314821192!5m2!1sid!2sid",
            mice: [
                {
                    roomName: "ASTON BALLROOM",
                    setups: [
                        { type: 'U Shape', capacity: 60, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=U-Shape' },
                        { type: 'Classroom', capacity: 100, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                        { type: 'Theater', capacity: 200, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 120, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' }
                    ]
                }
            ]
        },
        {
            id: "the-sun-hotel-sidoarjo",
            name: "The Sun Hotel Sidoarjo",
            lokasi: "Jl. Pahlawan No.1, Rw6, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61212",
            rating: 4.2,
            images: [
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Akomodasi yang nyaman di pusat kota Sidoarjo. Fasilitas kolam renang outdoor, taman, dan akses mudah ke alun-alun. Hotel ini juga mudah dijangkau dari berbagai fasilitas penting dan berjarak sekitar 30 menit berkendara dari Bandara Internasional Juanda. ",
            phone: "0318071123",
            gmapEmbed: "HP26+52 Sidokumpul, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "THE SUN HOTEL BALLROOM",
                    setups: [
                        { type: 'Theater', capacity: 1500, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 800, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "hotel-luminor-sidoarjo",
            name: "Hotel Luminor Sidoarjo",
            lokasi: "Jl. Pahlawan, Jetis, Lemahputro, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61213",
            rating: 4.6,
            images: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Hotel modern strategis, ideal untuk bisnis dan liburan. Lokasinya dekat dengan Stadion Gelora Delta dan pusat kuliner, serta dilengkapi dengan restoran, bar, dan pusat kebugaran.",
            phone: "03199712000",
            gmapEmbed: "HP23+F7 Lemahputro, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "HOTEL LUMINOR BALLROOM",
                    setups: [
                        { type: 'Theater', capacity: 1500, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 800, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "hotel-neo+-waru-sidoarjo",
            name: "Hotel Neo+ Waru - Sidoarjo",
            lokasi: "Jl. Jenderal S. Parman No.52 - 54, Krajan Kulon, Waru, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256",
            rating: 4.7,
            images: [
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800"
            ],
            description: "Hotel bergaya minimalis di lokasi premium, dekat Bandara Juanda. Pilihan terbaik untuk pelancong transit dan bisnis, dilengkapi restoran, bar, pusat bisnis, dan ruang rapat. ",
            phone: "03130007999",
            gmapEmbed: "JPRH+XC Waru, Krajan Kulon, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "HOTEL NEO+ WARU BALLROOM",
                    setups: [
                        { type: 'Theater', capacity: 1500, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 800, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "favehotel-sidoarjo",
            name: "Favehotel Sidoarjo",
            lokasi: "Jl. Jenggolo No.15, Pucang, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61219",
            rating: 4.7,
            images: [
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Budget hotel yang *stylish* dan *fun* dengan konsep modern dan artistik. Menawarkan kamar bersih, WiFi cepat, restoran, bar, ruang pertemuan, dan ballroom. Lokasi strategis di pusat kota Sidoarjo.",
            phone: "03130007999",
            gmapEmbed: "HP6C+59 Pucang, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "FAVE MEETING ROOM 1",
                    setups: [
                        { type: 'U Shape', capacity: 30, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=U-Shape' },
                        { type: 'Classroom', capacity: 40, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                    ]
                }
            ]
        },

        // --- 15 DATA DUMMY UNIK ---
        {
            id: "suncity-hotel-sidoarjo",
            name: "Suncity Residence Hotel Sidoarjo",
            lokasi: "Jl. Pahlawan No. 1, Sidoarjo, Jawa Timur 61212",
            rating: 4.4,
            images: [
                "https://images.unsplash.com/photo-1594247514332-9c9883626e2a?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
            ],
            description: "Hotel terintegrasi dengan mal dan *waterpark*. Sangat cocok untuk liburan keluarga. Menawarkan kamar berstandar tinggi dengan fasilitas lengkap dan akses mudah ke hiburan.",
            phone: "0318071000",
            gmapEmbed: "HP26+52 Sidoarjo, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "SUNCITY GRAND BALLROOM",
                    setups: [
                        { type: 'Theater', capacity: 1000, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 500, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "swiss-belinn-airport-surabaya",
            name: "Swiss-Belinn Airport Surabaya (Sidoarjo)",
            lokasi: "Jl. Raya Bandara Juanda No. 90, Sedati, Sidoarjo, Jawa Timur 61253",
            rating: 4.5,
            images: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
            ],
            description: "Hotel transit bandara dengan layanan antar-jemput gratis, fasilitas lengkap, termasuk kolam renang dan pusat kebugaran. Pilihan terbaik untuk kenyamanan sebelum atau sesudah penerbangan.",
            phone: "03199008888",
            gmapEmbed: "JMVV+88 Sedati, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "MEETING ROOM SEDATI",
                    setups: [
                        { type: 'U Shape', capacity: 50, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=U-Shape' },
                        { type: 'Theater', capacity: 120, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                    ]
                }
            ]
        },
        {
            id: "ibis-budget-surabaya-airport",
            name: "Ibis Budget Surabaya Airport (Sidoarjo)",
            lokasi: "Jl. Raya Bandara Juanda, Sedati, Sidoarjo, Jawa Timur 61254",
            rating: 4.1,
            images: [
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800"
            ],
            description: "Pilihan *smart-saver* untuk transit bandara. Menawarkan kamar kompak, bersih, dan fungsional dengan harga yang ekonomis. Ideal untuk pelancong yang mencari efisiensi waktu dan biaya.",
            phone: "03199681888",
            gmapEmbed: "JMQQ+52 Sedati, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE untuk Ibis Budget
        },
        {
            id: "hotel-utami-sby-sidoarjo",
            name: "Hotel Utami Sidoarjo",
            lokasi: "Jl. Raya By Pass Juanda No. 11, Waru, Sidoarjo, Jawa Timur 61256",
            rating: 4.0,
            images: [
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            ],
            description: "Hotel yang menawarkan suasana asri dengan taman dan kolam renang yang luas. Cocok untuk acara keluarga dan rapat. Berlokasi strategis dekat gerbang tol Waru.",
            phone: "0318531234",
            gmapEmbed: "JPRM+8W Waru, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "GARDENIA HALL",
                    setups: [
                        { type: 'Classroom', capacity: 150, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                        { type: 'Banquet Rounds', capacity: 100, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "delta-homestay-sidoarjo",
            name: "Delta Homestay Sidoarjo",
            lokasi: "Jl. Raya Lingkar Timur No. 1, Candi, Sidoarjo, Jawa Timur 61271",
            rating: 3.9,
            images: [
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Penginapan yang *cozy* dan terjangkau di area Lingkar Timur. Lokasi strategis dekat kawasan industri dan akses tol Sidoarjo. Cocok untuk *solo traveler* atau kunjungan singkat.",
            phone: "081234567890", // Dummy phone
            gmapEmbed: "HMVX+5M Candi, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE
        },
        {
            id: "premier-inn-airport-sidoarjo",
            name: "Premier Inn Airport Sidoarjo",
            lokasi: "Jl. Juanda Raya No. 1, Sedati, Sidoarjo, Jawa Timur 61253",
            rating: 4.6,
            images: [
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Hotel internasional dengan fokus pada kualitas tidur dan kebersihan premium. Dekat pintu masuk Bandara Juanda, menawarkan kamar kedap suara dan restoran 24 jam.",
            phone: "03199001000",
            gmapEmbed: "JMVW+8M Sedati, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "MEETING ROOM TRANSIT",
                    setups: [
                        { type: 'Classroom', capacity: 30, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                        { type: 'Boardroom', capacity: 15, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Boardroom' },
                    ]
                }
            ]
        },
        {
            id: "whiz-prime-sidoarjo-kota",
            name: "Whiz Prime Hotel Sidoarjo",
            lokasi: "Jl. KH. Mukmin No. 22, Sidokare, Sidoarjo, Jawa Timur 61214",
            rating: 4.5,
            images: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800"
            ],
            description: "Hotel di jantung kota dengan akses mudah ke perbankan dan pusat pemerintahan. Menawarkan kamar modern dan bersih, serta pelayanan yang ramah untuk bisnis dan liburan.",
            phone: "0318945678", // Dummy phone
            gmapEmbed: "HP5W+XG Sidokare, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "WHIZ MEETING ROOM",
                    setups: [
                        { type: 'Classroom', capacity: 50, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                        { type: 'Theater', capacity: 80, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                    ]
                }
            ]
        },
        {
            id: "reddoorz-dekat-glora-delta",
            name: "RedDoorz near Gelora Delta Sidoarjo",
            lokasi: "Jl. Stadion No. 5, Pagerwojo, Buduran, Sidoarjo, Jawa Timur 61252",
            rating: 3.8,
            images: [
                "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800"
            ],
            description: "Akomodasi budget yang bersih dan terpercaya. Lokasi dekat kompleks olahraga Gelora Delta. Menyediakan kamar yang nyaman dengan WiFi gratis.",
            phone: "085712345678", // Dummy phone
            gmapEmbed: "HM8W+2C Pagerwojo, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE
        },
        {
            id: "aria-gading-hotel-sidoarjo",
            name: "Aria Gading Hotel Sidoarjo",
            lokasi: "Jl. Raya Waru No. 18, Waru, Sidoarjo, Jawa Timur 61256",
            rating: 4.3,
            images: [
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
            ],
            description: "Hotel yang fokus pada keramahan dan pelayanan, berlokasi di area Waru. Pilihan populer untuk kegiatan rapat dan seminar. Dilengkapi dengan restoran dan ruang pertemuan yang memadai.",
            phone: "0318530000", // Dummy phone
            gmapEmbed: "JPRM+8W Waru, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "ARIA BALLROOM",
                    setups: [
                        { type: 'Theater', capacity: 800, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 400, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "biz-hotel-airport-sidoarjo",
            name: "Biz Hotel Airport Sidoarjo",
            lokasi: "Jl. Raya Sedati No. 88, Sedati, Sidoarjo, Jawa Timur 61253",
            rating: 4.0,
            images: [
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
            ],
            description: "Hotel fungsional dengan desain modern minimalis. Pilihan cepat dan efisien untuk kebutuhan transit di area bandara. Menyediakan kamar yang bersih dan *compact*.",
            phone: "0318950000", // Dummy phone
            gmapEmbed: "JMQX+7P Sedati, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "BIZ MEETING ROOM",
                    setups: [
                        { type: 'Classroom', capacity: 25, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                        { type: 'Theater', capacity: 50, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                    ]
                }
            ]
        },
        {
            id: "pop-hotel-airport-sidoarjo",
            name: "POP! Hotel Airport Sidoarjo",
            lokasi: "Jl. Raya Juanda No. 7, Sedati, Sidoarjo, Jawa Timur 61253",
            rating: 3.5,
            images: [
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Hotel budget dengan konsep warna cerah dan tempat tidur nyaman. Pilihan praktis untuk *backpacker* atau *solo traveler* yang mencari penginapan dekat bandara.",
            phone: "0318960000", // Dummy phone
            gmapEmbed: "JMVW+7P Sedati, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE
        },
        {
            id: "grand-pahlawan-sidoarjo",
            name: "Grand Pahlawan Hotel Sidoarjo",
            lokasi: "Jl. Pahlawan No. 5, Sidoarjo, Jawa Timur 61212",
            rating: 4.4,
            images: [
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
            ],
            description: "Hotel klasik di jantung kota, menawarkan pengalaman menginap dengan nuansa tradisional Jawa Timur yang hangat. Dekat dengan alun-alun dan pusat keramaian.",
            phone: "0318072000", // Dummy phone
            gmapEmbed: "HP26+52 Sidoarjo, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "PAHLAWAN HALL",
                    setups: [
                        { type: 'Theater', capacity: 500, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 250, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "safin-hotel-sidoarjo",
            name: "Safin Hotel Sidoarjo",
            lokasi: "Jl. Raya Taman Pinang Indah No. 1, Sidoarjo, Jawa Timur 61254",
            rating: 4.3,
            images: [
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            ],
            description: "Hotel dengan konsep minimalis-tropis, menyediakan lingkungan yang tenang dan fasilitas kolam renang untuk relaksasi. Berada di area perumahan yang nyaman.",
            phone: "0318940000", // Dummy phone
            gmapEmbed: "HM7X+W9 Taman Pinang Indah, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "SAFIR MEETING ROOM",
                    setups: [
                        { type: 'U Shape', capacity: 40, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=U-Shape' },
                        { type: 'Classroom', capacity: 60, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                    ]
                }
            ]
        },
        {
            id: "artotel-sidoarjo-gading",
            name: "ARTOTEL Sidoarjo",
            lokasi: "Jl. Gading Fajar No. 15, Buduran, Sidoarjo, Jawa Timur 61254",
            rating: 4.7,
            images: [
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Hotel butik artistik dengan desain interior unik. Menarik bagi tamu yang mencari pengalaman menginap yang berbeda. Menyediakan kamar yang *stylish* dan area publik yang *instagramable*.",
            phone: "0318970000", // Dummy phone
            gmapEmbed: "HM8W+P9 Buduran, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "ARTSPACE GALLERY",
                    setups: [
                        { type: 'Theater', capacity: 100, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Cocktail', capacity: 150, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Cocktail' },
                    ]
                }
            ]
        },
        {
            id: "namira-syariah-sidoarjo",
            name: "Namira Syariah Hotel Sidoarjo",
            lokasi: "Jl. Raya Wonokoyo No. 1, Buduran, Sidoarjo, Jawa Timur 61254",
            rating: 4.2,
            images: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800"
            ],
            description: "Hotel dengan konsep syariah yang nyaman dan tenang. Menjaga privasi tamu dengan fasilitas dan pelayanan yang baik. Ideal untuk keluarga Muslim dan perjalanan bisnis.",
            phone: "0318980000", // Dummy phone
            gmapEmbed: "HM6W+G9 Wonokoyo, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "RUANG RAJAWALI",
                    setups: [
                        { type: 'Classroom', capacity: 40, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                        { type: 'Theater', capacity: 70, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                    ]
                }
            ]
        },
        {
            id: "hotel-premier-sidoarjo",
            name: "Premier Hotel Sidoarjo",
            lokasi: "Jl. Ahmad Yani No. 100, Gedangan, Sidoarjo, Jawa Timur 61254",
            rating: 4.3,
            images: [
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800"
            ],
            description: "Hotel bintang 3 dengan fasilitas lengkap, kamar luas, dan pelayanan profesional. Dekat dengan pintu tol dan pusat bisnis. Pilihan ideal untuk akomodasi yang nyaman.",
            phone: "0318990000", // Dummy phone
            gmapEmbed: "JMVF+7F Gedangan, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "PREMIER MEETING HALL",
                    setups: [
                        { type: 'Theater', capacity: 300, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 150, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "hotel-safari-sidoarjo",
            name: "Safari Hotel Sidoarjo",
            lokasi: "Jl. Mojopahit No. 50, Sidoarjo, Jawa Timur 61211",
            rating: 4.1,
            images: [
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            ],
            description: "Hotel yang menawarkan suasana tenang dan jauh dari hiruk pikuk kota. Fasilitas pendukung relaksasi yang lengkap, termasuk spa dan area hijau yang luas.",
            phone: "0318073000", // Dummy phone
            gmapEmbed: "HP35+5C Sidoarjo, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "SAHARA MEETING ROOM",
                    setups: [
                        { type: 'U Shape', capacity: 35, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=U-Shape' },
                        { type: 'Classroom', capacity: 50, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                    ]
                }
            ]
        },
        {
            id: "palem-residence-sidoarjo",
            name: "Palem Residence Sidoarjo",
            lokasi: "Jl. Raya Sukodono No. 5, Sukodono, Sidoarjo, Jawa Timur 61271",
            rating: 3.8,
            images: [
                "https://images.unsplash.com/photo-1576941122177-380d32379cfc?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800"
            ],
            description: "Residensi jangka pendek/panjang dengan fasilitas apartemen kecil. Nyaman untuk tinggal lama dengan dapur kecil dan area kerja. Berlokasi di area Sukodono.",
            phone: "081345678901", // Dummy phone
            gmapEmbed: "HP4G+3X Sukodono, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE
        },
        {
            id: "urban-express-sidoarjo",
            name: "Urban Express Hotel Sidoarjo",
            lokasi: "Jl. Raya Candi No. 15, Candi, Sidoarjo, Jawa Timur 61271",
            rating: 4.0,
            images: [
                "https://images.unsplash.com/photo-1594247514332-9c9883626e2a?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            ],
            description: "Hotel dengan konsep *self-service* yang cepat dan efisien. Ideal untuk *digital nomad* dan *solo traveler*. Kamar minimalis modern dengan koneksi WiFi yang stabil.",
            phone: "0318910000", // Dummy phone
            gmapEmbed: "HMV7+7C Candi, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE
        },
        {
            id: "santika-sidoarjo-plaza",
            name: "Santika Sidoarjo Plaza",
            lokasi: "Jl. Raya Sidoarjo Plaza No. 1, Sidoarjo, Jawa Timur 61211",
            rating: 4.7,
            images: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800"
            ],
            description: "Hotel bintang 4 dengan keramahan Indonesia yang hangat. Lokasi terintegrasi dengan pusat perbelanjaan dan kuliner. Menyediakan fasilitas konferensi dan kolam renang.",
            phone: "0318920000", // Dummy phone
            gmapEmbed: "HP26+52 Sidoarjo, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "SANTIKA BALLROOM",
                    setups: [
                        { type: 'Theater', capacity: 400, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 200, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        {
            id: "sans-hotel-juanda",
            name: "Sans Hotel Juanda Sidoarjo",
            lokasi: "Jl. Lingkar Dalam No. 5, Sedati, Sidoarjo, Jawa Timur 61253",
            rating: 4.1,
            images: [
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Penginapan modern dengan suasana santai dan dekorasi kekinian, menargetkan pasar milenial. Terletak dekat area Juanda, cocok untuk *staycation* atau transit.",
            phone: "081567890123", // Dummy phone
            gmapEmbed: "JMVW+7P Sedati, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE
        },
        {
            id: "hotel-mandarin-sidoarjo",
            name: "Hotel Mandarin Sidoarjo",
            lokasi: "Jl. Raya Taman No. 20, Taman, Sidoarjo, Jawa Timur 61257",
            rating: 3.6,
            images: [
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            ],
            description: "Hotel lokal yang menawarkan kamar dengan nilai yang baik. Lokasi strategis dekat pasar dan terminal. Pilihan yang terjangkau untuk menginap di area Taman.",
            phone: "0318930000", // Dummy phone
            gmapEmbed: "JMPF+3M Taman, Kabupaten Sidoarjo, Jawa Timur",
            mice: [] // Tidak ada data MICE
        },
        {
            id: "grand-mercur-sidoarjo-waterpark",
            name: "Grand Mercure Sidoarjo Waterpark",
            lokasi: "Jl. Raya Trosobo No. 10, Taman, Sidoarjo, Jawa Timur 61257",
            rating: 4.9,
            images: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
            ],
            description: "Hotel mewah bintang 5 terpadu dengan taman air besar. Destinasi liburan terbaik untuk keluarga di Jawa Timur. Menawarkan fasilitas MICE kelas atas dan layanan premium.",
            phone: "0318900000", // Dummy phone
            gmapEmbed: "JMQG+2G Taman, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "GRAND BALLROOM WATERPARK",
                    setups: [
                        { type: 'Theater', capacity: 2000, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 1000, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
        // Tambahkan 5 data lagi untuk mencapai 20 total
        {
            id: "hotel-bintang-tiga-krian",
            name: "Bintang Tiga Hotel Krian",
            lokasi: "Jl. Raya Krian No. 25, Krian, Sidoarjo, Jawa Timur 61262",
            rating: 3.7,
            images: [
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            ],
            description: "Akomodasi yang terjangkau dan fungsional di wilayah Krian. Cocok untuk pelancong bisnis dan industri di wilayah Sidoarjo Barat. Kamar bersih dan layanan standar.",
            phone: "0318991000", // Dummy phone
            gmapEmbed: "H6PC+7Q Krian, Kabupaten Sidoarjo, Jawa Timur",
            mice: []
        },
        {
            id: "garden-inn-sidoarjo",
            name: "Garden Inn Sidoarjo",
            lokasi: "Jl. Taman Tiara No. 1, Sidoarjo, Jawa Timur 61254",
            rating: 4.2,
            images: [
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
            ],
            description: "Hotel dengan suasana taman yang hijau dan asri. Menawarkan ketenangan dan kenyamanan. Dilengkapi dengan kolam renang dan restoran yang menyajikan hidangan lokal.",
            phone: "0318992000", // Dummy phone
            gmapEmbed: "HM7X+W9 Sidoarjo, Kabupaten Sidoarjo, Jawa Timur",
            mice: [
                {
                    roomName: "GARDEN PAVILION",
                    setups: [
                        { type: 'Theater', capacity: 150, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Classroom', capacity: 80, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                    ]
                }
            ]
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get("id");
    const hotel = hotels.find(h => h.id === hotelId);

    const mainContent = document.getElementById("main-content");
    const notFoundDiv = document.getElementById("not-found");

    if (!hotel) {
        mainContent.classList.add("hidden");
        notFoundDiv.classList.remove("hidden");
        return;
    }

    document.title = `${hotel.name} - SidoDolan`;
    document.getElementById("hotel-name-top").textContent = hotel.name;
    document.getElementById("hotel-description").textContent = hotel.description;

    const ratingContainer = document.getElementById("rating-container");
    const fullStars = Math.floor(hotel.rating);
    const hasHalfStar = hotel.rating % 1 >= 0.5;
    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fa-solid fa-star text-primary"></i>';
    if (hasHalfStar) starsHTML += '<i class="fa-solid fa-star-half-stroke text-primary"></i>';
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) starsHTML += '<i class="fa-regular fa-star text-primary"></i>';
    ratingContainer.innerHTML = `<div class="flex items-center gap-2"><span class="bg-primary/10 text-primary-dark font-bold px-3 py-1 rounded-md text-sm">Bintang ${fullStars}</span><div class="flex items-center text-xl">${starsHTML}</div></div>`;

    document.getElementById("address-container").innerHTML = `
        <p class="text-sm font-semibold text-slate-500 mb-1">Alamat</p>
        <p class="font-bold text-primary-dark">${hotel.lokasi}</p>
    `;

    const mainImage = document.getElementById("main-image");
    const thumbnailGrid = document.getElementById("thumbnail-grid");
    mainImage.src = hotel.images[0];
    thumbnailGrid.innerHTML = hotel.images.map((imgSrc, index) => `
        <img src="${imgSrc}" alt="Thumbnail ${index + 1}" class="w-full h-full object-cover rounded-md cursor-pointer border-4 border-transparent transition-all aspect-video ${index === 0 ? "thumbnail-active" : ""}" data-index="${index}">
    `).join("");

    thumbnailGrid.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
            const index = e.target.dataset.index;
            mainImage.src = hotel.images[index];
            document.querySelectorAll("#thumbnail-grid img").forEach(t => t.classList.remove("thumbnail-active"));
            e.target.classList.add("thumbnail-active");
        }
    });

    const miceContainer = document.getElementById("mice-accordion-container");
    if (hotel.mice && hotel.mice.length > 0) {
        miceContainer.innerHTML = hotel.mice.map(room => {
            const setupsHtml = room.setups.map(setup => `
                <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                    <div class="text-left">
                        <p class="font-bold text-slate-800">${setup.type}</p>
                        <span class="text-sm font-semibold text-white bg-primary-dark px-3 py-1 rounded-full mt-2 inline-block">${setup.capacity} Orang</span>
                    </div>
                    <img src="${setup.icon}" alt="${setup.type} layout" class="w-24 h-auto rounded-md bg-white p-1 shadow-sm">
                </div>
            `).join("");
            return `
                <div class="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                    <button class="accordion-toggle w-full flex items-center justify-between p-5 text-left font-bold text-lg text-primary-dark">
                        <span>${room.roomName}</span>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content">
                        <div class="p-5 border-t border-slate-200 space-y-3">${setupsHtml}</div>
                    </div>
                </div>
            `;
        }).join("");

        document.querySelectorAll(".accordion-toggle").forEach(button => {
            button.addEventListener("click", () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector("i");
                content.classList.toggle("open");
                icon.classList.toggle("rotate-180");
            });
        });
    } else {
        document.getElementById("mice-section").classList.add("hidden");
    }

    document.getElementById("whatsapp-button").href = `https://wa.me/${hotel.phone}?text=Halo, saya tertarik untuk reservasi di ${hotel.name}.`;
    document.getElementById("hotel-gmap-embed").src = hotel.gmapEmbed;

    const pageUrl = window.location.href;
    const shareText = `Kunjungi ${hotel.name}, hotel keren di Sidoarjo!`;
    document.getElementById("share-whatsapp").href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + pageUrl)}`;
    document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
});