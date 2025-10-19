        document.addEventListener('DOMContentLoaded', () => {
            const destinations = [
                { id:'kampung-batik-jetis',name: "Kampung Batik Jetis", category: "Budaya", image: "https://cdn.ngopibareng.id/uploads/2023/2023-09-03/kampung-batik-jetis-destinasi-umkm-lokal-di-gelaran-porprov--01" },
                { id:'candi-pari', name: "Candi Pari", category: "Sejarah", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800" },
                { name: "Pulau Sarinah", category: "Alam", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800" },
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
                        <div class="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-slate-500 py-20">
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
                </a>
            `).join('')

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