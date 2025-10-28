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

            const kuliner = [
                { id: 'pujasera-diponegoro', name: "Pujasera Diponegoro", category: "Pusat Jajanan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHd0roSnXUMaxRsgjVW99mHUhNgeDMfOjCw&s", rating: 4.1 },
                { id: 'kupang-lontong-pak-sumali', name: "Kupang Lontong Pak Sumali", category: "Makanan Khas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQvIqeoRJ9H8oXl0Svwj8WWGqqCaacrnB1g&s", rating: 4.8 },
                { id: 'rawon-gajah-mada', name: "Rawon Gajah Mada", category: "Makanan Khas", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/98/1d/44/ini-kiosnya.jpg?w=500&h=-1&s=1", rating: 4.7 },
                { id: 'tahu-campur-plaza-sidoarjo', name: "Tahu Campur Plaza Sidoarjo", category: "Makanan Khas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPF-V17aBxKdFB9sfADexExvQLnDYQMxmaA&s", rating: 4.5 },
                { id: 'warung-seafood-diponegoro', name: "Warung Seafood Diponegoro", category: "Seafood", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiX2LzgeLibvQSVKeQVU1_G0ZVrMEU4ZTMQ&s", rating: 4.6 },
                { id: 'warung-sate-komo-ibu-supi', name: "Warung Sate Komo Ibu Supi", category: "Sate", image: "https://cdn.ngopibareng.id/uploads/2024/2024-05-14/sop-sate-komo-sidoarjo-dagingnya-ukuran-jumbo-bikin-ketagihan--thumbnail-947.webp", rating: 4.8 },
                { id: 'warung-kikil-legenda-abah-atim', name: "Kikil Legenda Abah Atim", category: "Makanan Khas", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/684bd62f-fe66-4380-9c9a-c53b5d224c48_Go-Biz_20240701_081542.jpeg", rating: 4.9 },
                { id: 'es-dawet-jabung-bu-dermi', name: "Es Dawet Jabung Bu Dermi", category: "Minuman", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-lc9IIZ5KXSSgc-Jb5FPLQ8C7cV1aIfE0g&s", rating: 4.5 },
                { id: 'kopi-tepi-sawah', name: "Kopi Tepi Sawah", category: "Kafe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhQDsk8C66IKVLIt8OhnDjIqFGmsmDaWZ9A&s", rating: 4.4 },
                { id: 'depot-soto-daging-bu-tin', name: "Depot Soto Daging Bu Tin", category: "Soto", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/3cfa407f-19a4-4023-b1db-a293238ad3b7_Go-Biz_20220809_072533.jpeg", rating: 4.7 },
                { id: 'warung-es-campur-pak-de', name: "Warung Es Campur Pak De", category: "Minuman", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1QO5bXdybpIkEXpzE6yIn7MT0wsIh7auwg&s", rating: 4.6 },
                { id: 'kedai-susu-murni-mak-nyuss', name: "Kedai Susu Murni Mak Nyuss", category: "Minuman", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZX83Pi6UXbZt3RiuhFqhAHcIMs6thnPIrHQ&s", rating: 4.5 },
                { id: 'bandeng-asap-sidoarjo', name: "Bandeng Asap Sidoarjo", category: "Oleh-oleh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM7q5uR2mB-h4f2lq-Yc_UuV-t4Z4Z3O-lA&s", rating: 4.8 },
                { id: 'otak-otak-bandeng-bu-muzayanah', name: "Otak-Otak Bandeng Bu Muzayanah", category: "Oleh-oleh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY4G3R8a7v_fV-4Yk5e7B9X-i4G6O9K-bA&s", rating: 4.9 },
                { id: 'petis-udang-ny-siok', name: "Petis Udang Ny. Siok", category: "Oleh-oleh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T9R1E6G8J9I6V8Q8Y-4F2i2G0Z5T6V_rQ&s", rating: 4.7 }
            ];

            let currentPage = 1;
            const itemsPerPage = 12;
            let selectedCategory = 'All';

            const gridContainer = document.getElementById('kuliner-grid');
            const paginationContainer = document.getElementById('pagination');
            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');
            const categoryDropdownContainer = document.getElementById('category-dropdown-container');
            const categoryDropdownButton = document.getElementById('category-dropdown-button');
            const categoryDropdownMenu = document.getElementById('category-dropdown-menu');
            const selectedCategoryText = document.getElementById('selected-category-text');
            const categoryChevron = document.getElementById('category-chevron');

            const toggleDropdown = () => {
                const isHidden = categoryDropdownMenu.classList.contains('hidden');
                if (isHidden) {
                    categoryDropdownMenu.classList.remove('hidden');
                    setTimeout(() => {
                        categoryDropdownMenu.classList.remove('opacity-0', '-translate-y-2');
                        categoryChevron.classList.add('rotate-180');
                    }, 10);
                } else {
                    categoryDropdownMenu.classList.add('opacity-0', '-translate-y-2');
                    categoryChevron.classList.remove('rotate-180');
                    setTimeout(() => categoryDropdownMenu.classList.add('hidden'), 200);
                }
            };

            categoryDropdownButton.addEventListener('click', toggleDropdown);
            window.addEventListener('click', (e) => {
                if (!categoryDropdownContainer.contains(e.target) && !categoryDropdownMenu.classList.contains('hidden')) {
                    toggleDropdown();
                }
            });

            function createCategoryButton(categoryValue) {
                const displayName = categoryValue === 'All' ? 'Semua Kategori' : categoryValue;
                const button = document.createElement('button');
                button.textContent = displayName;
                button.dataset.category = categoryValue;
                button.className = 'w-full text-left px-4 py-2 rounded-md transition-colors text-slate-700 hover:bg-slate-100';
                button.addEventListener('click', () => {
                    selectedCategory = button.dataset.category;
                    selectedCategoryText.textContent = displayName;
                    handleSearch();
                    toggleDropdown();
                });
                return button;
            }

            function populateCategories() {
                const categories = ['All', ...new Set(kuliner.map(d => d.category))].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
                categoryDropdownMenu.innerHTML = '';
                categories.forEach(category => {
                    const button = createCategoryButton(category);
                    categoryDropdownMenu.appendChild(button);
                });
                selectedCategoryText.textContent = selectedCategory === 'All' ? 'Semua Kategori' : selectedCategory;
            }

            function renderContent() {
                const searchTerm = searchInput.value.toLowerCase();
                const filtered = kuliner.filter(d =>
                    (selectedCategory === 'All' || d.category === selectedCategory) &&
                    d.name.toLowerCase().includes(searchTerm)
                );

                if (filtered.length === 0) {
                    gridContainer.innerHTML = `
                        <div class="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center text-slate-500 py-16">
                            <i class="fa-solid fa-utensils text-7xl text-slate-300 mb-6"></i>
                            <h3 class="text-2xl font-bold mb-2 text-slate-700">Oops! Tidak ada hasil ditemukan</h3>
                            <p class="text-lg mb-6">Coba gunakan kata kunci atau filter kategori yang berbeda.</p>
                            <button id="reset-search-btn" class="bg-primary text-white font-semibold px-6 py-3 rounded-xl transition-all hover:bg-primary/90">Reset Pencarian</button>
                        </div>`;
                    document.getElementById('reset-search-btn').addEventListener('click', resetSearch);
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
                    let starsHTML = Array(fullStars).fill('<i class="fa-solid fa-star"></i>').join('') +
                                  (hasHalfStar ? '<i class="fa-solid fa-star-half-stroke"></i>' : '') +
                                  Array(emptyStars).fill('<i class="fa-regular fa-star"></i>').join('');

                    return `
                    <a href="detailKuliner.html?id=${item.id}" class="block group animate-fade-in" style="animation-delay: ${index * 0.05}s;">
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 h-full group-hover:-translate-y-2 group-hover:shadow-2xl">
                            <div class="relative h-48 overflow-hidden">
                                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                                <div class="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    <i class="fa-solid fa-tag mr-1"></i>${item.category}
                                </div>
                            </div>
                            <div class="p-4 flex flex-col h-[calc(100%-12rem)]">
                                <h3 class="text-lg font-bold text-slate-800 mb-2 line-clamp-1 flex-grow">${item.name}</h3>
                                <div class="flex items-center justify-between mt-auto">
                                    <div class="flex items-center gap-1 text-primary text-sm">${starsHTML}<span class="text-slate-600 text-xs font-semibold ml-1">${item.rating}</span></div>
                                    <span class="text-primary-dark font-semibold text-sm transition-colors group-hover:text-primary">Lihat Detail <i class="fa-solid fa-arrow-right text-xs"></i></span>
                                </div>
                            </div>
                        </div>
                    </a>`;
                }).join('');
                
                renderPagination(totalPages);
            }

            function renderPagination(totalPages) {
                if (totalPages <= 1) {
                    paginationContainer.innerHTML = '';
                    return;
                }
                
                let paginationHTML = `<button data-page="${currentPage - 1}" class="pagination-arrow h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
                
                let pages = [];
                if (totalPages <= 5) {
                    for (let i = 1; i <= totalPages; i++) pages.push(i);
                } else {
                    pages.push(1);
                    if (currentPage > 3) pages.push('...');
                    if (currentPage === totalPages) pages.push(currentPage - 2);
                    if (currentPage > 2) pages.push(currentPage - 1);
                    if (currentPage !== 1 && currentPage !== totalPages) pages.push(currentPage);
                    if (currentPage < totalPages - 1) pages.push(currentPage + 1);
                    if (currentPage === 1) pages.push(currentPage + 2);
                    if (currentPage < totalPages - 2) pages.push('...');
                    pages.push(totalPages);
                }
                
                [...new Set(pages)].forEach(page => {
                    paginationHTML += (page === '...') ? `<span class="text-slate-400 px-1 sm:px-2">...</span>` : `<button data-page="${page}" class="pagination-button h-10 w-10 sm:h-11 sm:w-11 rounded-xl font-bold transition-all shadow-md ${page === currentPage ? 'bg-primary text-white scale-110' : 'bg-white text-slate-700'}">${page}</button>`;
                });

                paginationHTML += `<button data-page="${currentPage + 1}" class="pagination-arrow h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
                
                paginationContainer.innerHTML = paginationHTML;

                document.querySelectorAll('.pagination-button, .pagination-arrow').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const page = parseInt(e.currentTarget.dataset.page);
                        if (page) {
                            currentPage = page;
                            renderContent();
                            window.scrollTo({ top: document.getElementById('kuliner-grid').offsetTop - 100, behavior: 'smooth' });
                        }
                    });
                });
            }

            function handleSearch() {
                currentPage = 1;
                renderContent();
            }

            function resetSearch() {
                searchInput.value = '';
                selectedCategory = 'All';
                populateCategories();
                handleSearch();
            }

            searchInput.addEventListener('input', handleSearch);
            searchButton.addEventListener('click', handleSearch);
            searchInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSearch(); });

            populateCategories();
            renderContent();
        });