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

            const allData = [
                { type: 'Destinasi', name: "Kampung Batik Jetis", lokasi: "Jetis, Sidoarjo", image: "https://cdn.ngopibareng.id/uploads/2023/2023-09-03/kampung-batik-jetis-destinasi-umkm-lokal-di-gelaran-porprov--01", rating: 4.6, harga: 5000, description: "Jelajahi pusat kerajinan batik tulis khas Sidoarjo dengan motif yang unik dan penuh warna." },
                { type: 'Destinasi', name: "Candi Pari", lokasi: "Porong, Sidoarjo", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", rating: 4.7, harga: 10000, description: "Saksikan kemegahan peninggalan arsitektur era Majapahit dengan suasana tenang dan spot foto instagramable." },
                { type: 'Destinasi', name: "Pulau Sarinah", lokasi: "Tlocor, Sidoarjo", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800", rating: 4.5, harga: 25000, description: "Nikmati keindahan alam pesisir dengan hutan mangrove yang asri, cocok untuk bersantai dan memancing." },
                { type: 'Destinasi', name: "Delta Fishing", lokasi: "Prasung, Buduran", image: "https://i.ytimg.com/vi/t27QPt90skk/maxresdefault.jpg", rating: 4.4, harga: 30000, description: "Tempat rekreasi keluarga yang menyediakan kolam pemancingan, taman bermain, dan aneka wahana air seru." },
                { type: 'Destinasi', name: "Museum Mpu Tantular", lokasi: "Buduran, Sidoarjo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGn6S1-Lm5uyOc2JP8-phj8Tn0ljv8s3kug&s", rating: 4.6, harga: 4000, description: "Museum negeri yang menyimpan ribuan koleksi benda bersejarah dari berbagai era, dari prasejarah hingga kemerdekaan." },
                { type: 'Destinasi', name: "Alun-Alun Sidoarjo", lokasi: "Pusat Kota, Sidoarjo", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg", rating: 4.5, harga: 0, description: "Jantung kota Sidoarjo yang ramai, tempat berkumpul warga untuk bersantai, berolahraga, dan menikmati jajanan." },
                { type: 'Destinasi', name: "Monumen Jayandaru", lokasi: "Alun-Alun, Sidoarjo", image: "https://travelspromo.com/wp-content/uploads/2021/12/Suasana-malam-di-Monumen-Jayandaru.jpg", rating: 4.7, harga: 0, description: "Ikon modern Sidoarjo berupa monumen udang dan bandeng yang megah, menjadi spot foto favorit di pusat kota." },
                { type: 'Hotel', name: "Hotel Majapahit Surabaya", lokasi: "Jl. Tunjungan, Surabaya", rating: 4.8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", harga: 1500000, description: "Hotel mewah dengan arsitektur kolonial yang memukau, menawarkan pengalaman menginap tak terlupakan." },
                { type: 'Hotel', name: "Ibis Styles Surabaya", lokasi: "Jl. Jemursari, Surabaya", rating: 4.5, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800", harga: 450000, description: "Hotel modern dengan desain colorful, cocok untuk traveler yang mencari kenyamanan dengan harga terjangkau." },
                { type: 'Hotel', name: "Bumi Surabaya City Resort", lokasi: "Jl. Basuki Rahmat, Surabaya", rating: 4.6, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800", harga: 850000, description: "Resort hotel dengan suasana tropis di tengah kota, menawarkan ketenangan dan relaksasi dengan taman asri." },
                { type: 'Hotel', name: "The Westin Surabaya", lokasi: "Pakuwon Mall, Surabaya", rating: 4.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800", harga: 2200000, description: "Hotel premium dengan standar internasional, menawarkan luxury experience dengan pemandangan kota spektakuler." },
                { type: 'Hotel', name: "Sheraton Surabaya Hotel", lokasi: "Jl. Embong Malang, Surabaya", rating: 4.7, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800", harga: 1600000, description: "Hotel dengan reputasi excellent, menawarkan refined elegance dan top-notch service di pusat kota." },
                { type: 'Hotel', name: "RedDoorz near Ciputra World", lokasi: "Jl. Mayjen Sungkono, Surabaya", rating: 4.2, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800", harga: 200000, description: "Akomodasi budget dengan lokasi dekat mall, bersih dan nyaman untuk backpackers." },
                { type: 'Hotel', name: "Vasa Hotel Surabaya", lokasi: "Jl. HR Muhamad, Surabaya", rating: 4.5, image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800", harga: 750000, description: "Hotel dengan desain kontemporer yang stylish, menyediakan kamar nyaman dan rooftop restaurant." },
                { type: 'Kuliner', name: "Sentra Kuliner G-Walk", lokasi: "Citraland, Surabaya", image: "https://cdn.antaranews.com/cache/1200x800/2021/07/20/SWK-surabaya_1.jpeg", rating: 4.5, harga: 50000, description: "Pusat jajanan malam yang luas dengan ratusan pilihan tenant makanan, dari masakan lokal hingga internasional." },
                { type: 'Kuliner', name: "Depot Bu Rudy", lokasi: "Dharmahusada, Surabaya", image: "https://media.suara.com/pictures/653x366/2022/09/12/13514-depot-bu-rudy.jpg", rating: 4.8, harga: 75000, description: "Terkenal dengan sambal bawangnya yang legendaris, menyediakan aneka masakan rumahan dan oleh-oleh khas." },
                { type: 'Kuliner', name: "Soto Ayam Cak Har", lokasi: "Jl. Dr. Ir. H. Soekarno, Surabaya", image: "https://img.inews.co.id/media/822/files/inews_new/2020/12/10/soto.jpg", rating: 4.4, harga: 25000, description: "Warung soto ayam yang tidak pernah sepi, dikenal dengan kuah bening gurih dan taburan koya melimpah." },
                { type: 'Kuliner', name: "Lontong Balap Pak Gendut", lokasi: "Kranggan, Surabaya", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Lontong_Balap.jpg", rating: 4.4, harga: 20000, description: "Menyajikan lontong balap otentik khas Surabaya dengan lentho, tauge, dan sambal petis yang mantap." },
                { type: 'Kuliner', name: "Sate Klopo Ondomohen", lokasi: "Genteng, Surabaya", image: "https://img.inews.co.id/media/822/files/inews_new/2019/06/15/sate_klopo.jpg", rating: 4.8, harga: 40000, description: "Sate ayam unik yang dibakar dengan parutan kelapa, memberikan aroma dan rasa yang khas dan sangat lezat." },
            ];
            
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            shuffle(allData);
            
            let currentPage = 1;
            const itemsPerPage = 9;
            let selectedCategory = 'All';

            const gridContainer = document.getElementById('grid-container');
            const paginationContainer = document.getElementById('pagination');
            const searchInput = document.getElementById('search-input');
            const categoryDropdownContainer = document.getElementById('category-dropdown-container');
            const categoryDropdownButton = document.getElementById('category-dropdown-button');
            const categoryDropdownMenu = document.getElementById('category-dropdown-menu');
            const selectedCategoryText = document.getElementById('selected-category-text');
            const categoryChevron = document.getElementById('category-chevron');

            const minPriceSlider = document.getElementById('min-price-slider');
            const maxPriceSlider = document.getElementById('max-price-slider');
            const minPriceDisplay = document.getElementById('min-price-display');
            const maxPriceDisplay = document.getElementById('max-price-display');
            const priceSliderRange = document.getElementById('price-slider-range');
            const priceGap = 50000;

            const minRatingSlider = document.getElementById('min-rating-slider');
            const maxRatingSlider = document.getElementById('max-rating-slider');
            const minRatingDisplay = document.getElementById('min-rating-display');
            const maxRatingDisplay = document.getElementById('max-rating-display');
            const ratingSliderRange = document.getElementById('rating-slider-range');
            const ratingGap = 0.5;

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

            function populateCategories() {
                const categories = ['All', 'Destinasi', 'Hotel', 'Kuliner'];
                categoryDropdownMenu.innerHTML = '';
                categories.forEach(category => {
                    const button = document.createElement('button');
                    const displayName = category === 'All' ? 'Semua' : category;
                    button.textContent = displayName;
                    button.dataset.category = category;
                    button.className = 'w-full text-left px-4 py-2 rounded-md transition-colors text-slate-700 hover:bg-slate-100';
                    button.addEventListener('click', () => {
                        selectedCategory = button.dataset.category;
                        selectedCategoryText.textContent = displayName;
                        handleSearch();
                        toggleDropdown();
                    });
                    categoryDropdownMenu.appendChild(button);
                });
            }

            function setupPriceSlider() {
                const prices = allData.map(item => item.harga).filter(harga => harga !== null);
                const minPrice = 0;
                const maxPrice = Math.max(...prices, 2500000);

                minPriceSlider.min = maxPriceSlider.min = minPrice;
                minPriceSlider.max = maxPriceSlider.max = maxPrice;
                minPriceSlider.value = minPrice;
                maxPriceSlider.value = maxPrice;

                minPriceSlider.addEventListener('input', updatePriceSliderVisuals);
                maxPriceSlider.addEventListener('input', updatePriceSliderVisuals);
                minPriceSlider.addEventListener('change', handleSearch);
                maxPriceSlider.addEventListener('change', handleSearch);
                updatePriceSliderVisuals();
            }

            function updatePriceSliderVisuals(event) {
                let minVal = parseInt(minPriceSlider.value);
                let maxVal = parseInt(maxPriceSlider.value);
                
                if (maxVal - minVal < priceGap) {
                    if (event && event.target === minPriceSlider) {
                        minPriceSlider.value = maxVal - priceGap;
                    } else {
                        maxPriceSlider.value = minVal + priceGap;
                    }
                }
                
                minPriceDisplay.textContent = formatPriceSimple(minPriceSlider.value);
                maxPriceDisplay.textContent = formatPriceSimple(maxPriceSlider.value);
                const minPercent = ((minPriceSlider.value - minPriceSlider.min) / (minPriceSlider.max - minPriceSlider.min)) * 100;
                const maxPercent = ((maxPriceSlider.value - maxPriceSlider.min) / (maxPriceSlider.max - maxPriceSlider.min)) * 100;
                priceSliderRange.style.left = `${minPercent}%`;
                priceSliderRange.style.right = `${100 - maxPercent}%`;
            }
            
            function setupRatingSlider() {
                minRatingSlider.min = 0; maxRatingSlider.min = 0;
                minRatingSlider.max = 5; maxRatingSlider.max = 5;
                minRatingSlider.step = 0.1; maxRatingSlider.step = 0.1;
                minRatingSlider.value = 0; maxRatingSlider.value = 5;

                minRatingSlider.addEventListener('input', updateRatingSliderVisuals);
                maxRatingSlider.addEventListener('input', updateRatingSliderVisuals);
                minRatingSlider.addEventListener('change', handleSearch);
                maxRatingSlider.addEventListener('change', handleSearch);
                updateRatingSliderVisuals();
            }

            function updateRatingSliderVisuals(event) {
                let minVal = parseFloat(minRatingSlider.value);
                let maxVal = parseFloat(maxRatingSlider.value);

                if (maxVal - minVal < ratingGap) {
                    if (event && event.target === minRatingSlider) {
                        minRatingSlider.value = (maxVal - ratingGap).toFixed(1);
                    } else {
                        maxRatingSlider.value = (minVal + ratingGap).toFixed(1);
                    }
                }
                
                minRatingDisplay.textContent = parseFloat(minRatingSlider.value).toFixed(1);
                maxRatingDisplay.textContent = parseFloat(maxRatingSlider.value).toFixed(1);
                const minPercent = (minRatingSlider.value / minRatingSlider.max) * 100;
                const maxPercent = (maxRatingSlider.value / maxRatingSlider.max) * 100;
                ratingSliderRange.style.left = `${minPercent}%`;
                ratingSliderRange.style.right = `${100 - maxPercent}%`;
            }

            function renderContent() {
                const searchTerm = searchInput.value.toLowerCase();
                const minPriceValue = parseInt(minPriceSlider.value);
                const maxPriceValue = parseInt(maxPriceSlider.value);
                const minRatingValue = parseFloat(minRatingSlider.value);
                const maxRatingValue = parseFloat(maxRatingSlider.value);

                let filtered = allData.filter(item => {
                    const matchesSearch = item.name.toLowerCase().includes(searchTerm) || item.lokasi.toLowerCase().includes(searchTerm);
                    const matchesCategory = selectedCategory === 'All' || item.type === selectedCategory;
                    const matchesPrice = item.harga === null || (item.harga >= minPriceValue && item.harga <= maxPriceValue);
                    const matchesRating = item.rating === null || (item.rating >= minRatingValue && item.rating <= maxRatingValue);
                    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
                });

                if (filtered.length === 0) {
                    displayNoResults();
                    return;
                }

                const totalPages = Math.ceil(filtered.length / itemsPerPage);
                const start = (currentPage - 1) * itemsPerPage;
                const paginatedItems = filtered.slice(start, start + itemsPerPage);

                gridContainer.innerHTML = paginatedItems.map(item => createCard(item)).join('');
                renderPagination(totalPages);
            }
            
            function createCard(item) {
                let priceText = item.harga > 0 ? formatPrice(item.harga) : 'Gratis';
                if (item.type === 'Hotel') priceText += ' / malam';
                
                let iconClass = 'fa-map-location-dot';
                if(item.type === 'Hotel') iconClass = 'fa-bed';
                if(item.type === 'Kuliner') iconClass = 'fa-utensils';

                return `
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col animate-fade-in">
                    <div class="relative h-56 overflow-hidden">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                        <span class="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            <i class="fa-solid ${iconClass} mr-1.5"></i>${item.type}
                        </span>
                    </div>
                    <div class="p-5 flex flex-col justify-between flex-grow">
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 mb-1 truncate" title="${item.name}">${item.name}</h3>
                            <div class="flex items-center gap-2 text-slate-500 text-sm mb-3">
                                <i class="fa-solid fa-location-dot text-primary"></i>
                                <span>${item.lokasi}</span>
                            </div>
                            <p class="text-slate-600 text-sm mb-4 line-clamp-2 h-10">${item.description}</p>
                        </div>
                        <div class="flex items-end justify-between mt-auto pt-4 border-t border-slate-100">
                            <div class="flex items-center gap-2 text-sm text-slate-600">
                                <div class="flex items-center gap-1 text-primary">${generateStars(item.rating)}</div>
                                <span class="font-semibold">${item.rating || 'N/A'}</span>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold text-primary-dark">${priceText}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
            }

            function renderPagination(totalPages) {
                if (totalPages <= 1) { paginationContainer.innerHTML = ''; return; }
                
                let paginationHTML = `<button data-page="${currentPage - 1}" class="pagination-arrow h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
                
                let pages = [];
                if (totalPages <= 5) {
                    for (let i = 1; i <= totalPages; i++) pages.push(i);
                } else {
                    pages.push(1);
                    if (currentPage > 3) pages.push('...');
                    if (currentPage === totalPages) pages.push(currentPage - 2);
                    if (currentPage > 2) pages.push(currentPage - 1);
                    if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
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
                addPaginationListeners();
            }
            
            function addPaginationListeners() {
                document.querySelectorAll('.pagination-button, .pagination-arrow').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const page = parseInt(e.currentTarget.dataset.page);
                        if (page) {
                            currentPage = page;
                            renderContent();
                            window.scrollTo({ top: document.getElementById('grid-container').offsetTop - 100, behavior: 'smooth' });
                        }
                    });
                });
            }

            function displayNoResults() {
                gridContainer.innerHTML = `<div class="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-slate-500 py-16"><i class="fa-solid fa-map-location-dot text-7xl text-slate-300 mb-6"></i><h3 class="text-2xl font-bold mb-2 text-slate-700">Tidak ada lokasi yang ditemukan</h3><p class="text-md">Coba ubah filter atau kata kunci pencarian Anda.</p></div>`;
                paginationContainer.innerHTML = '';
            }
            
            function generateStars(rating) {
                if (!rating) return '<span class="text-xs text-slate-400">N/A</span>';
                let starsHTML = '';
                for (let i = 0; i < Math.floor(rating); i++) starsHTML += '<i class="fa-solid fa-star"></i>';
                if (rating % 1 >= 0.5) starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
                for (let i = 0; i < 5 - Math.ceil(rating); i++) starsHTML += '<i class="fa-regular fa-star"></i>';
                return starsHTML;
            }
            
            function formatPrice(price) {
                if (price === null) return '';
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
            }
            
            function formatPriceSimple(price) {
                price = Number(price);
                if (price >= 1000000) return `Rp ${(price / 1000000).toFixed(1).replace('.0', '')}jt`;
                if (price >= 1000) return `Rp ${Math.round(price / 1000)}rb`;
                return `Rp ${price}`;
            }
            
            function handleSearch() {
                currentPage = 1;
                renderContent();
            }

            searchInput.addEventListener('input', handleSearch);

            populateCategories();
            setupPriceSlider();
            setupRatingSlider();
            renderContent();
        });