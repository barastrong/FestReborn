document.addEventListener('DOMContentLoaded', () => {
    let allData = [
        { type: 'Destinasi', name: "Kampung Batik Jetis", lokasi: "Jetis, Sidoarjo", category: "Budaya", image: "https://cdn.ngopibareng.id/uploads/2023/2023-09-03/kampung-batik-jetis-destinasi-umkm-lokal-di-gelaran-porprov--01", rating: 4.6, harga: 5000, description: "Jelajahi pusat kerajinan batik tulis khas Sidoarjo dengan motif yang unik dan penuh warna. Lihat langsung proses pembuatan dan beli oleh-oleh otentik." },
        { type: 'Destinasi', name: "Candi Pari", lokasi: "Porong, Sidoarjo", category: "Sejarah", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", rating: 4.7, harga: 10000, description: "Saksikan kemegahan peninggalan arsitektur era Majapahit. Candi ini menawarkan suasana tenang dan spot foto yang instagramable." },
        { type: 'Destinasi', name: "Pulau Sarinah", lokasi: "Tlocor, Sidoarjo", category: "Alam", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800", rating: 4.5, harga: 25000, description: "Nikmati keindahan alam pesisir dengan hutan mangrove yang asri. Cocok untuk bersantai, memancing, atau sekadar menikmati pemandangan laut." },
        { type: 'Destinasi', name: "Delta Fishing", lokasi: "Prasung, Buduran", category: "Rekreasi", image: "https://i.ytimg.com/vi/t27QPt90skk/maxresdefault.jpg", rating: 4.4, harga: 30000, description: "Tempat rekreasi keluarga yang menyediakan kolam pemancingan, taman bermain, dan aneka wahana air yang seru untuk anak-anak." },
        { type: 'Destinasi', name: "Museum Mpu Tantular", lokasi: "Buduran, Sidoarjo", category: "Edukasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGn6S1-Lm5uyOc2JP8-phj8Tn0ljv8s3kug&s", rating: 4.6, harga: 4000, description: "Museum negeri yang menyimpan ribuan koleksi benda bersejarah dari berbagai era, mulai dari prasejarah hingga masa kemerdekaan." },
        { type: 'Destinasi', name: "Alun-Alun Sidoarjo", lokasi: "Pusat Kota, Sidoarjo", category: "Rekreasi", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/29/taman-alun.jpg", rating: 4.5, harga: 0, description: "Jantung kota Sidoarjo yang ramai, tempat berkumpul warga untuk bersantai, berolahraga, dan menikmati aneka jajanan kaki lima di malam hari." },
        { type: 'Destinasi', name: "Monumen Jayandaru", lokasi: "Alun-Alun, Sidoarjo", category: "Sejarah", image: "https://travelspromo.com/wp-content/uploads/2021/12/Suasana-malam-di-Monumen-Jayandaru.jpg", rating: 4.7, harga: 0, description: "Ikon modern Sidoarjo berupa monumen udang dan bandeng yang megah. Menjadi spot foto favorit di pusat kota, terutama saat malam hari." },
        { type: 'Hotel', name: "Hotel Majapahit Surabaya", lokasi: "Jl. Tunjungan No.65, Surabaya", rating: 4.8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", harga: 1500000, description: "Hotel mewah dengan arsitektur kolonial yang memukau, menawarkan pengalaman menginap tak terlupakan dengan fasilitas lengkap." },
        { type: 'Hotel', name: "Ibis Styles Surabaya Jemursari", lokasi: "Jl. Jemursari No.118-120, Surabaya", rating: 4.5, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800", harga: 450000, description: "Hotel modern dengan desain colorful, cocok untuk traveler muda yang mencari kenyamanan dengan harga terjangkau." },
        { type: 'Hotel', name: "Bumi Surabaya City Resort", lokasi: "Jl. Jemur Andayani No.67, Surabaya", rating: 4.6, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800", harga: 850000, description: "Resort hotel dengan suasana tropis di tengah kota, menawarkan ketenangan dan relaksasi dengan taman yang asri." },
        { type: 'Hotel', name: "The Westin Surabaya", lokasi: "Jl. Mayjen Sungkono No.106, Surabaya", rating: 4.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800", harga: 2200000, description: "Hotel premium dengan standar internasional, menawarkan luxury experience dengan pemandangan kota yang spektakuler." },
        { type: 'Hotel', name: "Sheraton Surabaya Hotel & Towers", lokasi: "Jl. Embong Malang No.25-31, Sidoarjo", rating: 4.7, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800", harga: 1600000, description: "Hotel dengan reputasi excellent, menawarkan refined elegance dan top-notch service di pusat kota." },
        { type: 'Hotel', name: "RedDoorz near Ciputra World", lokasi: "Jl. Mayjen Sungkono, Surabaya", rating: 4.2, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800", harga: 200000, description: "Akomodasi budget dengan lokasi dekat mall. Fasilitas dasar namun bersih dan nyaman untuk backpackers." },
        { type: 'Hotel', name: "Vasa Hotel Surabaya", lokasi: "Jl. Mayjen Sungkono No.16-18, Surabaya", rating: 4.5, image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800", harga: 750000, description: "Hotel dengan desain kontemporer yang stylish, menyediakan kamar nyaman dengan pemandangan kota dari rooftop restaurant." },
        { type: 'Kuliner', name: "Sentra Kuliner G-Walk", lokasi: "Citraland, Surabaya", category: "Food Court", image: "https://cdn.antaranews.com/cache/1200x800/2021/07/20/SWK-surabaya_1.jpeg", rating: 4.5, harga: 50000, description: "Pusat jajanan malam yang luas dengan ratusan pilihan tenant makanan, mulai dari masakan lokal hingga internasional." },
        { type: 'Kuliner', name: "Depot Bu Rudy", lokasi: "Dharmahusada, Surabaya", category: "Oleh-Oleh", image: "https://media.suara.com/pictures/653x366/2022/09/12/13514-depot-bu-rudy.jpg", rating: 4.8, harga: 75000, description: "Terkenal dengan sambal bawangnya yang legendaris, tempat ini juga menyediakan aneka masakan rumahan dan oleh-oleh khas Surabaya." },
        { type: 'Kuliner', name: "Soto Ayam Lamongan Cak Har", lokasi: "Jl. Dr. Ir. H. Soekarno, Surabaya", category: "Warung Soto", image: "https://img.inews.co.id/media/822/files/inews_new/2020/12/10/soto.jpg", rating: 4.4, harga: 25000, description: "Warung soto ayam yang tidak pernah sepi. Dikenal dengan kuah beningnya yang gurih dan taburan koya yang melimpah." },
        { type: 'Kuliner', name: "Lontong Balap Pak Gendut", lokasi: "Kranggan, Surabaya", category: "Kaki Lima", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Lontong_Balap.jpg", rating: 4.4, harga: 20000, description: "Menyajikan lontong balap otentik khas Surabaya dengan lentho, tauge, dan sambal petis yang mantap." },
        { type: 'Kuliner', name: "Sate Klopo Ondomohen", lokasi: "Genteng, Surabaya", category: "Sate", image: "https://img.inews.co.id/media/822/files/inews_new/2019/06/15/sate_klopo.jpg", rating: 4.8, harga: 40000, description: "Sate ayam unik yang dibakar dengan parutan kelapa, memberikan aroma dan rasa yang khas dan sangat lezat." },
    ];
    
    // --- FUNGSI & INISIALISASI DASAR ---
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle(allData);
    
    let currentPage = 1;
    const itemsPerPage = 9;
    const gridContainer = document.getElementById('grid-container');
    const paginationContainer = document.getElementById('pagination');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const ratingSortFilter = document.getElementById('rating-sort');

    // --- LOGIKA SLIDER KUSTOM ---
    const minSlider = document.getElementById('min-price-slider');
    const maxSlider = document.getElementById('max-price-slider');
    const minPriceDisplay = document.getElementById('min-price-display');
    const maxPriceDisplay = document.getElementById('max-price-display');
    const sliderRange = document.getElementById('price-slider-range');
    const priceGap = 50000;

    const prices = allData.map(item => item.harga).filter(harga => harga !== null);
    const minPrice = 0;
    const maxPrice = Math.max(...prices, 2500000);

    // Setup nilai awal slider
    minSlider.min = maxSlider.min = minPrice;
    minSlider.max = maxSlider.max = maxPrice;
    minSlider.value = minPrice;
    maxSlider.value = maxPrice;

    function updateSliderVisuals() {
        const minVal = parseInt(minSlider.value);
        const maxVal = parseInt(maxSlider.value);
        
        // Mencegah slider saling menimpa
        if (maxVal - minVal < priceGap) {
            if (event.target.id === "min-price-slider") {
                minSlider.value = maxVal - priceGap;
            } else {
                maxSlider.value = minVal + priceGap;
            }
        }
        
        // Update display text dan posisi range bar
        minPriceDisplay.textContent = formatPriceSimple(minSlider.value);
        maxPriceDisplay.textContent = formatPriceSimple(maxSlider.value);
        const minPercent = ((minSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
        const maxPercent = ((maxSlider.value - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;
        sliderRange.style.left = `${minPercent}%`;
        sliderRange.style.right = `${100 - maxPercent}%`;
    }

    minSlider.addEventListener('input', updateSliderVisuals);
    maxSlider.addEventListener('input', updateSliderVisuals);
    minSlider.addEventListener('change', handleSearch);
    maxSlider.addEventListener('change', handleSearch);
    updateSliderVisuals(); // Panggil sekali untuk setup awal

    // --- FUNGSI RENDER UTAMA ---
    function renderContent() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const ratingSort = ratingSortFilter.value;
        const minPriceValue = parseInt(minSlider.value);
        const maxPriceValue = parseInt(maxSlider.value);

        let filtered = allData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) || item.lokasi.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'All' || item.type === selectedCategory;
            const matchesPrice = item.harga === null || (item.harga >= minPriceValue && item.harga <= maxPriceValue);
            return matchesSearch && matchesCategory && matchesPrice;
        });

        if (ratingSort !== 'default') {
            filtered.sort((a, b) => {
                const ratingA = a.rating || 0;
                const ratingB = b.rating || 0;
                return ratingSort === 'high' ? ratingB - ratingA : ratingA - ratingB;
            });
        }

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
    
    // --- SISA FUNGSI PEMBANTU (TIDAK BERUBAH) ---
    function createCard(item) {
        let detailsHtml = `
            <p class="text-slate-500 text-sm mb-4 line-clamp-2 h-10">${item.description}</p>
            <div class="flex items-center justify-between">
                <div>
                    <div class="flex items-center gap-2 text-sm text-slate-600">
                        <div class="flex items-center gap-1 text-primary">${generateStars(item.rating)}</div>
                        <span class="font-semibold">${item.rating || 'N/A'}</span>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-lg font-bold text-primary-dark">${item.harga !== null && item.harga > 0 ? formatPrice(item.harga) : ''}</p>
                    <span class="text-xs text-slate-500">${item.harga !== null && item.type === 'Hotel' ? 'per malam' : ''}</span>
                    <span class="text-xs text-slate-500">${item.harga !== null && item.type !== 'Hotel' && item.harga > 0 ? '/ orang' : ''}</span>
                </div>
            </div>`;
        return `<div class="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 card-hover border-2 border-transparent hover:border-primary flex flex-col"><div class="relative h-56 overflow-hidden"><img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-300"><span class="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">${item.type}</span></div><div class="p-5 flex flex-col justify-between flex-grow"><div><h3 class="text-lg font-bold text-slate-800 mb-1 truncate">${item.name}</h3><div class="flex items-center gap-2 text-slate-500 text-sm mb-3"><i class="fa-solid fa-location-dot text-primary"></i><span>${item.lokasi}</span></div></div><div>${detailsHtml}</div></div></div>`;
    }

    function renderPagination(totalPages) {
        if (totalPages <= 1) { paginationContainer.innerHTML = ''; return; }
        let paginationHTML = `<button data-page="${currentPage - 1}" class="pagination-arrow" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                paginationHTML += `<button data-page="${i}" class="pagination-button ${i === currentPage ? 'active' : ''}">${i}</button>`;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                paginationHTML += `<span class="text-slate-400 px-2">...</span>`;
            }
        }
        paginationHTML += `<button data-page="${currentPage + 1}" class="pagination-arrow" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
        paginationContainer.innerHTML = paginationHTML;
        addPaginationListeners();
    }
    
    function addPaginationListeners() {
        document.querySelectorAll('.pagination-button, .pagination-arrow').forEach(button => {
            button.addEventListener('click', (e) => {
                const page = parseInt(e.currentTarget.dataset.page);
                if (!isNaN(page)) {
                    currentPage = page;
                    renderContent();
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                }
            });
        });
    }

    function displayNoResults() {
        gridContainer.innerHTML = `<div class="col-span-1 md:col-span-2 lg:col-span-3 text-center text-slate-500 py-16"><i class="fa-solid fa-map-location-dot text-7xl text-slate-300 mb-6"></i><h3 class="text-2xl font-bold mb-2 text-slate-700">Tidak ada lokasi yang ditemukan</h3><p class="text-md text-slate-500">Coba ubah filter atau kata kunci pencarian Anda.</p></div>`;
        paginationContainer.innerHTML = '';
    }
    
    function generateStars(rating) {
        if (!rating) return '<span class="text-xs text-slate-400">Belum ada rating</span>';
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
        if (price >= 1000000) return `Rp ${(price / 1000000).toFixed(1).replace('.0', '')}jt`;
        if (price >= 1000) return `Rp ${(price / 1000).toFixed(0)}rb`;
        return `Rp ${price}`;
    }
    
    function handleSearch() {
        currentPage = 1;
        renderContent();
    }

    searchInput.addEventListener('input', handleSearch);
    categoryFilter.addEventListener('change', handleSearch);
    ratingSortFilter.addEventListener('change', handleSearch);

    renderContent();
});