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
        { id: 'kampung-batik-jetis', name: "Kampung Batik Jetis", category: "Budaya", 
          image: "https://media.indozone.id/crop/photo/p2/95/2025/04/12/1000259473-634846500.jpg", rating: 4.5 },
        { id: 'candi-pari', name: "Candi Pari", category: "Sejarah", 
          image: "./assets/candi-pari.jpg", rating: 4.2 },
        { id: 'pulau-sarinah', name: "Pulau Sarinah (Pesisir Timur)", category: "Alam", 
          image: "./assets/pulau-sarinah.jpg", rating: 3.8 },
        { id: 'delta-fishing', name: "Delta Fishing", category: "Rekreasi", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzQokUGMD6KokbUZ-LcsFqb1R0tC3PKNUtA&s", rating: 4.0 },
        { id: 'museum-mpu-tantular', name: "Museum Mpu Tantular", category: "Edukasi", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnvMHpWEONa7_9fjgIg05yLrBwji_tXqrOQ&s", rating: 4.6 },
        { id: 'alun-alun-sidoarjo', name: "Alun-Alun Sidoarjo", category: "Rekreasi", 
          image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg", rating: 4.4 },
        { id: 'kebun-cokelat', name: "Kebun Cokelat Balongbendo", category: "Agrowisata", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgN_BpjYi5bFfahDiZhZtofIqosTB1ljq-Uw&s", rating: 3.9 },
        { id: 'wisata-bahari-tlocor', name: "Wisata Bahari Tlocor", category: "Alam", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKR92TorlzRqHkpvK1haDTo_xWsy-VSbZQw&s", rating: 4.1 },
        { id: 'pasar-malam-gor', name: "Pasar Malam GOR Sidoarjo", category: "Kuliner", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQu1kLikb8Ni95b4tgx_fOyRlvE6H-IDuHmA&s", rating: 4.3 },
        { id: 'sentra-kuliner-g-walk', name: "Sentra Kuliner G-Walk", category: "Kuliner", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvT5JHs45DCEkRq9tmu0hU2lV5m0uFMUiMg&s", rating: 4.5 },
        { id: 'monumen-jayandaru', name: "Monumen Jayandaru", category: "Sejarah", 
          image: "https://travelspromo.com/wp-content/uploads/2021/12/Suasana-malam-di-Monumen-Jayandaru.jpg", rating: 4.4 },
        { id: 'klenteng-mbah-ratu', name: "Klenteng Ong Ya King (Mbah Ratu)", category: "Budaya", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s", rating: 4.7 },
        { id: 'taman-kota-sidoarjo', name: "Taman Kota Sidoarjo", category: "Rekreasi", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGsIBbQrf1FqBaWY3mzIPhYYUEpX1s7Sw1Q&s", rating: 4.0 },
        { id: 'pusat-oleh-oleh-bandeng', name: "Pusat Oleh-Oleh Bandeng Juwana", category: "Belanja", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnD6u5VbPqmOXUtFtgiydMdCCx1jCfYEtCw&s", rating: 4.6 },
        { id: 'perahu-lumpur-sidoarjo', name: "Wisata Perahu Lumpur Sidoarjo", category: "Edukasi", 
          image: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/287/2023/10/30/20231030_181251-1099284576.jpg", rating: 4.3 },
        { id: 'wisata-air-gunung-anyar', name: "Wisata Air Gunung Anyar", category: "Alam", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNqWP7Z4CoLFsf-S2uXQRiTawwEvjEm8T-g&s", rating: 3.7 },
        { id: 'masjid-agung-sidoarjo', name: "Masjid Agung Sidoarjo", category: "Religi", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxya0wZmrRtdT7XbUj1EcV4q6fVp2TBqFJSQ&s", rating: 4.8 },
        { id: 'kolam-renang-berlian', name: "Kolam Renang Berlian", category: "Rekreasi", 
          image: "https://lovelybogor.com/wp-content/uploads/2020/07/Kolam-Renang-Dalam-Ruangan-di-Hotel-Duta-Berlian-A1.jpg", rating: 4.0 },
        { id: 'makam-buyut-sidokare', name: "Makam Buyut Sidokare", category: "Religi", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBK_TBa3wGAC6lQJVlDNYayW2gL8lHVMesYA&s", rating: 4.2 },
        { id: 'kampung-wisata-kepiting', name: "Kampung Wisata Kepiting", category: "Kuliner", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pHMHxywlbEIu-mZBj0qTmROdf7Ai80fP3A&s", rating: 4.5 },
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
        button.className = `w-full text-left px-4 py-2 rounded-md transition-colors text-slate-700 ${isSelected ? 'bg-blue-50 text-primary-dark font-semibold' : ''}`;
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
                    <button id="reset-search-btn" class="bg-primary text-white font-semibold px-6 py-3 rounded-xl transition-all">Reset Pencarian</button>
                </div>`;
            document.getElementById('reset-search-btn').addEventListener('click', resetSearch);
            paginationContainer.innerHTML = '';
            return;
        }

        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedItems = filtered.slice(start, start + itemsPerPage);

        gridContainer.innerHTML = paginatedItems.map((item, index) => `
        <a class="block group" href="detailDestination.html?id=${item.id}" style="animation-delay: ${index * 0.1}s;">
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
                    <p class="inline-flex items-center gap-2 font-semibold text-white/90 transition-colors">
                        <span>Jelajahi Sekarang</span>
                        <i class="fa-solid fa-arrow-right-long explore-arrow transform transition-transform duration-300"></i>
                    </p>
                </div>
            </div>
        </a>`).join('');

        let paginationHTML = '';
        if (totalPages > 1) {
            paginationHTML += `
                <button data-page="${currentPage - 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>`;
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    paginationHTML += `
                        <button data-page="${i}" class="pagination-button h-11 w-11 rounded-xl font-bold transition-all shadow-md ${i === currentPage ? 'bg-primary text-white scale-110' : 'bg-white text-slate-700'}">${i}</button>`;
                } else if (i === currentPage - 2 || i === currentPage + 2) {
                    paginationHTML += `<span class="text-slate-400 px-2">...</span>`;
                }
            }
            paginationHTML += `
                <button data-page="${currentPage + 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === totalPages ? 'disabled' : ''}>
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
