document.addEventListener('DOMContentLoaded', () => {
    // Bagian menu mobile (tidak ada perubahan)
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
    
    // Data transportasi (lengkap)
    const transportationData = [
        {
            id: 'trans-jatim',
            name: 'Trans Jatim (Bus)',
            category: ['terminal', 'stasiun'],
            image: 'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2022/08/bus-trans-jatim.jpg',
            description: 'Layanan bus rapid transit (BRT) andalan yang menghubungkan titik-titik vital di Sidoarjo dan sekitarnya. Nyaman, ber-AC, dan memiliki jadwal yang teratur.',
            routes: [
                'Koridor 1: Terminal Purabaya - Terminal Larangan - Pusat Kota.',
                'Koridor 2: Porong - Candi - Sidoarjo Kota.',
            ],
            app: {
                name: 'TransJatim',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy3V8zmhfh0KBo-LlOZg7yXkczqNmZFf5pg&s',
                appStoreUrl: 'https://apps.apple.com/id/app/transjatim-ajaib/id1636460400',
                googlePlayUrl: 'https://play.google.com/store/apps/details?id=ngi.muchi.jatimajaib&pcampaignid=web_share',
            },
            social: {
                instagramUrl: 'https://www.instagram.com/officialtransjatim?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            }
        },
        {
            id: 'angkutan-kota',
            name: 'Angkutan Kota',
            category: ['terminal', 'stasiun'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX7S70yb-MyF9B62SiTPFhaKx-u0l8cGpJA&s',
            description: 'Transportasi fleksibel dengan rute yang menjangkau hingga ke area perumahan dan jalan-jalan sekunder. Pilihan ekonomis untuk perjalanan jarak pendek.',
            routes: [
                'Rute H: Sidoarjo - Krian.',
                'Rute F: Terminal Larangan - Pasar Porong.',
                'Rute G: Sidoarjo - Tulangan.'
            ],
            app: null,
            social: null,
        },
        {
            id: 'damri-bandara',
            name: 'Bus DAMRI Bandara',
            category: ['bandara', 'terminal'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lP0vkDGNBLqGj9i8Ed3O0SIlN-p7eg89Zw&s',
            description: 'Solusi transportasi langsung dari dan menuju Bandara Internasional Juanda. Bus eksekutif yang nyaman dengan ruang bagasi yang luas.',
            routes: [
                'Rute Utama: Bandara Juanda T1 & T2 - Terminal Purabaya (Bungurasih).',
            ],
            app: {
                name: 'DAMRI Apps',
                logo: 'https://www.mceasy.com/wp-content/uploads/2024/06/logo-damri.webp',
                appStoreUrl: 'https://apps.apple.com/id/app/damri-apps/id6443452294?l=id',
                googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.simadamri.damriapps&pcampaignid=web_share',
            },
            social: {
                instagramUrl: 'https://www.instagram.com/damriindonesia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            }
        },
        {
            id: 'commuter-line',
            name: 'Commuter Line (Kereta Api)',
            category: ['stasiun'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOf3zZM2PYX07k0X_eMu7vM4j39Q3pTnxew&s',
            description: 'Layanan kereta api komuter yang menghubungkan Sidoarjo dengan kota-kota sekitarnya seperti Surabaya, Mojokerto, dan Pasuruan. Cepat dan bebas macet.',
            routes: [
                'Relasi: Surabaya Kota - Sidoarjo - Bangil - Pasuruan.',
                'Relasi: Sidoarjo - Mojokerto.',
            ],
            app: {
                name: 'KAI Access',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEeFqJgmFPTgyor3VNo6bqYBwHD1gBGhzJw&s',
                appStoreUrl: '#',
                googlePlayUrl: '#',
            },
            social: {
                instagramUrl: 'https://www.instagram.com/commuterline?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            }
        },
    ]; 

    const listContainer = document.getElementById('transportation-list');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Intersection Observer untuk animasi
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    });
    const fadeUpElements = document.querySelectorAll('.fade-in-up');
    fadeUpElements.forEach(el => observer.observe(el));
    
    // Fungsi render
    const renderTransportations = (filter = 'all') => {
        if (!listContainer) return;

        const filteredData = transportationData.filter(item => {
            if (filter === 'all') return true;
            return item.category.includes(filter);
        });
        
        if (filteredData.length === 0) {
            listContainer.innerHTML = `<div class="bg-white text-center p-10 rounded-2xl shadow-lg border border-slate-200">
                <i class="fa-solid fa-circle-exclamation text-4xl text-primary mb-4"></i>
                <h3 class="text-xl font-bold text-slate-700">Oops!</h3>
                <p class="text-slate-500 mt-2">Belum ada informasi transportasi untuk kategori ini.</p>
            </div>`;
            return;
        }

        listContainer.innerHTML = filteredData.map(transport => {
            const routesHtml = transport.routes.map(route => `
                <li class="flex items-start">
                    <i class="fa-solid fa-check-circle text-primary mt-1 mr-3"></i>
                    <span class="text-slate-600">${route}</span>
                </li>
            `).join('');

            // --- PERBAIKAN FINAL DI SINI ---
            const appHtml = transport.app ? `
                <div class="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-4">
                    <img src="${transport.app.logo}" alt="${transport.app.name} Logo" class="h-16 w-16 rounded-lg bg-slate-200">
                    <div class="text-center sm:text-left">
                        <p class="font-bold text-slate-800">Cek Jadwal di Aplikasi ${transport.app.name}</p>
                        <div class="flex items-center justify-center sm:justify-start gap-3 mt-2">
                            <a href="${transport.app.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="inline-block h-11">
                                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" class="h-full w-auto">
                            </a>
                            <a href="${transport.app.googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="inline-block h-16">
                                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" class="h-full w-auto">
                            </a>
                        </div>
                    </div>
                </div>
            ` : '';

            const socialHtml = transport.social ? `
                 <a href="${transport.social.instagramUrl}" class="text-slate-500 hover:text-primary transition-colors font-semibold mt-4 block">
                    <i class="fa-brands fa-instagram mr-2"></i> Info Selengkapnya
                </a>
            ` : '';

            return `
                <div class="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-5 gap-0">
                    <div class="md:col-span-2">
                        <img src="${transport.image}" alt="${transport.name}" class="w-full h-full object-cover min-h-[250px]">
                    </div>
                    <div class="md:col-span-3 p-6 sm:p-8">
                        <h2 class="text-2xl font-bold text-slate-800">${transport.name}</h2>
                        <p class="text-slate-600 mt-2 mb-6 leading-relaxed">${transport.description}</p>
                        
                        <h4 class="font-bold text-slate-700 mb-3">Rute Utama:</h4>
                        <ul class="space-y-2">
                            ${routesHtml}
                        </ul>
                        ${socialHtml}
                        ${appHtml}
                    </div>
                </div>
            `;
        }).join('');
    };

    // Event listener untuk filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.dataset.filter;
            renderTransportations(filterValue);
        });
    });

    // Render awal
    renderTransportations('all');
});