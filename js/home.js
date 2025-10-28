        document.addEventListener('DOMContentLoaded', () => {
            const topDestinations = [
                { name: "Kampung Batik Jetis", image: "https://media.indozone.id/crop/photo/p2/95/2025/04/12/1000259473-634846500.jpg" },
                { name: "Candi Pari", image: "https://cdn1-production-images-kly.akamaized.net/M1iWcsKhITDrTGF83c0xK3Voq48=/500x281/smart/filters:quality(75):strip_icc()/kly-media-production/medias/2881522/original/015758400_1565767254-800px-Candi_Pari_1.jpg" },
                { name: "Pulau Lusi", image: "https://sidita.disbudpar.jatimprov.go.id/storage/foto-dtw/d3ca2_1670487091.jpg" },
                { name: "Delta Fishing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzQokUGMD6KokbUZ-LcsFqb1R0tC3PKNUtA&s" },
                { name: "Museum Mpu Tantular", image: "https://awsimages.detik.net.id/community/media/visual/2023/08/25/mpu-tantular-museum_169.jpeg?w=1200" },
                { name: "Alun-Alun Sidoarjo", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg" },
                { name: "Kebun Cokelat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgN_BpjYi5bFfahDiZhZtofIqosTB1ljq-Uw&s" },
                { name: "Wisata Bahari Tlocor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKR92TorlzRqHkpvK1haDTo_xWsy-VSbZQw&s" },
            ];

        const tourPackages = [

            {
                id: 'hemat',
                name: 'Dolan 1',
                price: '100',
                priceSuffix: '.000*',
                features: [
                    { text: '4 Destinasi Utama dalam Sehari', included: true },
                    { text: 'Rekomendasi Rute Mandiri (Kendaraan Roda Dua)', included: true }, 
                    { text: 'Panduan Waktu Makan Siang Khas Sidoarjo', included: true },
                    { text: 'Estimasi Anggaran Perorangan Rendah', included: true },
                ]
            },
            {
                id: 'populer',
                name: 'Dolan 2',
                price: '450',
                priceSuffix: '.000*',
                features: [
                    { text: '5 Destinasi (Alam, Budaya, Edukasi)', included: true },
                    { text: 'Rekomendasi Rute Nyaman (Kendaraan Roda Empat)', included: true },
                    { text: 'Panduan Anggaran Makan Siang & Snack', included: true },
                    { text: 'Panduan Sewa Perahu dan Spot Foto', included: true }, 
                    { text: 'Panduan Rekomendasi Akomodasi (1 Malam)', included: true } 
                ]
            },
            {
                id: 'grup',
                name: 'Dolan 3',
                price: '650',
                priceSuffix: '.000*',
                features: [
                    { text: '7 Destinasi (Sejarah, Alam, Rekreasi)', included: true }, 
                    { text: 'Rekomendasi Kendaraan Kapasitas Besar', included: true }, 
                    { text: 'Panduan Kuliner Lengkap (Siang & Malam)', included: true }, 
                    { text: 'Rencana Perjalanan Detail & Terstruktur', included: true }, 
                    { text: 'Rekomendasi Kontak Pemandu Lokal (Opsional)', included: true } 
                ]
            },
            {
                id: 'sultan',
                name: 'Dolan 4',
                price: '950',
                priceSuffix: '.000*',
                features: [
                    { text: '8+ Destinasi Pilihan Fleksibel', included: true },
                    { text: 'Rekomendasi Mobil Pribadi Eksklusif', included: true }, 
                    { text: 'Panduan Restoran & Fasilitas Premium', included: true }, 
                    { text: 'Panduan Layanan Foto & Video Profesional', included: true }, 
                    { text: 'Panduan Akomodasi Bintang 4/5', included: true } 
                ]
            }
        ];

        const testimonials = [
            {
                avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
                name: 'Ratni Permata Dwi',
                origin: 'Wisatawan dari Jakarta',
                quote: '"Informasi rencana perjalanan yang luar biasa! Rutenya terorganisir, destinasinya mudah diakses, dan panduan kulinernya sangat membantu. Sidoarjo ternyata punya banyak hal menarik!"' // Fokus pada informasi/destinasi
            },
            {
                avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
                name: 'Rina Sugiarti Erik',
                origin: 'Wisatawan dari Bandung',
                quote: '"Saya pakai rencana 3 hari 2 malam ini bareng teman-teman. Itinerary-nya lengkap, hotel yang direkomendasikan nyaman, dan kami berhasil mengunjungi semua spot sejarah dan kuliner. Sangat membantu!"' // Fokus pada itinerary/rekomendasi
            },
            {
                avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
                name: 'Siti Pratama Astuti',
                origin: 'Wisatawan dari Yogyakarta',
                quote: '"Sebagai solo traveler, saya merasa terbantu oleh panduan rute perjalanannya. Bisa keliling Sidoarjo tanpa pusing mikirin destinasi dan estimasi biaya. Kulinernya juara!"' // Fokus pada panduan/rute
            }
        ];

        const packageDetails = {
            
            hemat: {
                name: 'Dolan 1: Jelajah Sejarah & Kuliner Sehari',
                price: 'Estimasi Rp 100.000*', 
                image: 'https://www.rumah123.com/seo-cms/assets/Sejarah_Museum_Mpu_Tantular_969da5e615/Sejarah_Museum_Mpu_Tantular_969da5e615.jpg',
                duration: '1 Hari Penuh (± 8 Jam)',
                features: [
                    { text: '4 Destinasi Utama + Kuliner Khas', included: true },
                    { text: 'Asumsi Perjalanan Mandiri (Kendaraan Pribadi/Online)', included: true },
                    { text: 'Panduan Waktu Makan Siang Khas Sidoarjo', included: true },
                    { text: 'Panduan Lokasi Foto Ikonik', included: true },
                    { text: 'Rencana Perjalanan Tanpa Pemandu', included: false }
                ],
                itinerary: [
                    { time: "09:00 - 11:00", destination: "Candi Pari", description: "Mengagumi arsitektur kuno peninggalan Majapahit di Porong.", price: "Rp. 3.000" },
                    { time: "11:30 - 12:30", destination: "Makan Siang Lontong Kupang", description: "Menikmati kuliner khas Sidoarjo yang legendaris.", price: "Rp. 15.000"},
                    { time: "13:30 - 15:30", destination: "Museum Mpu Tantular", description: "Menyelami sejarah dan budaya Jawa Timur.", price: "Rp. 5.000"},
                    { time: "16:00 - 17:30", destination: "Alun-alun Sidoarjo & Monumen Jayandaru", description: "Bersantai dan berfoto di ikon kota.", price: "Rp. 0 (Parkir Rp 3.000)" }
                ]
            },
            populer: {
                name: 'Dolan 2: Petualangan Pesisir & Budaya 2D1N',
                price: 'Estimasi Rp 450.000*',
                image: 'https://sidita.disbudpar.jatimprov.go.id/storage/foto-dtw/1432b_1670379450.jpg',
                duration: '2 Hari 1 Malam',
                features: [
                    { text: '5 Destinasi Utama (Alam, Budaya, Edukasi)', included: true },
                    { text: 'Rekomendasi Transportasi Roda Empat', included: true },
                    { text: 'Rencana Mencakup Penginapan (1 Malam)', included: true },
                    { text: 'Panduan Sewa Perahu dan Spot Foto Pesisir', included: true },
                    { text: 'Pemandu Lokal (Opsional)', included: false }
                ],
                itinerary: [
                    { time: "Hari 1 - 09:00", destination: "Lumpur Lapindo (Siring)", description: "Menyaksikan fenomena alam unik." },
                    { time: "Hari 1 - 12:00", destination: "Makan Siang & Snack", description: "Mencicipi hidangan lokal." },
                    { time: "Hari 1 - 14:00", destination: "Wisata Bahari Tlocor & Pulau Lusi", description: "Eksplorasi hutan mangrove dan pantai." },
                    { time: "Hari 1 - 19:00", destination: "Check-in Hotel & Makan Malam", description: "Panduan Hotel & Restoran terdekat." },
                    { time: "Hari 2 - 09:00", destination: "Kampung Batik Jetis", description: "Workshop membatik dan belanja produk." },
                    { time: "Hari 2 - 13:00", destination: "Pusat Oleh-oleh Bandeng", description: "Berburu bandeng presto dan petis khas." }
                ],
                hotelRecommendations: [
                    { name: 'Hotel X', priceRange: 'Rp 250.000 - Rp 350.000/malam', detail: 'Hotel Bintang 2 di pusat kota, dekat Alun-alun.' },
                    { name: 'Hotel Y', priceRange: 'Rp 380.000 - Rp 500.000/malam', detail: 'Hotel bisnis dengan fasilitas modern.' }
                ]
            },
            grup: {
                name: 'Dolan 3: Eksplorasi Komprehensif 3D2N',
                price: 'Estimasi Rp 650.000*',
                image: 'https://bacotsekali.sgp1.digitaloceanspaces.com/cityawesome/uploads/2023/01/image-81.png',
                duration: '3 Hari 2 Malam',
                features: [
                    { text: '7 Destinasi Utama (Sejarah, Alam, Edukasi, Rekreasi)', included: true },
                    { text: 'Rekomendasi untuk Rombongan (Kendaraan Kapasitas Besar)', included: true },
                    { text: 'Rencana Mencakup Penginapan (2 Malam)', included: true },
                    { text: 'Panduan Kuliner Lengkap (Makan Siang & Malam)', included: true },
                    { text: 'Panduan Kontak Pemandu Lokal (Opsional)', included: true }
                ],
                itinerary: [
                    { time: "Hari 1 - 09:00", destination: "Candi Pari & Candi Sumur", description: "Eksplorasi candi kembar era Majapahit." },
                    { time: "Hari 1 - 13:00", destination: "Museum Mpu Tantular", description: "Menyelami sejarah Jawa Timur." },
                    { time: "Hari 1 - 19:00", destination: "Check-in Hotel & Makan Malam", description: "Panduan Hotel & Restoran Keluarga." },
                    { time: "Hari 2 - 09:00", destination: "Wisata Bahari Tlocor & Pulau Lusi", description: "Eksplorasi mangrove dan pantai." },
                    { time: "Hari 2 - 14:00", destination: "Delta Fishing / Agrowisata Rekreasi", description: "Aktivitas rekreasi dan memancing." },
                    { time: "Hari 2 - 18:00", destination: "Makan Malam Seafood", description: "Menyantap hidangan laut segar di tepi pantai." },
                    { time: "Hari 3 - 09:00", destination: "Kampung Batik Jetis", description: "Workshop dan belanja batik." },
                    { time: "Hari 3 - 13:00", destination: "Pusat Oleh-oleh (Kerupuk, Bandeng, Petis)", description: "Belanja suvenir khas Sidoarjo." }
                ],
                hotelRecommendations: [
                    { name: 'Hotel Z (Family)', priceRange: 'Rp 400.000 - Rp 600.000/malam', detail: 'Hotel dengan kolam renang, cocok untuk rombongan.' },
                    { name: 'Guesthouse A', priceRange: 'Rp 550.000 - Rp 750.000/rumah', detail: 'Sewa rumah/villa kecil untuk kenyamanan grup.' }
                ]
            },
            sultan: {
                name: 'Dolan 4: Tur Kustomisasi Premium 4D3N',
                price: 'Estimasi Rp 950.000*',
                image: 'https://optika.id/wp-content/uploads/202301/batik-jetis-ikon-sidoarjo-perlu-perhatian.jpeg',
                duration: '4 Hari 3 Malam',
                features: [
                    { text: '8+ Destinasi Pilihan Fleksibel', included: true },
                    { text: 'Rekomendasi Mobil Pribadi Eksklusif', included: true },
                    { text: 'Rencana Mencakup Penginapan (3 Malam)', included: true },
                    { text: 'Panduan Restoran dan Fasilitas Premium', included: true },
                    { text: 'Panduan Kontak Fotografer/Pemandu Profesional', included: true }
                ],
                itinerary: [
                    { time: "Hari 1 - 09.00", destination: "Tur Privat Candi & Sejarah", description: "Kunjungan eksklusif ke Candi dan Museum." },
                    { time: "Hari 2 - 09.00", destination: "Eksplorasi Pesisir Premium", description: "Tur perahu pribadi ke Tlocor dan Pulau Lusi." },
                    { time: "Hari 3 - 09.00 ", destination: "Workshop Kerajinan Eksklusif", description: "Sesi privat membatik atau kerajinan kulit." },
                    { time: "Hari 4 - 09.00", destination: "Pusat Oleh-oleh dan Kuliner Malam", description: "Berburu oleh-oleh dan makan malam di restoran terbaik." },
                    { time: "Hari 4 - 13.00", destination: "Destinasi Bebas (Sesuai Pilihan)", description: "Waktu luang atau kunjungan ke destinasi tambahan." }
                ],
                hotelRecommendations: [
                    { name: 'Hotel Bintang 4/5 (Rekomendasi Terbaik)', priceRange: 'Rp 650.000 - Rp 1.200.000/malam', detail: 'Hotel mewah dengan layanan lengkap dan lokasi strategis.' },
                    { name: 'Boutique Stay', priceRange: 'Rp 800.000 - Rp 1.500.000/rumah', detail: 'Pilihan akomodasi unik dan eksklusif.' }
                ]
            }
        };

            const destinationGrid = document.getElementById('top-destinasi-grid');
            if (destinationGrid) {
                destinationGrid.innerHTML = topDestinations.map(dest => {
                    const id = dest.name.toLowerCase().replace(/\s+/g, '-');
                    return `
                        <a href="detailDestination.html?id=${id}" class="flex-shrink-0 w-60 sm:w-64 md:w-72 group">
                            <div class="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg transition-transform duration-300">
                                <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div class="absolute bottom-0 left-0 p-4 md:p-5 text-white w-full">
                                    <h3 class="font-bold text-lg mb-1">${dest.name}</h3>
                                    <p class="text-sm opacity-80 flex items-center gap-2">Kunjungi <i class="fa-solid fa-arrow-right text-xs transition-transform duration-300"></i></p>
                                </div>
                            </div>
                        </a>`;
                }).join('');
            }

            const packageGrid = document.getElementById('paket-wisata-grid');
            if (packageGrid) {
                packageGrid.innerHTML = tourPackages.map(pkg => {
                    const features = pkg.features.map(f => `
                        <li class="flex items-center">
                        <i class="fa-solid ${f.included ? 'fa-check text-primary' : 'fa-xmark text-slate-400'} mr-3 w-4 text-center"></i> ${f.text}
                        </li>`).join('');
                    return `
                        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-primary-dark h-full flex flex-col fade-in-up transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <h3 class="text-2xl font-bold text-slate-800 mb-2">${pkg.name}</h3>
                            <p class="text-slate-400 text-sm line-through">Harga Normal Rp ${pkg.normalPrice}</p>
                            <p class="text-4xl md:text-5xl font-bold text-slate-900 my-4">Rp ${pkg.price}<span class="text-2xl md:text-3xl font-semibold">${pkg.priceSuffix}</span></p>
                            <p class="text-slate-500 font-medium mb-8">/orang</p>
                            <ul class="space-y-4 text-left text-slate-600 flex-grow">${features}</ul>
                            <button data-package-id="${pkg.id}" class="w-full text-center mt-10 py-3 px-6 rounded-lg font-semibold border-2 border-primary-dark text-primary-dark transition-all duration-300 hover:bg-primary-dark hover:text-white">Pilih Paket Ini</button>
                        </div>`;
                }).join('');
            }

            const testimonialGrid = document.getElementById('testimoni-grid');
            if (testimonialGrid) {
                testimonialGrid.innerHTML = testimonials.map(t => `
                    <div class="relative bg-white p-8 rounded-2xl shadow-xl fade-in-up">
                        <div class="flex items-center gap-4 mb-6">
                            <img src="${t.avatar}" alt="${t.name}" class="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 ring-primary">
                            <div><h4 class="font-bold text-slate-800 text-lg text-left">${t.name}</h4><p class="text-sm text-slate-500 text-left">${t.origin}</p></div>
                        </div>
                        <p class="text-slate-600 italic text-left">“${t.quote}”</p>
                    </div>`).join('');
            }

            const modal = document.getElementById('package-modal');
            const modalPanel = document.getElementById('modal-panel');
            const closeModalBtn = document.getElementById('modal-close-btn');

            const openModal = id => {
                const data = packageDetails[id];
                if (!data) return;
                document.getElementById('modal-title').textContent = data.name;
                document.getElementById('modal-duration').textContent = data.duration;
                document.getElementById('modal-image').src = data.image;
                document.getElementById('modal-gradient').className = `absolute inset-0 bg-gradient-to-t opacity-60 ${data.gradient}`;
                document.getElementById('modal-price').textContent = data.price;
                
                const featuresContainer = document.getElementById('modal-features');
                featuresContainer.innerHTML = data.features.map(f => `
                    <li class="flex items-center text-sm ${f.included ? 'text-slate-700' : 'text-slate-400 line-through'}">
                        <i class="fa-solid ${f.included ? 'fa-check-circle text-primary' : 'fa-times-circle'} mr-3 w-4 text-center"></i>${f.text}
                    </li>`).join('');

                const itineraryContainer = document.getElementById('modal-itinerary-container');
                itineraryContainer.innerHTML = data.itinerary.map((item, i) => `
                    <div class="relative pl-8 sm:pl-10 border-l-2 border-slate-200 ${i === data.itinerary.length - 1 ? 'last:border-l-transparent last:pb-0' : 'pb-8'}">
                        <div class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary-dark border-4 border-white flex items-center justify-center">
                            <i class="fa-solid fa-location-dot text-white text-[8px]"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-semibold text-primary-dark">${item.time}</p>
                            <div class="flex flex-wrap justify-between items-center gap-x-4">
                                <h4 class="text-lg font-bold text-slate-800">${item.destination}</h4>
                                ${item.price ? `<span class="text-sm font-semibold text-primary-dark bg-primary/20 px-2 py-1 rounded">${item.price} /org</span>` : ''}
                            </div>
                            <p class="text-slate-600 text-sm mt-1">${item.description}</p>
                        </div>
                    </div>`).join('');

                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                document.body.style.overflow = 'hidden';
                modal.classList.remove('modal-hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modalPanel.classList.remove('scale-95', 'opacity-0');
                }, 10);
            };

            const closeModal = () => {
                modal.classList.add('opacity-0');
                modalPanel.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    document.body.style.overflow = 'auto';
                    document.body.style.paddingRight = '';
                    modal.classList.add('modal-hidden');
                }, 300);
            };

            document.querySelectorAll('button[data-package-id]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.packageId)));
            closeModalBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

            const scrollContainer = document.getElementById('top-destinasi-grid');
            const scrollLeftBtn = document.getElementById('scroll-left-btn');
            const scrollRightBtn = document.getElementById('scroll-right-btn');
            if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
                const updateScrollButtons = () => {
                    scrollLeftBtn.disabled = scrollContainer.scrollLeft <= 0;
                    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                    scrollRightBtn.disabled = scrollContainer.scrollLeft >= maxScrollLeft - 1;
                };
                scrollRightBtn.addEventListener('click', () => scrollContainer.scrollBy({ left: scrollContainer.clientWidth * 0.8, behavior: 'smooth' }));
                scrollLeftBtn.addEventListener('click', () => scrollContainer.scrollBy({ left: -scrollContainer.clientWidth * 0.8, behavior: 'smooth' }));
                scrollContainer.addEventListener('scroll', updateScrollButtons);
                window.addEventListener('resize', updateScrollButtons);
                new ResizeObserver(updateScrollButtons).observe(scrollContainer);
                setTimeout(updateScrollButtons, 500);
            }

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
            if (menuToggleBtn && menuCloseBtn && mobileMenu && menuOverlay) {
                menuToggleBtn.addEventListener('click', openMenu);
                menuCloseBtn.addEventListener('click', closeMenu);
                menuOverlay.addEventListener('click', closeMenu);
            }
        });