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
        { id: 'kampung-batik-jetis', name: "Kampung Batik Jetis", category: "Budaya", image: "https://cdn.ngopibareng.id/uploads/2023/2023-09-03/kampung-batik-jetis-destinasi-umkm-lokal-di-gelaran-porprov--01" },
        { id: 'candi-pari', name: "Candi Pari", category: "Sejarah", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800" },
        { id: 'pulau-sarinah', name: "Pulau Sarinah", category: "Alam", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800" },
        { id: 'delta-fishing', name: "Delta Fishing", category: "Rekreasi", image: "https://i.ytimg.com/vi/t27QPt90skk/maxresdefault.jpg" },
        { id: 'museum-mpu-tantular', name: "Museum Mpu Tantular", category: "Edukasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGn6S1-Lm5uyOc2JP8-phj8Tn0ljv8s3kug&s" },
        { id: 'alun-alun-sidoarjo', name: "Alun-Alun Sidoarjo", category: "Rekreasi", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg" },
        { id: 'kebun-cokelat', name: "Kebun Cokelat", category: "Agrowisata", image: "https://cdn.antaranews.com/cache/800x533/2015/01/20150114140115091101_tanaman_coklat.jpg" },
        { id: 'wisata-bahari-tlocor', name: "Wisata Bahari Tlocor", category: "Alam", image: "https://www.rumah123.com/seo-cms/assets/Tips_Berkunjung_ke_Wisata_Bahari_Tlocor_d19edd1f52/Tips_Berkunjung_ke_Wisata_Bahari_Tlocor_d19edd1f52.jpg" },
        { id: 'pasar-malam-gor', name: "Pasar Malam GOR", category: "Rekreasi", image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2024/10/05/F-PASAR-MALAM-3-3723038809.jpg" },
        { id: 'sentra-kuliner-g-walk', name: "Sentra Kuliner G-Walk", category: "Kuliner", image: "https://cdn.antaranews.com/cache/1200x800/2021/07/20/SWK-surabaya_1.jpeg" },
        { id: 'monumen-jayandaru', name: "Monumen Jayandaru", category: "Sejarah", image: "https://travelspromo.com/wp-content/uploads/2021/12/Suasana-malam-di-Monumen-Jayandaru.jpg" },
        { id: 'klenteng-mbah-ratu', name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
        { id: 'lumpur-lapindo', name: "Lumpur Lapindo", category: "Alam", image: "https://asset.kompas.com/crops/6l93sJ2iW3oE_QG0o1kF6hY8kZc=/0x0:1000x667/750x500/data/photo/2021/05/29/60b21a30c5e75.jpg" },
        { id: 'candi-sumur', name: "Candi Sumur", category: "Sejarah", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Candi_Sumur_Sidoarjo.jpg/1200px-Candi_Sumur_Sidoarjo.jpg" },
        { id: 'sun-city-waterpark', name: "Sun City Waterpark", category: "Rekreasi", image: "https://media-cdn.tripadvisor.com/media/photo-s/13/1d/15/d5/kolam-renang-ombak.jpg" },
        { id: 'pazkul-kahuripan', name: "Pazkul Kahuripan", category: "Kuliner", image: "https://www.sewamobil-surabaya.com/wp-content/uploads/2021/07/pazkul-sidoarjo-1024x640.jpg" },
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
        button.textContent = categoryName;
        button.dataset.category = categoryName;
        button.className = `w-full text-left px-4 py-2 rounded-md transition-colors text-slate-700 hover:bg-slate-100 hover:text-primary ${isSelected ? 'bg-blue-50 text-primary-dark font-semibold' : ''}`;
        button.addEventListener('click', () => {
            selectedCategory = categoryName;
            selectedCategoryText.textContent = categoryName;
            Array.from(categoryDropdownMenu.children).forEach(child => {
                child.classList.remove('bg-blue-50', 'text-primary-dark', 'font-semibold');
                if (child.dataset.category === categoryName) {
                    child.classList.add('bg-blue-50', 'text-primary-dark', 'font-semibold');
                }
            });
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
            const button = createCategoryButton(categoryLabel, category === selectedCategory);
            button.dataset.category = category;
            categoryDropdownMenu.appendChild(button);
        });
        selectedCategoryText.textContent = selectedCategory === 'All' ? 'Semua Kategori' : selectedCategory;
        const initialSelectedButton = categoryDropdownMenu.querySelector(`[data-category="${selectedCategory}"]`);
        if (initialSelectedButton) {
            initialSelectedButton.classList.add('bg-blue-50', 'text-primary-dark', 'font-semibold');
        }
    }

    function renderContent() {
        const searchTerm = searchInput.value.toLowerCase();
        const currentCategory = selectedCategory === 'Semua Kategori' ? 'All' : selectedCategory;
        const filtered = destinations.filter(d =>
            (currentCategory === 'All' || d.category === currentCategory) &&
            d.name.toLowerCase().includes(searchTerm)
        );

        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div class="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-slate-500 py-20">
                    <div class="flex justify-center mb-6">
                        <div class="bg-slate-100 rounded-full p-8">
                            <i class="fa-solid fa-search text-6xl text-slate-300"></i>
                        </div>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 text-slate-700">Oops! Tidak ada hasil ditemukan</h3>
                    <p class="text-lg text-slate-500 mb-6">Coba gunakan kata kunci atau filter kategori yang berbeda.</p>
                    <button id="reset-search-btn" class="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">Reset Pencarian</button>
                </div>`;
            document.getElementById('reset-search-btn').addEventListener('click', resetSearch);
            paginationContainer.innerHTML = '';
            return;
        }

        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedItems = filtered.slice(start, start + itemsPerPage);

        gridContainer.innerHTML = paginatedItems.map((item, index) => `
        <a class="block group card-hover" href="detailDestination.html?id=${item.id}" style="animation-delay: ${index * 0.1}s;">
            <div class="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 h-96 border-4 border-white bg-white">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div class="absolute top-4 right-4">
                    <span class="bg-white/95 backdrop-blur-sm text-primary-dark font-semibold px-4 py-2 rounded-full text-sm shadow-lg">
                        <i class="fa-solid fa-tag mr-1"></i>${item.category}
                    </span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 class="text-2xl font-bold mb-3">${item.name}</h3>
                    <p class="inline-flex items-center gap-2 font-semibold text-white/90 group-hover:text-primary transition-colors">
                        <span>Jelajahi Sekarang</span>
                        <i class="fa-solid fa-arrow-right-long explore-arrow transform transition-transform duration-300"></i>
                    </p>
                </div>
            </div>
        </a>`).join('');

        let paginationHTML = '';
        if (totalPages > 1) {
            paginationHTML += `
                <button data-page="${currentPage - 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white hover:bg-slate-100 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>`;
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    paginationHTML += `
                        <button data-page="${i}" class="pagination-button h-11 w-11 rounded-xl font-bold transition-all shadow-md hover:shadow-lg ${i === currentPage ? 'bg-primary text-white scale-110' : 'bg-white text-slate-700 hover:bg-slate-100'}">${i}</button>`;
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
                currentPage = parseInt(e.currentTarget.dataset.page);
                renderContent();
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
