document.addEventListener('DOMContentLoaded', () => {
    // Data Hotel Sidoarjo: 5 data real + 15 data dummy unik
    const hotels = [
        // --- 5 DATA REAL (sesuai detailHotel.js) ---
        { 
            id: "aston-sidoarjo-city-hotel-&-conference-center",
            name: "Aston Sidoarjo City Hotel & Conference Center", 
            lokasi: "Jl. Kahuripan Raya No.14, Buduran, Sidoarjo", 
            rating: 4.8, 
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
            description: "Hotel bintang 4 dengan fasilitas lengkap: kolam renang, restoran, dan ruang konferensi modern. Dekat dengan pusat perbelanjaan Sidoarjo.",
        },
        { 
            id: "the-sun-h0tel-sidoarjo",
            name: "The Sun Hotel Sidoarjo", 
            lokasi: "Jl. Pahlawan No.1, Sidokumpul, Sidoarjo", 
            rating: 4.2, 
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
            description: "Akomodasi yang nyaman di pusat kota Sidoarjo. Fasilitas kolam renang outdoor, taman, dan akses mudah ke alun-alun.",
        },
        { 
            id: "hotel-luminor-sidoarjo",
            name: "Hotel Luminor Sidoarjo", 
            lokasi: "Jl. Pahlawan, Lemahputro, Sidoarjo", 
            rating: 4.6, 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
            description: "Hotel modern strategis, ideal untuk bisnis dan liburan. Dekat dengan Stadion Gelora Delta dan pusat kuliner.",
        },
        { 
            id: "hotel-neo+-waru-sidoarjo",
            name: "Hotel Neo+ Waru - Sidoarjo", 
            lokasi: "Jl. Jenderal S. Parman No.52 - 54, Waru, Sidoarjo", 
            rating: 4.7, 
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
            description: "Hotel bergaya minimalis di lokasi premium, dekat Bandara Juanda. Pilihan terbaik untuk pelancong transit dan bisnis.",
        },
        { 
            id: "favehotel-sidoarjo",
            name: "Favehotel Sidoarjo", 
            lokasi: "Jl. Jenggolo No.15, Pucang, Sidoarjo", 
            rating: 4.7, 
            image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&auto=format&fit=crop",
            description: "Budget hotel yang *stylish* dan *fun*. Menawarkan kamar bersih, WiFi cepat, dan restoran dengan menu yang bervariasi.",
        },
        
        // --- 15 DATA DUMMY SIDOARJO (RELEVAN & UNIK) ---
        { 
            id: "suncity-hotel-sidoarjo",
            name: "Suncity Residence Hotel Sidoarjo", 
            lokasi: "Jl. Pahlawan No. 1, Sidoarjo (Kompleks Suncity Mall)", 
            rating: 4.4, 
            image: "https://images.unsplash.com/photo-1594247514332-9c9883626e2a?w=800&auto=format&fit=crop",
            description: "Terintegrasi dengan mal dan *waterpark*. Sangat cocok untuk liburan keluarga dengan banyak pilihan hiburan.",
        },
        { 
            id: "swiss-belinn-airport-surabaya",
            name: "Swiss-Belinn Airport Surabaya (Sidoarjo)", 
            lokasi: "Jl. Raya Bandara Juanda No. 90, Sedati, Sidoarjo", 
            rating: 4.5, 
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
            description: "Hotel transit bandara dengan layanan antar-jemput gratis. Kenyamanan maksimal sebelum atau sesudah penerbangan.",
        },
        { 
            id: "ibis-budget-surabaya-airport",
            name: "Ibis Budget Surabaya Airport (Sidoarjo)", 
            lokasi: "Jl. Raya Bandara Juanda, Sedati, Sidoarjo", 
            rating: 4.1, 
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
            description: "Pilihan *smart-saver* untuk transit bandara. Kamar kompak, bersih, dan fungsional dengan harga yang ekonomis.",
        },
        { 
            id: "hotel-utami-sby-sidoarjo",
            name: "Hotel Utami Sidoarjo", 
            lokasi: "Jl. Raya By Pass Juanda No. 11, Waru, Sidoarjo", 
            rating: 4.0, 
            image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&auto=format&fit=crop",
            description: "Hotel yang menawarkan suasana asri dengan taman dan kolam renang yang luas. Cocok untuk acara keluarga dan rapat.",
        },
        { 
            id: "delta-homestay-sidoarjo",
            name: "Delta Homestay Sidoarjo", 
            lokasi: "Jl. Raya Lingkar Timur No. 1, Candi, Sidoarjo", 
            rating: 3.9, 
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop",
            description: "Penginapan yang *cozy* dan terjangkau. Lokasi strategis dekat kawasan industri dan akses tol Sidoarjo.",
        },
        { 
            id: "premier-inn-airport-sidoarjo",
            name: "Premier Inn Airport Sidoarjo", 
            lokasi: "Jl. Juanda Raya No. 1, Sedati, Sidoarjo", 
            rating: 4.6, 
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
            description: "Hotel internasional dengan fokus pada kualitas tidur premium. Dekat pintu masuk Bandara Juanda dan area Waru.",
        },
        { 
            id: "whiz-prime-sidoarjo-kota",
            name: "Whiz Prime Hotel Sidoarjo", 
            lokasi: "Jl. KH. Mukmin No. 22, Sidoarjo", 
            rating: 4.5, 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
            description: "Hotel di jantung kota dengan akses mudah ke perbankan dan pusat pemerintahan. Kamar modern dan bersih.",
        },
        { 
            id: "reddoorz-dekat-glora-delta",
            name: "RedDoorz near Gelora Delta Sidoarjo", 
            lokasi: "Jl. Stadion No. 5, Pagerwojo, Sidoarjo", 
            rating: 3.8, 
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop",
            description: "Akomodasi budget yang bersih dan terpercaya. Lokasi dekat kompleks olahraga Gelora Delta.",
        },
        { 
            id: "aria-gading-hotel-sidoarjo",
            name: "Aria Gading Hotel Sidoarjo", 
            lokasi: "Jl. Raya Waru No. 18, Waru, Sidoarjo", 
            rating: 4.3, 
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop",
            description: "Hotel yang fokus pada keramahan dan pelayanan. Pilihan populer untuk kegiatan rapat dan seminar di area Waru.",
        },
        { 
            id: "biz-hotel-airport-sidoarjo",
            name: "Biz Hotel Airport Sidoarjo", 
            lokasi: "Jl. Raya Sedati No. 88, Sedati, Sidoarjo", 
            rating: 4.0, 
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
            description: "Hotel fungsional dengan desain modern minimalis. Pilihan cepat dan efisien untuk kebutuhan transit.",
        },
        { 
            id: "pop-hotel-airport-sidoarjo",
            name: "POP! Hotel Airport Sidoarjo", 
            lokasi: "Jl. Raya Juanda No. 7, Sedati, Sidoarjo", 
            rating: 3.5, 
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
            description: "Hotel budget dengan konsep warna cerah dan tempat tidur nyaman. Pilihan praktis untuk *backpacker* atau *solo traveler*.",
        },
        { 
            id: "grand-pahlawan-sidoarjo",
            name: "Grand Pahlawan Hotel Sidoarjo", 
            lokasi: "Jl. Pahlawan No. 5, Sidoarjo", 
            rating: 4.4, 
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
            description: "Hotel klasik di jantung kota, menawarkan pengalaman menginap dengan nuansa tradisional Jawa Timur yang kental.",
        },
        { 
            id: "safin-hotel-sidoarjo",
            name: "Safin Hotel Sidoarjo", 
            lokasi: "Jl. Raya Taman Pinang Indah No. 1, Sidoarjo", 
            rating: 4.3, 
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
            description: "Hotel dengan konsep minimalis-tropis, menyediakan lingkungan yang tenang dan fasilitas kolam renang untuk relaksasi.",
        },
        { 
            id: "artotel-sidoarjo-gading",
            name: "ARTOTEL Sidoarjo", 
            lokasi: "Jl. Gading Fajar No. 15, Buduran, Sidoarjo", 
            rating: 4.7, 
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
            description: "Hotel butik artistik dengan desain interior unik. Menarik bagi tamu yang mencari pengalaman menginap yang berbeda.",
        },
        { 
            id: "namira-syariah-sidoarjo",
            name: "Namira Syariah Hotel Sidoarjo", 
            lokasi: "Jl. Raya Wonokoyo No. 1, Buduran, Sidoarjo", 
            rating: 4.2, 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
            description: "Hotel dengan konsep syariah yang nyaman dan tenang. Menjaga privasi tamu dengan fasilitas dan pelayanan yang baik.",
        },
    ];

    let currentPage = 1;
    const itemsPerPage = 8;
    const gridContainer = document.getElementById('hotels-grid');
    const paginationContainer = document.getElementById('pagination');
    const ratingFilter = document.getElementById('rating-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function renderContent() {
        const searchTerm = searchInput.value.toLowerCase();
        const ratingSort = ratingFilter.value;
        
        let filtered = hotels.filter(h =>
            h.name.toLowerCase().includes(searchTerm) ||
            h.lokasi.toLowerCase().includes(searchTerm)
        );

        // Sorting by Rating
        if (ratingSort === 'high') {
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (ratingSort === 'low') {
            filtered.sort((a, b) => a.rating - b.rating);
        }
        
        // Cek jika tidak ada hasil
        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div class="col-span-full text-center text-slate-500 py-20">
                    <div class="flex justify-center mb-6">
                        <div class="bg-slate-100 rounded-full p-8">
                            <i class="fa-solid fa-hotel text-6xl text-slate-300"></i>
                        </div>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 text-slate-700">Oops! Tidak ada hasil ditemukan</h3>
                    <p class="text-lg text-slate-500 mb-6">Coba gunakan kata kunci yang berbeda.</p>
                    <button onclick="document.getElementById('search-input').value=''; document.getElementById('search-input').dispatchEvent(new Event('input'));" class="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                        Reset Pencarian
                    </button>
                </div>`;
            paginationContainer.innerHTML = '';
            return;
        }

        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        
        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedItems = filtered.slice(start, start + itemsPerPage);

        // Render Hotel Grid
        gridContainer.innerHTML = paginatedItems.map((item, index) => {
            const fullStars = Math.floor(item.rating);
            const hasHalfStar = item.rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            
            let starsHTML = '';
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fa-solid fa-star rating-star"></i>';
            }
            if (hasHalfStar) {
                starsHTML += '<i class="fa-solid fa-star-half-stroke rating-star"></i>';
            }
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="fa-regular fa-star rating-star"></i>';
            }
            
            const detailId = item.id || encodeURIComponent(item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, ''));

            return `
                <a href="detailHotel.html?id=${detailId}" class="block">
                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 border-4 border-white flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="p-5 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 class="text-xl font-bold text-slate-800 mb-2 line-clamp-2">${item.name}</h3>
                                <div class="flex items-center gap-2 text-slate-600 mb-2">
                                    <i class="fa-solid fa-location-dot text-primary"></i>
                                    <span class="text-sm line-clamp-1">${item.lokasi}</span>
                                </div>
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="flex items-center gap-1 text-primary text-sm">
                                        ${starsHTML}
                                    </div>
                                    <span class="text-slate-600 text-sm font-semibold">${item.rating}</span>
                                </div>
                                <p class="text-slate-600 text-sm mb-4 line-clamp-2">${item.description}</p>
                            </div>
                            <button class="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg mt-auto w-full">
                                Lihat Detail
                            </button>
                        </div>
                    </div>
                </a>
            `
        }).join('');

        // Render Pagination
        let paginationHTML = '';
        if (totalPages > 1) {
            paginationHTML += `
                <button data-page="${currentPage - 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white hover:bg-slate-100 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>`;
            
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    paginationHTML += `
                        <button data-page="${i}" class="pagination-button h-11 w-11 rounded-xl font-bold transition-all shadow-md hover:shadow-lg ${i === currentPage ? 'bg-primary text-white scale-110' : 'bg-white text-slate-700 hover:bg-slate-100'}">
                            ${i}
                        </button>`;
                } else if (i === currentPage - 2 || i === currentPage + 2) {
                    if (i === currentPage - 2 && currentPage > 3) {
                         paginationHTML += `<span class="text-slate-400 px-2">...</span>`;
                    }
                    if (i === currentPage + 2 && currentPage < totalPages - 2) {
                         paginationHTML += `<span class="text-slate-400 px-2">...</span>`;
                    }
                }
            }
            
            paginationHTML += `
                <button data-page="${currentPage + 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white hover:bg-slate-100 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === totalPages ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>`;
        }
        paginationContainer.innerHTML = paginationHTML;
        
        // Tambahkan event listener untuk tombol pagination
        document.querySelectorAll('.pagination-button, .pagination-arrow').forEach(button => {
            button.addEventListener('click', (e) => {
                const page = parseInt(e.currentTarget.dataset.page);
                if (!isNaN(page) && page >= 1 && page <= totalPages) {
                    currentPage = page;
                    renderContent();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }

    function handleSearch() {
        currentPage = 1;
        renderContent();
    }

    // Event Listeners
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    ratingFilter.addEventListener('change', handleSearch);

    // Initial render
    renderContent();
});