        document.addEventListener('DOMContentLoaded', () => {
            const topDestinations = [
                { name: "Kampung Batik Jetis", image: "https://media.indozone.id/crop/photo/p2/95/2025/04/12/1000259473-634846500.jpg" },
                { name: "Candi Pari", image: "https://cdn1-production-images-kly.akamaized.net/M1iWcsKhITDrTGF83c0xK3Voq48=/500x281/smart/filters:quality(75):strip_icc()/kly-media-production/medias/2881522/original/015758400_1565767254-800px-Candi_Pari_1.jpg" },
                { name: "Pulau Sarinah", image: "./assets/pulau-sarinah.jpg" },
                { name: "Delta Fishing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzQokUGMD6KokbUZ-LcsFqb1R0tC3PKNUtA&s" },
                { name: "Museum Mpu Tantular", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnvMHpWEONa7_9fjgIg05yLrBwji_tXqrOQ&s" },
                { name: "Alun-Alun Sidoarjo", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg" },
                { name: "Kebun Cokelat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgN_BpjYi5bFfahDiZhZtofIqosTB1ljq-Uw&s" },
                { name: "Wisata Bahari Tlocor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKR92TorlzRqHkpvK1haDTo_xWsy-VSbZQw&s" },
            ];

            const tourPackages = [
                {
                    id: 'hemat',
                    name: 'Jelajah Hemat',
                    normalPrice: '350.000',
                    price: '250',
                    priceSuffix: '.000',
                    features: [
                        { text: '2 Destinasi Wisata', included: true },
                        { text: 'Transportasi Motor', included: true },
                        { text: 'Makan Siang Khas', included: true },
                        { text: 'Dokumentasi Foto', included: false },
                        { text: 'Pemandu Wisata', included: false }
                    ]
                },
                {
                    id: 'populer',
                    name: 'Petualang Populer',
                    normalPrice: '600.000',
                    price: '450',
                    priceSuffix: '.000',
                    features: [
                        { text: '4 Destinasi Wisata', included: true },
                        { text: 'Transportasi Mobil (AC)', included: true },
                        { text: 'Makan Siang & Snack', included: true },
                        { text: 'Dokumentasi Foto', included: true },
                        { text: 'Pemandu Wisata', included: false }
                    ]
                },
                {
                    id: 'grup',
                    name: 'Grup Seru',
                    normalPrice: '800.000',
                    price: '650',
                    priceSuffix: '.000',
                    features: [
                        { text: '5 Destinasi Wisata', included: true },
                        { text: 'Transportasi Mini Bus', included: true },
                        { text: 'Makan & Snack 2x', included: true },
                        { text: 'Dokumentasi Foto', included: true },
                        { text: 'Pemandu Wisata', included: true }
                    ]
                },
                {
                    id: 'sultan',
                    name: 'Sultan Sidoarjo',
                    normalPrice: '1.250.000',
                    price: '950',
                    priceSuffix: '.000',
                    features: [
                        { text: 'Destinasi Pilihan', included: true },
                        { text: 'Mobil Pribadi + Driver', included: true },
                        { text: 'Makan di Resto Premium', included: true },
                        { text: 'Dokumentasi Foto & Video', included: true },
                        { text: 'Pemandu Profesional', included: true }
                    ]
                }
            ];

            const testimonials = [
                {
                    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
                    name: 'Ratni Permata Dwi',
                    origin: 'Wisatawan dari Jakarta',
                    quote: '"Perjalanan yang luar biasa! Paketnya sangat terorganisir, pemandunya ramah, dan makanannya enak-enak. Sidoarjo ternyata punya banyak hal menarik!"'
                },
                {
                    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
                    name: 'Rina Sugiarti Erik',
                    origin: 'Wisatawan dari Bandung',
                    quote: '"Saya ambil paket Grup Seru bareng teman-teman kantor. Semuanya happy! Transportasinya nyaman dan destinasinya seru semua. Recommended banget!"'
                },
                {
                    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
                    name: 'Siti Pratama Astuti',
                    origin: 'Wisatawan dari Yogyakarta',
                    quote: '"Sebagai solo traveler, saya merasa aman dan nyaman. Bisa keliling Sidoarjo tanpa pusing mikirin rute. Kulinernya juara!"'
                }
            ];

            const packageDetails = {
                hemat: {
                    name: 'Jelajah Hemat',
                    price: 'Rp 250.000',
                    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop',
                    gradient: 'from-blue-500 to-cyan-500',
                    duration: '1 Hari Penuh',
                    features: [
                        { text: '2 Destinasi Wisata', included: true }, { text: 'Transportasi Motor', included: true }, { text: 'Makan Siang Khas', included: true }, { text: 'Dokumentasi Foto', included: false }, { text: 'Pemandu Wisata', included: false }
                    ],
                    itinerary: [
                        { time: "09:00 - 11:00", destination: "Candi Pari", description: "Mengagumi arsitektur kuno peninggalan Majapahit.", price: "Rp. 15.000" },
                        { time: "12:00 - 13:00", destination: "Makan Siang Lontong Kupang", description: "Menikmati kuliner khas Sidoarjo yang legendaris." },
                        { time: "14:00 - 16:00", destination: "Alun-alun Sidoarjo", description: "Bersantai dan berfoto di Monumen Jayandaru." }
                    ]
                },
                populer: {
                    name: 'Petualang Populer',
                    price: 'Rp 450.000',
                    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=500&fit=crop',
                    gradient: 'from-purple-500 to-pink-500',
                    duration: '1 Hari Penuh',
                    features: [
                        { text: '4 Destinasi Wisata', included: true }, { text: 'Transportasi Mobil (AC)', included: true }, { text: 'Makan Siang & Snack', included: true }, { text: 'Dokumentasi Foto', included: true }, { text: 'Pemandu Wisata', included: false }
                    ],
                    itinerary: [
                        { time: "08:00 - 10:00", destination: "Lumpur Lapindo", description: "Menyaksikan fenomena alam yang unik dari dekat." },
                        { time: "10:30 - 12:30", destination: "Museum Mpu Tantular", description: "Menyelami sejarah dan budaya Jawa Timur." },
                        { time: "13:00 - 14:00", destination: "Makan Siang & Snack", description: "Mencicipi hidangan lokal dan jajanan khas." },
                        { time: "14:30 - 16:30", destination: "Desa Kerajinan Kulit", description: "Melihat proses pembuatan dan belanja produk kulit." }
                    ]
                },
                grup: {
                    name: 'Grup Seru',
                    price: 'Rp 650.000',
                    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
                    gradient: 'from-green-500 to-teal-500',
                    duration: '2 Hari 1 Malam',
                    features: [
                        { text: '5 Destinasi Wisata', included: true }, { text: 'Transportasi Mini Bus', included: true }, { text: 'Makan & Snack 2x', included: true }, { text: 'Dokumentasi Foto', included: true }, { text: 'Pemandu Wisata', included: true }
                    ],
                    itinerary: [
                        { time: "Hari 1 - 09:00", destination: "Candi Pari & Candi Sumur", description: "Eksplorasi candi kembar era Majapahit." },
                        { time: "Hari 1 - 13:00", destination: "Wisata Bahari Tlocor", description: "Menikmati suasana pantai dan hutan mangrove." },
                        { time: "Hari 1 - 18:00", destination: "Makan Malam Seafood", description: "Menyantap hidangan laut segar di tepi pantai." },
                        { time: "Hari 2 - 09:00", destination: "Kampung Batik Jetis", description: "Workshop membatik dan belanja oleh-oleh." },
                        { time: "Hari 2 - 13:00", destination: "Pusat Oleh-oleh", description: "Berburu bandeng, udang, dan petis khas Sidoarjo." }
                    ]
                },
                sultan: {
                    name: 'Sultan Sidoarjo',
                    price: 'Rp 950.000',
                    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop',
                    gradient: 'from-orange-500 to-red-500',
                    duration: 'Fleksibel Sesuai Keinginan',
                    features: [
                        { text: 'Destinasi Pilihan', included: true }, { text: 'Mobil Pribadi + Driver', included: true }, { text: 'Makan di Resto Premium', included: true }, { text: 'Dokumentasi Foto & Video', included: true }, { text: 'Pemandu Profesional', included: true }
                    ],
                    itinerary: [
                        { time: "Sesuai Pilihan", destination: "Tur Privat ke Candi-Candi", description: "Jelajahi Candi Pari, Sumur, dan lainnya." },
                        { time: "Sesuai Pilihan", destination: "Makan di Resto Premium", description: "Nikmati santapan istimewa di restoran apung." },
                        { time: "Sesuai Pilihan", destination: "Kunjungan Eksklusif & Workshop", description: "Kunjungi pusat kerajinan kulit atau batik." },
                        { time: "Sesuai Pilihan", destination: "Sesi Foto Profesional", description: "Abadikan momen dengan fotografer profesional." }
                    ]
                }
            };

            const destinationGrid = document.getElementById('top-destinasi-grid');
            if (destinationGrid) {
                destinationGrid.innerHTML = topDestinations.map(dest => {
                    const id = dest.name.toLowerCase().replace(/\s+/g, '-');
                    return `
                        <a href="detailDestination.html?id=${id}" class="flex-shrink-0 w-60 sm:w-64 md:w-72 group">
                            <div class="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div class="absolute bottom-0 left-0 p-4 md:p-5 text-white w-full">
                                    <h3 class="font-bold text-lg mb-1">${dest.name}</h3>
                                    <p class="text-sm opacity-80 flex items-center gap-2">Kunjungi <i class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i></p>
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