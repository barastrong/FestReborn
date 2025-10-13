document.addEventListener('DOMContentLoaded', () => {
    const destinations = [
        { name: "Kampung Batik Jetis", category: "Budaya", image: "https://cdn.ngopibareng.id/uploads/2023/2023-09-03/kampung-batik-jetis-destinasi-umkm-lokal-di-gelaran-porprov--01" },
        { name: "Candi Pari", category: "Sejarah", image: "../assets/candi-pari.jpg" },
        { name: "Pulau Sarinah", category: "Alam", image: "../assets/pulau-sarinah.jpg" },
        { name: "Delta Fishing", category: "Rekreasi", image: "https://i.ytimg.com/vi/t27QPt90skk/maxresdefault.jpg" },
        { name: "Museum Mpu Tantular", category: "Edukasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGn6S1-Lm5uyOc2JP8-phj8Tn0ljv8s3kug&s" },
        { name: "Alun-Alun Sidoarjo", category: "Rekreasi", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg" },
        { name: "Kebun Cokelat", category: "Agrowisata", image: "https://cdn.antaranews.com/cache/800x533/2015/01/20150114140115091101_tanaman_coklat.jpg" },
        { name: "Wisata Bahari Tlocor", category: "Alam", image: "https://www.rumah123.com/seo-cms/assets/Tips_Berkunjung_ke_Wisata_Bahari_Tlocor_d19edd1f52/Tips_Berkunjung_ke_Wisata_Bahari_Tlocor_d19edd1f52.jpg" },
        { name: "Pasar Malam GOR", category: "Rekreasi", image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2024/10/05/F-PASAR-MALAM-3-3723038809.jpg" },
        { name: "Sentra Kuliner G-Walk", category: "Kuliner", image: "https://cdn.antaranews.com/cache/1200x800/2021/07/20/SWK-surabaya_1.jpeg" },
        { name: "Monumen Jayandaru", category: "Sejarah", image: "https://travelspromo.com/wp-content/uploads/2021/12/Suasana-malam-di-Monumen-Jayandaru.jpg" },
        { name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
        { name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
        { name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
        { name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
        { name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
        { name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
        { name: "Klenteng Mbah Ratu", category: "Budaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeA0_IU29Xu2_Ps-4zMvcPLJD-8C2z09MgQ&s" },
    ];

    let currentPage = 1;
    const itemsPerPage = 12;

    const gridContainer = document.getElementById('destinations-grid');
    const paginationContainer = document.getElementById('pagination');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function populateCategories() {
        const categories = [...new Set(destinations.map(d => d.category))];
        categories.sort().forEach(category => {
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
            gridContainer.innerHTML = `<div class="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-slate-500 py-16"><div class="flex justify-center mb-4"><i class="fa-solid fa-cloud-moon text-6xl text-slate-300"></i></div><h3 class="text-2xl font-semibold mb-2 text-slate-700">Oops! Tidak ada hasil ditemukan</h3><p>Coba gunakan kata kunci atau filter kategori yang berbeda.</p></div>`;
            paginationContainer.innerHTML = '';
            return;
        }

        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedItems = filtered.slice(start, start + itemsPerPage);

        gridContainer.innerHTML = paginatedItems.map(item => `
        <a class="block group" href="#">
            <div class="relative rounded-2xl overflow-hidden shadow-lg group transform transition-transform duration-300 h-96 border-4 border-white">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6 text-white">
                    <h3 class="text-2xl font-bold mt-2">${item.name}</h3>
                    <p href="#" class="inline-flex items-center gap-2 mt-2 font-semibold text-white/80 transition-colors"><span>Jelajahi</span><i class="fa-solid fa-arrow-right-long transform transition-transform"></i></->
                </div>
            </div>
        </a>
        `).join('');
        
        let paginationHTML = '';
        if (totalPages > 1) {
            paginationHTML += `<button data-page="${currentPage - 1}" class="pagination-arrow h-10 w-10 rounded-md bg-white hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
            for (let i = 1; i <= totalPages; i++) {
                paginationHTML += `<button data-page="${i}" class="pagination-button h-10 w-10 rounded-md font-semibold transition-colors ${i === currentPage ? 'bg-primary text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}">${i}</button>`;
            }
            paginationHTML += `<button data-page="${currentPage + 1}" class="pagination-arrow h-10 w-10 rounded-md bg-white hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
        }
        paginationContainer.innerHTML = paginationHTML;

        document.querySelectorAll('.pagination-button, .pagination-arrow').forEach(button => {
            button.addEventListener('click', (e) => {
                currentPage = parseInt(e.currentTarget.dataset.page);
                renderContent();
            });
        });
    }

    function handleSearch() {
        currentPage = 1;
        renderContent();
    }
    
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => e.key === 'Enter' && handleSearch());
    categoryFilter.addEventListener('change', handleSearch);


    populateCategories();
    renderContent();
});