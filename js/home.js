document.addEventListener('DOMContentLoaded', () => {
    // Data Destinasi
    const destinations = [
        { name: "Kampung Batik Jetis", description: "Pusat kerajinan batik tradisional dengan motif khas Sidoarjo yang memukau.", image: "../assets/batik-jetis.jpg" },
        { name: "Candi Pari", description: "Candi bersejarah dengan arsitektur megah dari era Majapahit.", image: "../assets/candi-pari.jpg" },
        { name: "Pulau Sarinah", description: "Destinasi wisata pantai dengan pemandangan laut yang menawan.", image: "../assets/pulau-sarinah.jpg" },
        { name: "Delta Fishing", description: "Tempat memancing keluarga dengan fasilitas lengkap dan pemandangan asri.", image: "https://i.ytimg.com/vi/t27QPt90skk/maxresdefault.jpg" },
    ];
    // Data Hotel
    const hotels = [
        { name: "Hotel Majapahit Suites", rating: 4.5, price: "Rp 450.000", location: "Pusat Kota Sidoarjo", description: "Hotel bintang 4 dengan fasilitas lengkap, kolam renang, dan restoran premium.", image: "https://media-cdn.tripadvisor.com/media/photo-s/12/b4/04/e3/presidential-suite.jpg" },
        { name: "Sidoarjo Plaza Hotel", rating: 4.0, price: "Rp 350.000", location: "Dekat Alun-Alun", description: "Penginapan nyaman dengan akses mudah ke berbagai destinasi wisata.", image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20019581-e23b984987221da36a81da8af060c636.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-180,pr-true,q-40,w-300" },
        { name: "Delta View Resort", rating: 4.8, price: "Rp 650.000", location: "Kawasan Wisata Delta", description: "Resort mewah dengan pemandangan alam yang spektakuler.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsotDciJ9jnauU1MmObvMUQ91nv3ZUwYMamA&s" },
    ];
    // Data Kuliner
    const culinaryItems = [
        { name: "Lontong Kupang Pak Misri", location: "Jl. Pahlawan No. 12", description: "Hidangan legendaris dengan kupang segar dan kuah gurih yang khas.", image: "../assets/lontong-kupang.jpg" },
        { name: "Bandeng Asap Bu Hadi", location: "Jl. Raya Porong", description: "Bandeng asap pilihan dengan rasa autentik dan bumbu rahasia.", image: "../assets/bandeng-asap.jpg" },
        { name: "Sate Kerang Asli Sidoarjo", location: "Kawasan Pasar Loak", description: "Sate kerang bakar dengan bumbu kacang spesial yang menggugah selera.", image: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/07/Sate-kerang-230910253.jpg" },
    ];
    // Data Transportasi
    const transportations = [
        { name: "Rental Mobil Keluarga", provider: "Delta Rent Car", price: "Rp 300.000", description: "Mobil terawat dengan driver berpengalaman, AC, dan asuransi lengkap.", icon: '<i class="fa-solid fa-car"></i>' },
        { name: "Rental Motor", provider: "Sidoarjo Motor Rental", price: "Rp 75.000", description: "Motor matic terbaru, hemat BBM, dan mudah dikendarai.", icon: '<i class="fa-solid fa-motorcycle"></i>' },
        { name: "Paket Wisata Mobil", provider: "Explore Sidoarjo Tour", price: "Rp 500.000", description: "Full day tour dengan mobil + driver + guide wisata profesional.", icon: '<i class="fa-solid fa-van-shuttle"></i>' },
    ];
    // Data Oleh-Oleh
    const souvenirs = [
        { name: "Kerupuk Udang Premium", price: "Rp 35.000", description: "Kerupuk udang asli Sidoarjo dengan udang pilihan, renyah dan gurih.", image: "https://image.tamarindindonesia.com/s3/productimages/webp/co240684/p1351023/w600-h600/2061d690-d7f9-402e-b543-59e740bd55ec.jpg" },
        { name: "Bandeng Presto", price: "Rp 45.000", description: "Bandeng presto lezat dengan duri lunak, siap santap.", image: "https://wiratech.co.id/wp-content/uploads/2023/12/Bandeng-Presto.jpg" },
        { name: "Batik Jetis Eksklusif", price: "Rp 250.000", description: "Kain batik tulis tangan dengan motif khas Sidoarjo.", image: "../assets/batik-jetis.jpg" },
        { name: "Petis Kupang Kemasan", price: "Rp 25.000", description: "Petis kupang asli untuk pelengkap masakan favorit.", image: "https://cf.shopee.co.id/file/8e14578cdd21a172785aefef87672b87" },
    ];

    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavPanel = document.getElementById('mobile-nav-panel');
    const closeMobileNavBtn = document.getElementById('close-mobile-nav');
    
    // Scrollbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-primary', 'shadow-lg', 'py-3');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('bg-primary', 'shadow-lg', 'py-3');
            navbar.classList.add('py-4');
        }
    });

    // Open Menu Navbar mobile
    const openMobileMenu = () => { mobileNav.classList.remove('opacity-0', 'pointer-events-none'); mobileNavPanel.classList.remove('translate-x-full'); document.body.classList.add('overflow-hidden'); };
    const closeMobileMenu = () => { mobileNav.classList.add('opacity-0', 'pointer-events-none'); mobileNavPanel.classList.add('translate-x-full'); document.body.classList.remove('overflow-hidden'); };

    hamburgerBtn.addEventListener('click', openMobileMenu);
    closeMobileNavBtn.addEventListener('click', closeMobileMenu);
    
    document.querySelectorAll('#mobile-nav .scroll-link').forEach(link => { link.addEventListener('click', closeMobileMenu); });
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', (e) => { e.preventDefault(); document.getElementById(link.dataset.target)?.scrollIntoView({ behavior: 'smooth' }); });
    });

    const renderGrid = (containerId, items, generator) => {
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = items.map(generator).join('');
    };

    //  Destinasi Content
    renderGrid('destinations-grid', destinations, (item) => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group fade-in-up flex flex-col">
            <div class="h-48 overflow-hidden"><img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></div>
            <div class="p-6 text-left flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2"><i class="fa-solid fa-map-pin text-accent"></i> ${item.name}</h3>
                <p class="text-slate-500 mb-4 flex-grow">${item.description}</p>
                <div class="mt-auto">
                    <button class="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">Lihat Detail</button>
                </div>
            </div>
        </div>`);

    //  Hotel Content
    renderGrid('hotels-grid', hotels, (item) => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl fade-in-up text-left">
            <div class="p-6">
                <h3 class="text-xl font-bold text-slate-800">${item.name}</h3>
                <p class="text-sm text-slate-500 mb-3"><i class="fa-solid fa-location-dot mr-1"></i> ${item.location}</p>
                <div class="flex items-center gap-1 text-yellow-400 mb-3">${Array.from({ length: 5 }).map((_, i) => `<i class="fa-solid fa-star ${i < Math.floor(item.rating) ? '' : 'text-gray-300'}"></i>`).join('')}<span class="ml-2 text-sm font-semibold text-slate-600">${item.rating}/5</span></div>
                <p class="text-slate-500 mb-4">${item.description}</p>
                <div class="text-2xl font-bold text-accent mb-4">${item.price}<span class="text-sm text-slate-500 font-normal">/malam</span></div>
                <button class="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">Pesan Sekarang</button>
            </div>
        </div>`);
    
    // Culinar Content
    renderGrid('culinary-grid', culinaryItems, (item) => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group fade-in-up flex flex-col">
            <div class="h-56 overflow-hidden"><img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></div>
            <div class="p-6 text-left flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2"><i class="fa-solid fa-utensils text-accent"></i> ${item.name}</h3>
                <p class="text-sm text-slate-500 mb-3">${item.location}</p>
                <p class="text-slate-500 mb-4 flex-grow">${item.description}</p>
                <div class="mt-auto">
                    <button class="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors">Lihat Menu</button>
                </div>
            </div>
        </div>`);

    // Transportasi Content
    renderGrid('transportation-grid', transportations, (item) => `
        <div class="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center fade-in-up">
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-white text-3xl">${item.icon}</div>
            <h3 class="text-xl font-bold text-slate-800">${item.name}</h3>
            <p class="text-slate-500 mb-3 text-base">${item.provider}</p>
            <p class="text-slate-500 mb-4 flex-grow">${item.description}</p>
            <div class="text-3xl font-bold text-accent mb-4 mt-auto">${item.price}<span class="text-sm text-slate-500 font-normal">/hari</span></div>
            <button class="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"><i class="fa-solid fa-phone mr-2"></i>Hubungi</button>
        </div>`);

    // Oleh-Oleh Content
    renderGrid('souvenirs-grid', souvenirs, (item) => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group fade-in-up flex flex-col">
            <div class="h-48 overflow-hidden"><img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></div>
            <div class="p-6 text-left flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2"><i class="fa-solid fa-gift text-accent"></i> ${item.name}</h3>
                <p class="text-xl font-bold text-accent mb-3">${item.price}</p>
                <p class="text-sm text-slate-500 mb-4 flex-grow">${item.description}</p>
                <div class="mt-auto">
                    <button class="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"><i class="fa-solid fa-shopping-bag mr-2"></i>Beli</button>
                </div>
            </div>
        </div>`);
        
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                entry.target.classList.add('is-visible'); 
                observer.unobserve(entry.target); 
            } 
        });
    }, { 
        threshold: 0.1 
    });
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});