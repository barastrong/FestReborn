document.addEventListener('DOMContentLoaded', () => {
    const destinations = [
        { id: 'kampung-batik-jetis', name: "Kampung Batik Jetis", category: "Budaya", 
          image: "https://i.ibb.co/6P0Jm9B/batik-jetis.jpg", rating: 4.5 },
        { id: 'candi-pari', name: "Candi Pari", category: "Sejarah", 
          image: "https://i.ibb.co/F8W2Zg3/candi-pari.jpg", rating: 4.2 },
        { id: 'pulau-sarinah', name: "Pulau Sarinah (Pesisir Timur)", category: "Alam", 
          image: "https://i.ibb.co/680D1Jc/pulau-sarinah.jpg", rating: 3.8 },
        { id: 'delta-fishing', name: "Delta Fishing", category: "Rekreasi", 
          image: "https://i.ibb.co/j3d692p/delta-fishing.jpg", rating: 4.0 },
        { id: 'museum-mpu-tantular', name: "Museum Mpu Tantular", category: "Edukasi", 
          image: "https://i.ibb.co/P4Mh6k2/mpu-tantular.jpg", rating: 4.6 },
        { id: 'alun-alun-sidoarjo', name: "Alun-Alun Sidoarjo", category: "Rekreasi", 
          image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg", rating: 4.4 },
        { id: 'kebun-cokelat', name: "Kebun Cokelat Balongbendo", category: "Agrowisata", 
          image: "https://i.ibb.co/b3X7s6L/kebun-cokelat.jpg", rating: 3.9 },
        { id: 'wisata-bahari-tlocor', name: "Wisata Bahari Tlocor", category: "Alam", 
          image: "https://i.ibb.co/W21x1Tf/tlocor.jpg", rating: 4.1 },
        { id: 'pasar-malam-gor', name: "Pasar Malam GOR Sidoarjo", category: "Kuliner", 
          image: "https://i.ibb.co/6y4sK7v/pasar-malam-gor.jpg", rating: 4.3 },
        { id: 'sentra-kuliner-g-walk', name: "Sentra Kuliner G-Walk", category: "Kuliner", 
          image: "https://i.ibb.co/30B0f2q/g-walk.jpg", rating: 4.5 },
        { id: 'monumen-jayandaru', name: "Monumen Jayandaru", category: "Sejarah", 
          image: "https://i.ibb.co/RzMny9P/jayandaru.jpg", rating: 4.4 },
        { id: 'klenteng-mbah-ratu', name: "Klenteng Ong Ya King (Mbah Ratu)", category: "Budaya", 
          image: "https://i.ibb.co/t3F4b4f/klenteng-mbah-ratu.jpg", rating: 4.7 },
        { id: 'taman-kota-sidoarjo', name: "Taman Kota Sidoarjo", category: "Rekreasi", 
          image: "https://i.ibb.co/9q09Z4z/taman-kota.jpg", rating: 4.0 },
        { id: 'pusat-oleh-oleh-bandeng', name: "Pusat Oleh-Oleh Bandeng Juwana", category: "Belanja", 
          image: "https://i.ibb.co/qFmJ0jT/bandeng-juwana.jpg", rating: 4.6 },
        { id: 'perahu-lumpur-sidoarjo', name: "Wisata Perahu Lumpur Sidoarjo", category: "Edukasi", 
          image: "https://i.ibb.co/Vq2p19p/lumpur-sidoarjo.jpg", rating: 4.3 },
        { id: 'wisata-air-gunung-anyar', name: "Wisata Air Gunung Anyar", category: "Alam", 
          image: "https://i.ibb.co/gRg0T4z/gunung-anyar.jpg", rating: 3.7 },
        { id: 'masjid-agung-sidoarjo', name: "Masjid Agung Sidoarjo", category: "Religi", 
          image: "https://i.ibb.co/q1V6K6p/masjid-agung.jpg", rating: 4.8 },
        { id: 'kolam-renang-berlian', name: "Kolam Renang Berlian", category: "Rekreasi", 
          image: "https://i.ibb.co/D8gV9pM/kolam-renang.jpg", rating: 4.0 },
        { id: 'makam-buyut-sidokare', name: "Makam Buyut Sidokare", category: "Religi", 
          image: "https://i.ibb.co/f8L02q0/makam-sidokare.jpg", rating: 4.2 },
        { id: 'kampung-wisata-kepiting', name: "Kampung Wisata Kepiting", category: "Kuliner", 
          image: "https://i.ibb.co/44X7xYj/kampung-kepiting.jpg", rating: 4.5 },
    ];

    let currentPage = 1;
    const itemsPerPage = 12;

    const gridContainer = document.getElementById('destinations-grid');
    const paginationContainer = document.getElementById('pagination');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function populateCategories() {
        const categories = [...new Set(destinations.map(d => d.category))].sort();
        categoryFilter.innerHTML = '<option value="All">Semua Kategori</option>';

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

        const filtered = destinations.filter(d =>
            (selectedCategory === 'All' || d.category === selectedCategory) &&
            d.name.toLowerCase().includes(searchTerm)
        );

        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div class="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center text-slate-500 py-20">
                    <div class="flex justify-center mb-6">
                        <div class="bg-slate-100 rounded-full p-8">
                            <i class="fa-solid fa-search text-6xl text-slate-300"></i>
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
            const fullStars = Math.floor(item.rating || 4.0);
            const hasHalfStar = (item.rating % 1 || 0) >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            
            let starsHTML = '';
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fa-solid fa-star text-yellow-400"></i>';
            }
            if (hasHalfStar) {
                starsHTML += '<i class="fa-solid fa-star-half-stroke text-yellow-400"></i>';
            }
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="fa-regular fa-star text-yellow-400"></i>';
            }

            const detailLink = item.id ? `detailDestination.html?id=${item.id}` : '#';

            return `
                <a class="block group card-hover" href="${detailLink}" style="animation-delay: ${index * 0.1}s;">
                    <div class="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 h-96 border-4 border-white bg-white">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div class="absolute top-4 right-4">
                            <span class="bg-white/95 backdrop-blur-sm text-primary-dark font-semibold px-4 py-2 rounded-full text-sm shadow-lg">
                                <i class="fa-solid fa-tag mr-1"></i>${item.category}
                            </span>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 class="text-2xl font-bold mb-1">${item.name}</h3>
                            <div class="flex items-center gap-2 mb-3">
                                ${starsHTML}
                                <span class="text-white/80 text-sm font-semibold ml-1">${item.rating || 'N/A'}</span>
                            </div>
                            <p class="inline-flex items-center gap-2 font-semibold text-white/90 group-hover:text-primary transition-colors">
                                <span>Jelajahi Sekarang</span>
                                <i class="fa-solid fa-arrow-right-long explore-arrow transform transition-transform duration-300"></i>
                            </p>
                        </div>
                    </div>
                </a>
            `}).join('')

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