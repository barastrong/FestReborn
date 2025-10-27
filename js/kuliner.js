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
        { id: 'pujasera-diponegoro', name: "Pujasera Diponegoro", category: "Rumah Makan", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHd0roSnXUMaxRsgjVW99mHUhNgeDMfOjCw&s", rating: 4.1 },
        { id: 'kupang-lontong-pak-sumali', name: "Kupang Lontong Pak Sumali", category: "Makanan", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQvIqeoRJ9H8oXl0Svwj8WWGqqCaacrnB1g&s", rating: 4.8 },
        { id: 'rawon-gajah-mada', name: "Rawon Gajah Mada", category: "Makanan", 
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/98/1d/44/ini-kiosnya.jpg?w=500&h=-1&s=1", rating: 4.7 },
        { id: 'tahu-campur-plaza-sidoarjo', name: "Tahu Campur Plaza Sidoarjo", category: "Makanan", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPF-V17aBxKdFB9sfADexExvQLnDYQMxmaA&s", rating: 4.5 },
        { id: 'warung-seafood-diponegoro', name: "Warung Seafood Diponegoro", category: "Makanan", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiX2LzgeLibvQSVKeQVU1_G0ZVrMEU4ZTMQ&s", rating: 4.6 },
        { id: 'warung-lontong-kupang-dan-lontong-balap', name: "Warung Lontong Kupang dan Lontong Balap", category: "Makanan", 
          image: "https://assets.promediateknologi.id/crop/0x0:0x0/x/photo/p2/85/2023/09/27/LK-pak-eko-626457546.jpg", rating: 4.4 },
        { id: 'warung-sate-komo-ibu-supi', name: "Warung Sate Komo Ibu Supi", category: "Makanan", 
          image: "https://cdn.ngopibareng.id/uploads/2024/2024-05-14/sop-sate-komo-sidoarjo-dagingnya-ukuran-jumbo-bikin-ketagihan--thumbnail-947.webp", rating: 4.8 },
        { id: 'warung-kikil-legenda-abah-atim-watutulis', name: "Warung Kikil Legenda Abah Atim Watutulis", category: "Makanan", 
          image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/684bd62f-fe66-4380-9c9a-c53b5d224c48_Go-Biz_20240701_081542.jpeg", rating: 4.9 },
        { id: 'warung-rujak-ulek-dan-cingur-ibu-ulfa', name: "Warung Rujak Ulek dan Cingur Ibu Ulfa", category: "Makanan", 
          image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/4758d956-6baa-4a93-b651-ad1a75537594_Go-Biz_20221205_115653.jpeg", rating: 4.7 },
        { id: 'nasi-pecel-bunda-ida', name: "Nasi Pecel Bunda Ida", category: "Makanan", 
          image: "https://i0.wp.com/anakjajan.com/wp-content/uploads/2018/05/dscf1863.jpg?fit=1200%2C800&ssl=1", rating: 4.3 },
        { id: 'es-dawet-jabung-bu-dermi', name: "Es Dawet Jabung Bu Dermi", category: "Minuman", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-lc9IIZ5KXSSgc-Jb5FPLQ8C7cV1aIfE0g&s", rating: 4.5 },
        { id: 'toko-roti-sari-rasa', name: "Toko Roti Sari Rasa", category: "Toko Roti", 
          image: "https://i0.wp.com/betanews.id/wp-content/uploads/2021/09/20210903_BETA_Roti_03.jpg?fit=600%2C400&ssl=1", rating: 4.0 },
        { id: 'warung-sambal-pencit-cak-mad', name: "Warung Sambal Pencit Cak Mad", category: "Makanan", 
          image: "https://asset-2.tribunnews.com/suryamalang/foto/bank/images/sensasi-menikmati-sambelan-ala-surabaya.jpg", rating: 4.6 },
        { id: 'mie-goreng-jawa-pak-rt', name: "Mie Goreng Jawa Pak RT", category: "Makanan", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD-CabXcReo03cGq1usyVDPp1cb43E7uVCQ&s", rating: 4.2 },
        { id: 'soto-ayam-pak-ali', name: "Soto Ayam Pak Ali", category: "Makanan", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOm2Z8TApu8OKQAWGEv6GE_Q5WE1765PIhA&s", rating: 3.9 },
        { id: 'kopi-tepi-sawah', name: "Kopi Tepi Sawah", category: "Kopi", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhQDsk8C66IKVLIt8OhnDjIqFGmsmDaWZ9A&s", rating: 4.4 },
        { id: 'sate-ayam-madura-cak-no', name: "Sate Ayam Madura Cak No", category: "Makanan", 
          image: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/cad752f7-2eb6-4f89-bda1-c3d7ff00c565_Go-Biz_20211123_162250.jpeg", rating: 4.1 },
        { id: 'depot-soto-daging-bu-tin', name: "Depot Soto Daging Bu Tin", category: "Makanan", 
          image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/3cfa407f-19a4-4023-b1db-a293238ad3b7_Go-Biz_20220809_072533.jpeg", rating: 4.7 },
        { id: 'warung-es-campur-pak-de', name: "Warung Es Campur Pak De", category: "Minuman", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1QO5bXdybpIkEXpzE6yIn7MT0wsIh7auwg&s", rating: 4.6 },
        { id: 'kedai-susu-murni-mak-nyuss', name: "Kedai Susu Murni Mak Nyuss", category: "Minuman", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZX83Pi6UXbZt3RiuhFqhAHcIMs6thnPIrHQ&s", rating: 4.5 },
    ];

    let currentPage = 1;
    const itemsPerPage = 12;
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
                categoryDropdownMenu.classList.remove('opacity-0');
                categoryDropdownMenu.classList.add('translate-y-0');
                categoryChevron.classList.add('rotate-180');
            }, 10);
        } else {
            categoryDropdownMenu.classList.add('opacity-0');
            categoryDropdownMenu.classList.add('-translate-y-2');
            categoryChevron.classList.remove('rotate-180');
            setTimeout(() => {
                categoryDropdownMenu.classList.add('hidden');
            }, 200);
        }
    };

    categoryDropdownButton.addEventListener('click', toggleDropdown);

    window.addEventListener('click', (e) => {
        if (!categoryDropdownContainer.contains(e.target)) {
            if (!categoryDropdownMenu.classList.contains('hidden')) {
                toggleDropdown();
            }
        }
    });
    
    function createCategoryButton(categoryName, isSelected = false) {
        const button = document.createElement('button');
        const displayName = categoryName === 'All' ? 'Semua Kategori' : categoryName;
        button.textContent = displayName;
        button.dataset.category = categoryName;
        button.className = `w-full text-left px-4 py-2 rounded-md transition-colors text-slate-700 ${isSelected ? 'bg-blue-50 text-primary-dark font-semibold' : ''}`;
        
        button.addEventListener('click', () => {
            selectedCategory = button.dataset.category;
            selectedCategoryText.textContent = displayName;
            
            Array.from(categoryDropdownMenu.children).forEach(child => {
                 child.classList.remove('bg-blue-50', 'text-primary-dark', 'font-semibold');
            });
            button.classList.add('bg-blue-50', 'text-primary-dark', 'font-semibold');

            handleSearch();
            toggleDropdown();
        });
        return button;
    }

    function populateCategories() {
        const categories = ['All', ...new Set(kuliner.map(d => d.category))].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
        categoryDropdownMenu.innerHTML = '';
        
        categories.forEach(category => {
            const button = createCategoryButton(category, category === selectedCategory);
            categoryDropdownMenu.appendChild(button);
        });

        const initialDisplayName = selectedCategory === 'All' ? 'Semua Kategori' : selectedCategory;
        selectedCategoryText.textContent = initialDisplayName;
    }

    function renderContent() {
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
                    <button id="reset-search-btn" class="bg-primary text-white font-semibold px-6 py-3 rounded-xl transition-all">
                        Reset Pencarian
                    </button>
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
            <a href="detailKuliner.html?id=${item.id}" class="block" style="animation-delay: ${index * 0.05}s;">
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
                                <span class="">Lihat Detail</span>
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
                <button data-page="${currentPage - 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>`;
            
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    paginationHTML += `
                        <button data-page="${i}" class="pagination-button h-11 w-11 rounded-xl font-bold transition-all shadow-md  ${i === currentPage ? 'bg-primary text-white scale-110' : 'bg-white text-slate-700'}">
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
    
    function resetSearch() {
        searchInput.value = '';
        selectedCategory = 'All';
        populateCategories();
        handleSearch();
    }

    searchInput.addEventListener('input', handleSearch);
    searchButton.addEventListener('click', handleSearch);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    populateCategories();
    renderContent();
});