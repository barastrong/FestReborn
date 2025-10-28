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

            const destinations = [
                { id: 'kampung-batik-jetis', name: "Kampung Batik Jetis", category: "Budaya", image: "https://media.indozone.id/crop/photo/p2/95/2025/04/12/1000259473-634846500.jpg" },
                { id: 'candi-pari', name: "Candi Pari", category: "Sejarah", image: "https://cdn1-production-images-kly.akamaized.net/M1iWcsKhITDrTGF83c0xK3Voq48=/500x281/smart/filters:quality(75):strip_icc()/kly-media-production/medias/2881522/original/015758400_1565767254-800px-Candi_Pari_1.jpg" },
                { id: 'pulau-sarinah', name: "Pulau Sarinah", category: "Alam", image: "./assets/pulau-sarinah.jpg" },
                { id: 'delta-fishing', name: "Delta Fishing", category: "Rekreasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzQokUGMD6KokbUZ-LcsFqb1R0tC3PKNUtA&s" },
                { id: 'museum-mpu-tantular', name: "Museum Mpu Tantular", category: "Edukasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnvMHpWEONa7_9fjgIg05yLrBwji_tXqrOQ&s" },
                { id: 'alun-alun-sidoarjo', name: "Alun-Alun Sidoarjo", category: "Rekreasi", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg" },
                { id: 'kebun-cokelat', name: "Kebun Cokelat", category: "Agrowisata", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgN_BpjYi5bFfahDiZhZtofIqosTB1ljq-Uw&s" },
                { id: 'wisata-bahari-tlocor', name: "Wisata Bahari Tlocor", category: "Alam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKR92TorlzRqHkpvK1haDTo_xWsy-VSbZQw&s" },
                { id: 'pasar-malam-gor', name: "Pasar Malam GOR", category: "Kuliner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQu1kLikb8Ni95b4tgx_fOyRlvE6H-IDuHmA&s" },
                { id: 'monumen-jayandaru', name: "Monumen Jayandaru", category: "Sejarah", image: "https://travelspromo.com/wp-content/uploads/2021/12/Suasana-malam-di-Monumen-Jayandaru.jpg" },
                { id: 'klenteng-mbah-ratu', name: "Klenteng Ong Ya King", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
                { id: 'pusat-oleh-oleh-bandeng', name: "Oleh-Oleh Bandeng Juwana", category: "Belanja", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnD6u5VbPqmOXUtFtgiydMdCCx1jCfYEtCw&s" },
                { id: 'perahu-lumpur-sidoarjo', name: "Wisata Perahu Lumpur", category: "Edukasi", image: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/287/2023/10/30/20231030_181251-1099284576.jpg" },
                { id: 'masjid-agung-sidoarjo', name: "Masjid Agung Sidoarjo", category: "Religi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxya0wZmrRtdT7XbUj1EcV4q6fVp2TBqFJSQ&s" },
                { id: 'kampung-wisata-kepiting', name: "Kampung Wisata Kepiting", category: "Kuliner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pHMHxywlbEIu-mZBj0qTmROdf7Ai80fP3A&s" },
            ];

            let currentPage = 1;
            const itemsPerPage = 9;
            let selectedCategory = 'All';

            const gridContainer = document.getElementById('destinations-grid');
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
                        categoryDropdownMenu.classList.add('translate-y-0');
                        categoryChevron.classList.add('rotate-180');
                    }, 10);
                } else {
                    categoryDropdownMenu.classList.add('opacity-0', '-translate-y-2');
                    categoryChevron.classList.remove('rotate-180');
                    setTimeout(() => {
                        categoryDropdownMenu.classList.add('hidden');
                    }, 200);
                }
            };

            categoryDropdownButton.addEventListener('click', toggleDropdown);
            window.addEventListener('click', (e) => {
                if (!categoryDropdownContainer.contains(e.target) && !categoryDropdownMenu.classList.contains('hidden')) {
                    toggleDropdown();
                }
            });

            function createCategoryButton(categoryName, categoryValue) {
                const button = document.createElement('button');
                button.textContent = categoryName;
                button.dataset.category = categoryValue;
                button.className = 'w-full text-left px-4 py-2 rounded-md transition-colors text-slate-700 hover:bg-slate-100';
                button.addEventListener('click', () => {
                    selectedCategory = categoryValue;
                    selectedCategoryText.textContent = categoryName;
                    handleSearch();
                    toggleDropdown();
                });
                return button;
            }

            function populateCategories() {
                const categories = ['All', ...new Set(destinations.map(d => d.category))].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
                categoryDropdownMenu.innerHTML = '';
                categories.forEach(category => {
                    const categoryLabel = category === 'All' ? 'Semua Kategori' : category;
                    const button = createCategoryButton(categoryLabel, category);
                    categoryDropdownMenu.appendChild(button);
                });
                selectedCategoryText.textContent = selectedCategory === 'All' ? 'Semua Kategori' : selectedCategory;
            }

            function renderContent() {
                const searchTerm = searchInput.value.toLowerCase();
                const filtered = destinations.filter(d =>
                    (selectedCategory === 'All' || d.category === selectedCategory) &&
                    d.name.toLowerCase().includes(searchTerm)
                );

                if (filtered.length === 0) {
                    gridContainer.innerHTML = `
                        <div class="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-slate-500 py-16">
                            <i class="fa-solid fa-map-signs text-7xl text-slate-300 mb-6"></i>
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

                gridContainer.innerHTML = paginatedItems.map((item, index) => `
                <a class="block group animate-fade-in" href="detailDestination.html?id=${item.id}" style="animation-delay: ${index * 0.05}s;">
                    <div class="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 h-96 bg-white group-hover:-translate-y-2 group-hover:shadow-2xl">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary-dark font-semibold px-4 py-2 rounded-full text-sm shadow-md">
                            <i class="fa-solid fa-tag mr-1"></i>${item.category}
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
                            <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                            <p class="inline-flex items-center gap-2 font-semibold text-white/90 transition-colors group-hover:text-primary">
                                <span>Jelajahi Sekarang</span>
                                <i class="fa-solid fa-arrow-right-long transform transition-transform duration-300 group-hover:translate-x-2"></i>
                            </p>
                        </div>
                    </div>
                </a>`).join('');

                renderPagination(totalPages);
            }
            
            function renderPagination(totalPages) {
                if (totalPages <= 1) {
                    paginationContainer.innerHTML = '';
                    return;
                }
                
                let paginationHTML = `
                    <button data-page="${currentPage - 1}" class="pagination-arrow h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>`;
                    
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
                    if (page === '...') {
                        paginationHTML += `<span class="text-slate-400 px-1 sm:px-2">...</span>`;
                    } else {
                        paginationHTML += `
                            <button data-page="${page}" class="pagination-button h-10 w-10 sm:h-11 sm:w-11 rounded-xl font-bold transition-all shadow-md ${page === currentPage ? 'bg-primary text-white scale-110' : 'bg-white text-slate-700'}">${page}</button>`;
                    }
                });

                paginationHTML += `
                    <button data-page="${currentPage + 1}" class="pagination-arrow h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === totalPages ? 'disabled' : ''}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>`;
                
                paginationContainer.innerHTML = paginationHTML;

                document.querySelectorAll('.pagination-button, .pagination-arrow').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const page = parseInt(e.currentTarget.dataset.page);
                        if (page) {
                            currentPage = page;
                            renderContent();
                            window.scrollTo({ top: document.getElementById('destinations-grid').offsetTop - 100, behavior: 'smooth' });
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
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleSearch();
            });

            populateCategories();
            renderContent();
        });