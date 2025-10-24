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
    
    const hotels = [
        { id: "hotel-majapahit-surabaya", name: "Hotel Majapahit Surabaya", lokasi: "Jl. Tunjungan No.65, Surabaya", rating: 4.8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", description: "Hotel mewah dengan arsitektur kolonial yang memukau, menawarkan pengalaman menginap tak terlupakan dengan fasilitas lengkap termasuk kolam renang, spa, dan restoran fine dining." },
        { id: "ibis-styles-surabaya-jemursari", name: "Ibis Styles Surabaya Jemursari", lokasi: "Jl. Jemursari No.118-120, Surabaya", rating: 4.5, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800", description: "Hotel modern dengan desain colorful dan vibrant, cocok untuk traveler muda yang mencari kenyamanan dengan harga terjangkau. Dilengkapi dengan breakfast buffet yang lezat." },
        { id: "bumi-surabaya-city-resort", name: "Bumi Surabaya City Resort", lokasi: "Jl. Jemur Andayani No.67, Surabaya", rating: 4.6, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800", description: "Resort hotel dengan suasana tropis di tengah kota, menawarkan ketenangan dan relaksasi. Fasilitas lengkap dengan kolam renang outdoor, gym, dan taman yang asri." },
        { id: "novotel-surabaya-hotel-suites", name: "Novotel Surabaya Hotel & Suites", lokasi: "Jl. Ngagel No.173-175, Surabaya", rating: 4.7, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800", description: "Hotel bintang 4 dengan lokasi strategis, menyediakan kamar yang luas dan nyaman. Perfect untuk business travelers dengan meeting rooms dan business center yang modern." },
        { id: "the-westin-surabaya", name: "The Westin Surabaya", lokasi: "Jl. Mayjen Sungkono No.106, Surabaya", rating: 4.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800", description: "Hotel premium dengan standar internasional, menawarkan luxury experience dengan kamar super luas, bathroom mewah, dan pemandangan kota yang spektakuler dari rooftop bar." },
        { id: "favehotel-graha-pena-surabaya", name: "Favehotel Graha Pena Surabaya", lokasi: "Jl. A. Yani No.288, Surabaya", rating: 4.3, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800", description: "Budget hotel dengan fasilitas memadai dan lokasi strategis dekat dengan pusat bisnis. Kamar bersih dan nyaman dengan WiFi cepat, cocok untuk short stay." },
        { id: "jw-marriott-hotel-surabaya", name: "JW Marriott Hotel Surabaya", lokasi: "Jl. Embong Malang No.85-89, Surabaya", rating: 4.8, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800", description: "Luxury hotel dengan service excellent, interior mewah, dan lokasi prime di pusat kota. Dilengkapi dengan sky lounge, infinity pool, dan ballroom untuk events besar." },
        { id: "swiss-belinn-manyar-surabaya", name: "Swiss-Belinn Manyar Surabaya", lokasi: "Jl. Manyar Kertoarjo No.44, Surabaya", rating: 4.4, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800", description: "Hotel modern dengan konsep minimalis yang nyaman, menyediakan kamar dengan interior smart dan functional. Breakfast menu bervariasi dengan pilihan western dan local cuisine." },
        { id: "sheraton-surabaya-hotel-towers", name: "Sheraton Surabaya Hotel & Towers", lokasi: "Jl. Embong Malang No.25-31, Sidoarjo", rating: 4.7, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800", description: "Hotel established dengan reputasi excellent, menawarkan refined elegance dan top-notch service. Executive lounge dengan complimentary drinks dan canapés setiap evening." },
        { id: "reddoorz-near-ciputra-world-surabaya", name: "RedDoorz near Ciputra World Surabaya", lokasi: "Jl. Mayjen Sungkono, Surabaya", rating: 4.2, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800", description: "Budget accommodation dengan lokasi dekat mall dan entertainment center. Basic facilities tapi clean dan comfortable, perfect untuk backpackers dan budget travelers." },
        { id: "vasa-hotel-surabaya", name: "Vasa Hotel Surabaya", lokasi: "Jl. Mayjen Sungkono No.16-18, Surabaya", rating: 4.5, image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800", description: "Hotel dengan desain kontemporer yang stylish, menyediakan comfortable rooms dengan city view. Rooftop restaurant menyajikan local dan international dishes dengan view panoramic." },
        { id: "santika-premiere-gubeng-surabaya", name: "Santika Premiere Gubeng Surabaya", lokasi: "Jl. Raya Gubeng No.54, Surabaya", rating: 4.6, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", description: "Hotel dengan Indonesian hospitality yang warm, menawarkan spacious rooms dan complete amenities. Pool area yang cozy perfect untuk relax setelah long day exploring the city." }
    ];

    let currentPage = 1;
    const itemsPerPage = 8;
    const gridContainer = document.getElementById('hotels-grid');
    const paginationContainer = document.getElementById('pagination');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    // Rating Slider Elements
    const minRatingSlider = document.getElementById('min-rating-slider');
    const maxRatingSlider = document.getElementById('max-rating-slider');
    const minRatingDisplay = document.getElementById('min-rating-display');
    const maxRatingDisplay = document.getElementById('max-rating-display');
    const ratingSliderRange = document.getElementById('rating-slider-range');
    const ratingGap = 0.5;

    function setupRatingSlider() {
        minRatingSlider.min = 0;
        maxRatingSlider.min = 0;
        minRatingSlider.max = 5;
        maxRatingSlider.max = 5;
        minRatingSlider.step = 0.1;
        maxRatingSlider.step = 0.1;
        minRatingSlider.value = 0;
        maxRatingSlider.value = 5;

        minRatingSlider.addEventListener('input', updateRatingSliderVisuals);
        maxRatingSlider.addEventListener('input', updateRatingSliderVisuals);
        minRatingSlider.addEventListener('change', handleSearch);
        maxRatingSlider.addEventListener('change', handleSearch);
        updateRatingSliderVisuals();
    }

    function updateRatingSliderVisuals() {
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
        const minRatingValue = parseFloat(minRatingSlider.value);
        const maxRatingValue = parseFloat(maxRatingSlider.value);

        let filtered = hotels.filter(h =>
            (h.name.toLowerCase().includes(searchTerm) || h.lokasi.toLowerCase().includes(searchTerm)) &&
            (h.rating >= minRatingValue && h.rating <= maxRatingValue)
        );
        
        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div class="col-span-1 lg:col-span-2 text-center text-slate-500 py-20">
                    <div class="flex justify-center mb-6">
                        <div class="bg-slate-100 rounded-full p-8">
                            <i class="fa-solid fa-hotel text-6xl text-slate-300"></i>
                        </div>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 text-slate-700">Oops! Tidak ada hasil ditemukan</h3>
                    <p class="text-lg text-slate-500 mb-6">Coba gunakan kata kunci atau filter yang berbeda.</p>
                    <button onclick="document.getElementById('search-input').value=''; document.getElementById('min-rating-slider').value=0; document.getElementById('max-rating-slider').value=5; handleSearch();" class="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
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
            const fullStars = Math.floor(item.rating);
            const hasHalfStar = item.rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            
            let starsHTML = '';
            for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fa-solid fa-star"></i>';
            if (hasHalfStar) starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
            for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="fa-regular fa-star"></i>';
            
            return `
            <a href="detailHotel.html?id=${item.id}" class="block card-hover">
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 border-4 border-white flex flex-col md:flex-row h-full">
                    <div class="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500">
                    </div>
                    <div class="p-6 md:w-3/5 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-slate-800 mb-2">${item.name}</h3>
                            <div class="flex items-center gap-2 text-slate-600 mb-3">
                                <i class="fa-solid fa-location-dot text-primary"></i>
                                <span class="text-sm">${item.lokasi}</span>
                            </div>
                            <div class="flex items-center gap-2 mb-4">
                                <div class="flex items-center gap-1 text-primary text-sm">${starsHTML}</div>
                                <span class="text-slate-600 text-sm font-semibold">${item.rating}</span>
                            </div>
                            <p class="text-slate-600 text-sm mb-4 line-clamp-2">${item.description}</p>
                        </div>
                        <span class="w-full mt-auto text-center bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
                            Lihat Detail
                        </span>
                    </div>
                </div>
            </a>
        `}).join('');
        
        let paginationHTML = '';
        if (totalPages > 1) {
            paginationHTML += `
            <button data-page="${currentPage - 1}" class="pagination-arrow h-11 w-11 rounded-xl bg-white hover:bg-slate-100 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-700" ${currentPage === 1 ? 'disabled' : ''}>
                <i class="fa-solid fa-chevron-left"></i>
            </button>`;
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    paginationHTML += `
                    <button data-page="${i}" class="pagination-button h-11 w-11 rounded-xl font-bold transition-all shadow-md hover:shadow-lg ${i === currentPage ? 'bg-primary text-white scale-110' : 'bg-white text-slate-700 hover:bg-slate-100'}">${i}</button>
                    `;
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

    window.handleSearch = () => {
        currentPage = 1;
        renderContent();
        updateRatingSliderVisuals();
    };
    
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    setupRatingSlider();
    renderContent();
});