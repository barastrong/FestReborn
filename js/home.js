        document.addEventListener('DOMContentLoaded', () => {
            
            const topDestinations = [
                { name: 'Lumpur Lapindo', image: 'https://placehold.co/400x500/005A9C/FFFFFF/png?text=Lumpur\\nLapindo' },
                { name: 'Candi Pari', image: 'https://placehold.co/400x500/D2691E/FFFFFF/png?text=Candi+Pari' },
                { name: 'Pulau Sarine', image: 'https://placehold.co/400x500/228B22/FFFFFF/png?text=Pulau+Sarine' },
                { name: 'Kerajinan Kulit', image: 'https://placehold.co/400x500/8B4513/FFFFFF/png?text=Kerajinan\\nKulit' },
                { name: 'Wisata Bahari Tlocor', image: 'https://placehold.co/400x500/4682B4/FFFFFF/png?text=Wisata\\nBahari' },
                { name: 'Museum Mpu Tantular', image: 'https://placehold.co/400x500/6A5ACD/FFFFFF/png?text=Museum\\nMpu+Tantular' },
                { name: 'Kampung Lontong Kupang', image: 'https://placehold.co/400x500/FF4500/FFFFFF/png?text=Lontong\\nKupang' },
                { name: 'Kebun Kurma', image: 'https://placehold.co/400x500/2E8B57/FFFFFF/png?text=Kebun\\nKurma' },
                { name: 'Pasar Ikan', image: 'https://placehold.co/400x500/DAA520/FFFFFF/png?text=Pasar+Ikan' },
                { name: 'Alun-alun Sidoarjo', image: 'https://placehold.co/400x500/DC143C/FFFFFF/png?text=Alun-alun' },
            ];
            
            const tourPackages = [
                {
                    id: 'hemat',
                    name: 'Jelajah Hemat',
                    normalPrice: '350.000',
                    price: '250',
                    priceSuffix: '.000',
                    features: [
                        { text: "2 Destinasi Wisata", included: true },
                        { text: "Transportasi Motor", included: true },
                        { text: "Makan Siang Khas", included: true },
                        { text: "Dokumentasi Foto", included: false },
                        { text: "Pemandu Wisata", included: false },
                    ]
                },
                {
                    id: 'populer',
                    name: 'Petualang Populer',
                    normalPrice: '600.000',
                    price: '450',
                    priceSuffix: '.000',
                    features: [
                        { text: "4 Destinasi Wisata", included: true },
                        { text: "Transportasi Mobil (AC)", included: true },
                        { text: "Makan Siang & Snack", included: true },
                        { text: "Dokumentasi Foto", included: true },
                        { text: "Pemandu Wisata", included: false },
                    ]
                },
                {
                    id: 'grup',
                    name: 'Grup Seru',
                    normalPrice: '800.000',
                    price: '650',
                    priceSuffix: '.000',
                    features: [
                        { text: "5 Destinasi Wisata", included: true },
                        { text: "Transportasi Mini Bus", included: true },
                        { text: "Makan & Snack 2x", included: true },
                        { text: "Dokumentasi Foto", included: true },
                        { text: "Pemandu Wisata", included: true },
                    ]
                },
                {
                    id: 'sultan',
                    name: 'Sultan Sidoarjo',
                    normalPrice: '1.250.000',
                    price: '950',
                    priceSuffix: '.000',
                    features: [
                        { text: "Semua Destinasi Pilihan", included: true },
                        { text: "Mobil Pribadi + Driver", included: true },
                        { text: "Makan di Resto Premium", included: true },
                        { text: "Dokumentasi Foto & Video", included: true },
                        { text: "Pemandu Wisata Profesional", included: true },
                    ]
                }
            ];

            const testimonials = [
                {
                    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
                    name: 'Andi Pratama',
                    origin: 'Wisatawan dari Jakarta',
                    quote: '"Perjalanan yang luar biasa! Paketnya sangat terorganisir, pemandunya ramah, dan makanannya enak-enak. Sidoarjo ternyata punya banyak hal menarik!"',
                },
                {
                    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
                    name: 'Rina Sugiarti',
                    origin: 'Wisatawan dari Bandung',
                    quote: '"Saya ambil paket Grup Seru bareng teman-teman kantor. Semuanya happy! Transportasinya nyaman dan destinasinya seru semua. Recommended banget!"',
                },
                {
                    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
                    name: 'Budi Santoso',
                    origin: 'Wisatawan dari Yogyakarta',
                    quote: '"Sebagai solo traveler, saya merasa aman dan nyaman. Bisa keliling Sidoarjo tanpa pusing mikirin rute. Kulinernya juara!"',
                }
            ];

            const packageDetails = {
                hemat: {
                    name: "Jelajah Hemat",
                    price: "Rp 250.000",
                    image: "../assets/paket-hemat.jpg",
                    description: "Cocok untuk solo traveler dengan budget terbatas. Jelajahi ikon Sidoarjo dengan lincah dan nikmati kuliner otentik.",
                    highlights: [
                        "Mengunjungi Candi Pari yang bersejarah.",
                        "Makan siang Lontong Kupang legendaris.",
                        "Singgah di pusat oleh-oleh khas Sidoarjo."
                    ],
                    features: [
                        { text: "2 Destinasi Wisata", included: true },
                        { text: "Transportasi Motor", included: true },
                        { text: "Makan Siang Khas", included: true },
                        { text: "Dokumentasi Foto", included: false },
                        { text: "Pemandu Wisata", included: false },
                    ]
                },
                populer: {
                    name: "Petualang Populer",
                    price: "Rp 450.000",
                    image: "../assets/paket-populer.jpg",
                    description: "Pilihan seimbang untuk kenyamanan dan harga. Ideal untuk pasangan atau grup kecil yang ingin lebih banyak eksplorasi.",
                    highlights: [
                        "Menyaksikan fenomena Lumpur Lapindo dari dekat.",
                        "Belajar sejarah di Museum Mpu Tantular.",
                        "Wisata belanja di Desa Kerajinan Kulit Tanggulangin.",
                        "Menikmati senja di Pesisir Timur Sidoarjo."
                    ],
                    features: [
                        { text: "4 Destinasi Wisata", included: true },
                        { text: "Transportasi Mobil (AC)", included: true },
                        { text: "Makan Siang & Snack", included: true },
                        { text: "Dokumentasi Foto", included: true },
                        { text: "Pemandu Wisata", included: false },
                    ]
                },
                grup: {
                    name: "Grup Seru",
                    price: "Rp 650.000",
                    image: "../assets/paket-grup.jpg",
                    description: "Ajak keluarga atau sahabat untuk petualangan seru tanpa repot dengan fasilitas lengkap untuk rombongan.",
                    highlights: [
                        "Petualangan di Wisata Bahari Tlocor.",
                        "Mengunjungi Candi Pari dan Candi Sumur.",
                        "Workshop singkat membuat batik khas Sidoarjo.",
                        "Makan malam hidangan laut segar di resto ternama.",
                        "Berburu oleh-oleh bandeng dan udang."
                    ],
                    features: [
                        { text: "5 Destinasi Wisata", included: true },
                        { text: "Transportasi Mini Bus", included: true },
                        { text: "Makan & Snack 2x", included: true },
                        { text: "Dokumentasi Foto", included: true },
                        { text: "Pemandu Wisata", included: true },
                    ]
                },
                sultan: {
                    name: "Sultan Sidoarjo",
                    price: "Rp 950.000",
                    image: "../assets/paket-sultan.jpg",
                    description: "Pengalaman wisata paling eksklusif dan personal. Bebas pilih destinasi, nikmati fasilitas premium, dan layanan terbaik.",
                    highlights: [
                        "Tur privat ke semua Candi di Sidoarjo.",
                        "Makan siang di Restoran Apung premium.",
                        "Kunjungan eksklusif ke pusat kerajinan tangan.",
                        "Sesi foto profesional di lokasi-lokasi terbaik.",
                        "Bebas menentukan destinasi tambahan sesuai keinginan."
                    ],
                    features: [
                        { text: "Semua Destinasi Pilihan", included: true },
                        { text: "Mobil Pribadi + Driver", included: true },
                        { text: "Makan di Resto Premium", included: true },
                        { text: "Dokumentasi Foto & Video", included: true },
                        { text: "Pemandu Wisata Profesional", included: true },
                    ]
                }
            };
            
            const destinationGrid = document.getElementById('top-destinasi-grid');
            if (destinationGrid) {
                destinationGrid.innerHTML = topDestinations.map(dest => `
                    <a href="#" class="relative rounded-lg overflow-hidden group aspect-[4/5]">
                        <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300"></div>
                        <div class="absolute bottom-0 left-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 class="text-white text-lg font-bold">${dest.name}</h3>
                        </div>
                    </a>
                `).join('');
            }
            
            const packageGrid = document.getElementById('paket-wisata-grid');
            if (packageGrid) {
                packageGrid.innerHTML = tourPackages.map(pkg => {
                    const featureList = pkg.features.map(feature => `
                        <li class="flex items-center">
                            <i class="fa-solid ${feature.included ? 'fa-check text-primary' : 'fa-xmark text-slate-400'} mr-3"></i> 
                            ${feature.text}
                        </li>
                    `).join('');


                    return `
                        <div class="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary-dark transition-transform hover:scale-105 duration-300 h-full flex flex-col fade-in-up">
                            <h3 class="text-2xl font-bold text-slate-800 mb-2">${pkg.name}</h3>
                            <p class="text-slate-400 text-sm line-through">Harga Normal ${pkg.normalPrice}</p>
                            <p class="text-5xl font-bold text-slate-900 my-4">Rp ${pkg.price}<span class="text-3xl">${pkg.priceSuffix}</span></p>
                            <p class="text-slate-500 font-medium mb-8">/orang</p>
                            <ul class="space-y-4 text-left text-slate-600 flex-grow">
                                ${featureList}
                            </ul>
                            <button data-package-id="${pkg.id}" class="w-full text-center mt-10 py-3 px-6 rounded-lg font-semibold border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white transition">
                                Pilih Paket Ini
                            </button>
                        </div>
                    `;
                }).join('');
            }

            const testimonialGrid = document.getElementById('testimoni-grid');
            if (testimonialGrid) {
                testimonialGrid.innerHTML = testimonials.map(t => {
                    return `
                        <div class="relative bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 fade-in-up hover:shadow-2xl hover:-translate-y-2">
                            <div class="relative z-10 flex flex-col h-full">
                                <div class="flex items-center gap-4 mb-6">
                                    <img src="${t.avatar}" alt="${t.name}" class="w-16 h-16 rounded-full object-cover ring-2 ring-primary">
                                    <div class="text-left">
                                        <h4 class="font-bold text-slate-800 text-lg">${t.name}</h4>
                                        <p class="text-sm text-slate-500">${t.origin}</p>
                                    </div>
                                </div>
                                <p class="text-slate-600 italic text-left flex-grow">${t.quote}</p>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            const navbar = document.getElementById('navbar');
            const hamburgerButton = document.getElementById('hamburger-button');
            const mobileNav = document.getElementById('mobile-nav');
            const mobileNavPanel = document.getElementById('mobile-nav-panel');
            const closeMobileNav = document.getElementById('close-mobile-nav');
            
            const modal = document.getElementById('package-modal');
            const modalPanel = document.getElementById('modal-panel');
            const modalTitle = document.getElementById('modal-title');
            const modalPrice = document.getElementById('modal-price');
            const modalDescription = document.getElementById('modal-description');
            const modalHighlights = document.getElementById('modal-highlights');
            const modalFeatures = document.getElementById('modal-features');
            const modalImage = document.getElementById('modal-image');
            const closeModalBtn = document.getElementById('modal-close-btn');

            window.addEventListener('scroll', () => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            });
            
            const openMobileMenu = () => {
                mobileNav.classList.remove('opacity-0', 'pointer-events-none');
                mobileNavPanel.classList.remove('translate-x-full');
            };

            const closeMobileMenu = () => {
                mobileNav.classList.add('opacity-0', 'pointer-events-none');
                mobileNavPanel.classList.add('translate-x-full');
            };

            hamburgerButton.addEventListener('click', openMobileMenu);
            closeMobileNav.addEventListener('click', closeMobileMenu);
            mobileNav.addEventListener('click', (e) => {
                if (e.target === mobileNav) closeMobileMenu();
            });
            
            const openModal = (packageId) => {
                const data = packageDetails[packageId];
                if (!data) return;

                modalTitle.textContent = data.name;
                modalPrice.textContent = data.price;
                modalDescription.textContent = data.description;
                modalImage.src = data.image;
                modalImage.alt = data.name;

                modalHighlights.innerHTML = data.highlights.map(item => `
                    <li class="flex items-start">
                        <i class="fa-solid fa-location-dot text-primary mr-3 mt-1 text-lg"></i>
                        <span class="text-slate-700">${item}</span>
                    </li>
                `).join('');
                
                modalFeatures.innerHTML = data.features.map(feature => `
                    <li class="flex items-center">
                        <i class="fa-solid ${feature.included ? 'fa-check text-primary' : 'fa-xmark text-slate-400'} mr-3 text-lg"></i>
                        <span class="text-slate-700">${feature.text}</span>
                    </li>
                `).join('');

                modal.classList.remove('modal-hidden');
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modalPanel.classList.remove('scale-95', 'opacity-0');
                }, 10);
            };

            const closeModal = () => {
                modal.classList.add('opacity-0');
                modalPanel.classList.add('scale-95', 'opacity-0');
                document.body.style.overflow = 'auto';
                setTimeout(() => {
                    modal.classList.add('modal-hidden');
                }, 300);
            };

            document.querySelectorAll('button[data-package-id]').forEach(button => {
                button.addEventListener('click', () => {
                    openModal(button.dataset.packageId);
                });
            });

            closeModalBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => { 
                    if (entry.isIntersecting) { 
                        entry.target.classList.add('is-visible'); 
                        observer.unobserve(entry.target); 
                    } 
                });
            }, { 
                threshold: 0.1 
            });
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        });