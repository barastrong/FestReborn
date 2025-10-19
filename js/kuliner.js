        document.addEventListener('DOMContentLoaded', () => {
            const kuliner = [
                { name: "Sentra Kuliner G-Walk", category: "Rumah Makan", image: "https://cdn.antaranews.com/cache/1200x800/2021/07/20/SWK-surabaya_1.jpeg", rating: 4.5 },
                { name: "Depot Bu Rudy", category: "Makanan", image: "https://media.suara.com/pictures/653x366/2022/09/12/13514-depot-bu-rudy.jpg", rating: 4.8 },
                { name: "Soto Cak Har", category: "Makanan", image: "https://img.inews.co.id/media/822/files/inews_new/2020/12/10/soto.jpg", rating: 3.4 },
                { name: "Es Krim Zangrandi", category: "Minuman", image: "https://www.surabayatravel.com/wp-content/uploads/2018/07/Es-Krim-Zangrandi.jpg", rating: 4.9 },
                { name: "Bakso Lapangan Tembak", category: "Makanan", image: "https://www.surabayatravel.com/wp-content/uploads/2019/09/Bakso-Lapangan-Tembak.jpg", rating: 4.6 },
                { name: "Lontong Balap Pak Gendut", category: "Makanan", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Lontong_Balap.jpg", rating: 4.4 },
                { name: "Rujak Cingur Ahmad Jais", category: "Makanan", image: "https://cdn.popmama.com/content-images/post/20210614/rujak-cingur-ahmad-jais-surabaya-5-9771e9a0b192579891310a477d5d1b0d.jpg", rating: 4.7 },
                { name: "Tahu Tek Pak Jayen", category: "Makanan", image: "https://cdn.popmama.com/content-images/post/20210614/tahu-tek-pak-jayen-9771e9a0b192579891310a477d5d1b0d.jpg", rating: 4.5 },
                { name: "Sate Klopo Ondomohen", category: "Makanan", image: "https://img.inews.co.id/media/822/files/inews_new/2019/06/15/sate_klopo.jpg", rating: 4.8 },
                { name: "Pecel Semanggi", category: "Makanan", image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Pecel_Semanggi.JPG", rating: 4.3 },
                { name: "Lumpia Semarang", category: "Makanan", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Lumpia_Semarang.JPG", rating: 4.6 },
                { name: "Roti Bakar 88", category: "Minuman", image: "https://cdn.idntimes.com/content-images/post/20190705/roti-bakar-88-surabaya-0f4f07f4f6aaeddd3f021bdb22f2caa1.jpg", rating: 4.5 },
                { name: "Kopi Kapal Api", category: "Kopi", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", rating: 4.2 },
                { name: "Starbucks Surabaya", category: "Kopi", image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800", rating: 4.4 }
            ];

            let currentPage = 1;
            const itemsPerPage = 12;

            const gridContainer = document.getElementById('destinations-grid');
            const paginationContainer = document.getElementById('pagination');
            const categoryFilter = document.getElementById('category-filter');
            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');

            function populateCategories() {
                const categories = [...new Set(kuliner.map(d => d.category))].sort();
                categories.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category;
                    categoryFilter.appendChild(option);
                });
            }

            function renderContent() {
                const selectedCategory = categoryFilter.value;
                const searchTerm = searchInput.value.toLowerCase();

                const filtered = kuliner.filter(d =>
                    (selectedCategory === 'All' || d.category === selectedCategory) &&
                    d.name.toLowerCase().includes(searchTerm)
                );

                if (filtered.length === 0) {
                    gridContainer.innerHTML = `
                        <div class="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center text-slate-500 py-20">
                            <div class="flex justify-center mb-6">
                                <div class="bg-slate-100 rounded-full p-8">
                                    <i class="fa-solid fa-utensils text-6xl text-slate-300"></i>
                                </div>
                            </div>
                            <h3 class="text-3xl font-bold mb-3 text-slate-700">Oops! Tidak ada hasil ditemukan</h3>
                            <p class="text-lg text-slate-500 mb-6">Coba gunakan kata kunci atau filter kategori yang berbeda.</p>
                            <button onclick="document.getElementById('search-input').value=''; document.getElementById('category-filter').value='All'; document.getElementById('search-input').dispatchEvent(new Event('input'));" class="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                                Reset Pencarian
                            </button>
                        </div>`;
                    paginationContainer.innerHTML = '';
                    return;
                }

                const totalPages = Math.ceil(filtered.length / itemsPerPage);
                const start = (currentPage - 1) * itemsPerPage;
                const paginatedItems = filtered.slice(start, start + itemsPerPage);

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
                    
                    return `
                    <a href="#" class="block card-hover" style="animation-delay: ${index * 0.05}s;">
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 h-full border-4 border-white">
                            <div class="relative h-48 overflow-hidden">
                                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500">
                                <div class="absolute top-3 right-3">
                                    <span class="bg-white/95 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        <i class="fa-solid fa-tag mr-1"></i>${item.category}
                                    </span>
                                </div>
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-bold text-slate-800 mb-3 line-clamp-1">${item.name}</h3>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-1">
                                        <div class="flex items-center gap-1 text-primary text-sm">
                                            ${starsHTML}
                                        </div>
                                        <span class="text-slate-600 text-xs font-semibold ml-1">${item.rating}</span>
                                    </div>
                                    <span class="text-primary-dark font-semibold text-sm group">
                                        <span class="group-hover:mr-2 transition-all">Lihat Detail</span>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                `}).join('');

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
                            paginationHTML += `<span class="text-slate-400 px-2">...</span>`;
                        }
                    }
                    
                    paginationHTML += `
                        <button data-page="${currentPage + 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white hover:bg-slate-100 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === totalPages ? 'disabled' : ''}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>`;
                }
                paginationContainer.innerHTML = paginationHTML;

                document.querySelectorAll('.pagination-button, .pagination-arrow').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const page = parseInt(e.currentTarget.dataset.page);
                        if (!isNaN(page)) {
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

            searchInput.addEventListener('input', handleSearch);
            searchButton.addEventListener('click', handleSearch);
            categoryFilter.addEventListener('change', handleSearch);
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });

            populateCategories();
            renderContent();
        });