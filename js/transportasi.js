document.addEventListener('DOMContentLoaded', () => {
    const transportationData = [
        {
            id: 'trans-sidoarjo',
            name: 'Trans Sidoarjo (Bus)',
            category: ['terminal', 'stasiun'],
            image: 'https://placehold.co/800x500/134686/FFFFFF/png?text=Trans+Sidoarjo',
            description: 'Layanan bus rapid transit (BRT) andalan yang menghubungkan titik-titik vital di Sidoarjo dan sekitarnya. Nyaman, ber-AC, dan memiliki jadwal yang teratur.',
            routes: [
                'Koridor 1: Terminal Purabaya - Terminal Larangan - Pusat Kota.',
                'Koridor 2: Porong - Candi - Sidoarjo Kota.',
            ],
            app: {
                name: 'Sidoarjo KITA',
                logo: 'https://placehold.co/100x100/eeeeee/333333/png?text=App',
                appStoreUrl: '#',
                googlePlayUrl: '#',
            },
            social: {
                instagramUrl: '#',
            }
        },
        {
            id: 'angkutan-kota',
            name: 'Angkutan Kota (Lyn)',
            category: ['terminal', 'stasiun'],
            image: 'https://placehold.co/800x500/F5AD18/333333/png?text=Angkutan+Kota',
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
            image: 'https://placehold.co/800x500/4a5568/FFFFFF/png?text=Bus+DAMRI',
            description: 'Solusi transportasi langsung dari dan menuju Bandara Internasional Juanda. Bus eksekutif yang nyaman dengan ruang bagasi yang luas.',
            routes: [
                'Rute Utama: Bandara Juanda T1 & T2 - Terminal Purabaya (Bungurasih).',
            ],
            app: {
                name: 'DAMRI Apps',
                logo: 'https://placehold.co/100x100/eeeeee/333333/png?text=App',
                appStoreUrl: '#',
                googlePlayUrl: '#',
            },
            social: {
                instagramUrl: '#',
            }
        },
        {
            id: 'commuter-line',
            name: 'Commuter Line (Kereta Api)',
            category: ['stasiun'],
            image: 'https://placehold.co/800x500/d53f8c/FFFFFF/png?text=Commuter+Line',
            description: 'Layanan kereta api komuter yang menghubungkan Sidoarjo dengan kota-kota sekitarnya seperti Surabaya, Mojokerto, dan Pasuruan. Cepat dan bebas macet.',
            routes: [
                'Relasi: Surabaya Kota - Sidoarjo - Bangil - Pasuruan.',
                'Relasi: Sidoarjo - Mojokerto.',
            ],
            app: {
                name: 'KAI Access',
                logo: 'https://placehold.co/100x100/eeeeee/333333/png?text=App',
                appStoreUrl: '#',
                googlePlayUrl: '#',
            },
            social: {
                instagramUrl: '#',
            }
        },
    ];

    const listContainer = document.getElementById('transportation-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

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

            const appHtml = transport.app ? `
                <div class="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-4">
                    <img src="${transport.app.logo}" alt="${transport.app.name} Logo" class="h-16 w-16 rounded-lg bg-slate-200">
                    <div class="text-center sm:text-left">
                        <p class="font-bold text-slate-800">Cek Jadwal di Aplikasi ${transport.app.name}</p>
                        <div class="flex items-center justify-center sm:justify-start gap-3 mt-2">
                            <a href="${transport.app.appStoreUrl}" class="text-slate-500 hover:text-primary transition"><i class="fa-brands fa-apple mr-1"></i> App Store</a>
                            <span class="text-slate-300">|</span>
                            <a href="${transport.app.googlePlayUrl}" class="text-slate-500 hover:text-primary transition"><i class="fa-brands fa-google-play mr-1"></i> Google Play</a>
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

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.dataset.filter;
            renderTransportations(filterValue);
        });
    });

    renderTransportations('all');
});