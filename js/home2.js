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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-primary/95', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-primary/95', 'backdrop-blur-sm', 'shadow-lg');
        }
    });

    const renderGrid = (containerId, items, generator) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = items.map(generator).join('');
        }
    };

    renderGrid('destinations-grid', destinations, dest => `
        <div class="w-72 md:w-80 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg overflow-hidden group flex-shrink-0 transition-all duration-300">
            <div class="h-56 md:h-64 overflow-hidden relative">
            <img src="${dest.image}" alt="${dest.name}" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-5 flex flex-col justify-between h-48">
            <div>
                <h3 class="text-xl font-bold text-primary-dark mb-2 uppercase truncate">${dest.name}</h3>
                <p class="text-slate-600 text-sm leading-relaxed line-clamp-3">${dest.description}</p>
            </div>
            <button class="mt-4 bg-primary hover:bg-accent text-white py-2 px-4 rounded-full text-sm font-semibold transition self-start">
                Lihat Selengkapnya
            </button>
            </div>
        </div>
    `);
    
    renderGrid('hotels-grid', hotels, hotel => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform hover:-translate-y-2 fade-in-up">
            <div class="h-56 overflow-hidden"><img src="${hotel.image}" alt="${hotel.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
            <div class="p-6 text-left">
                <h3 class="text-2xl font-bold text-primary-dark">${hotel.name}</h3>
                <p class="text-slate-500 font-semibold mb-3">${hotel.location}</p>
                <div class="flex items-center gap-1 text-yellow-400 mb-3">${'★'.repeat(Math.floor(hotel.rating))}${'☆'.repeat(5-Math.floor(hotel.rating))} <span class="ml-2 text-sm font-semibold text-slate-600">${hotel.rating}/5</span></div>
                <p class="text-slate-600 mb-4">${hotel.description}</p>
                <div class="text-right"><span class="text-2xl font-bold text-accent">${hotel.price}</span> <span class="text-slate-500">/malam</span></div>
            </div>
        </div>
    `);

    renderGrid('culinary-grid', culinaryItems, culinary => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform hover:-translate-y-2 fade-in-up">
            <div class="h-56 overflow-hidden"><img src="${culinary.image}" alt="${culinary.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
            <div class="p-6 text-left">
                <h3 class="text-2xl font-bold text-primary-dark">${culinary.name}</h3>
                <p class="text-slate-500 font-semibold mb-3">${culinary.location}</p>
                <p class="text-slate-600">${culinary.description}</p>
            </div>
        </div>
    `);

    renderGrid('transportation-grid', transportations, transport => `
        <div class="bg-white rounded-xl shadow-lg p-8 text-center group transition-transform hover:-translate-y-2 fade-in-up flex flex-col items-center">
             <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-white text-3xl group-hover:scale-110 transition-transform">${transport.icon}</div>
             <h3 class="text-xl font-bold text-primary-dark">${transport.name}</h3>
             <p class="text-slate-500 font-semibold text-base mb-3">${transport.provider}</p>
             <p class="text-slate-600 flex-grow mb-4">${transport.description}</p>
             <div class="text-2xl font-bold text-accent mt-auto">${transport.price} <span class="text-sm text-slate-500 font-normal">/hari</span></div>
        </div>
    `);
    
    renderGrid('souvenirs-grid', souvenirs, souvenir => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform hover:-translate-y-2 fade-in-up">
            <div class="h-56 overflow-hidden"><img src="${souvenir.image}" alt="${souvenir.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
            <div class="p-5 text-left">
                <h3 class="text-lg font-bold text-primary-dark">${souvenir.name}</h3>
                <p class="text-slate-600 mb-2">${souvenir.description}</p>
                <p class="font-bold text-accent text-xl">${souvenir.price}</p>
            </div>
        </div>
    `);
    
    const sliderContainer = document.getElementById('slider-container-destinasi');
    const slideLeftBtn = document.getElementById('slide-left-destinasi');
    const slideRightBtn = document.getElementById('slide-right-destinasi');

    const slide = (direction) => {
        if (sliderContainer) {
            const scrollAmount = direction * (sliderContainer.clientWidth * 0.7);
            sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    
    slideLeftBtn?.addEventListener('click', () => slide(-1));
    slideRightBtn?.addEventListener('click', () => slide(1));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});