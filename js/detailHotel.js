document.addEventListener('DOMContentLoaded', () => {

    const hotels = [
        { 
            id: "hotel-majapahit-surabaya",
            name: "Hotel Majapahit Surabaya", 
            lokasi: "Jl. Tunjungan No.65, Genteng, Surabaya 60275", 
            rating: 4.8, 
            images: [
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Hotel mewah dengan arsitektur kolonial yang memukau, menawarkan pengalaman menginap tak terlupakan dengan fasilitas lengkap termasuk kolam renang, spa, dan restoran fine dining.",
            phone: "6281234567890",
            gmapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.979021876257!2d112.7399518153681!3d-7.243003094772153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9429188339d%3A0x8233863252538965!2sHotel%20Majapahit%20Surabaya!5e0!3m2!1sen!2sid!4v1678886666666",
            mice: [
                {
                    roomName: "MAJAPAHIT BALLROOM",
                    setups: [
                        { type: 'U Shape', capacity: 60, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=U-Shape' },
                        { type: 'Classroom', capacity: 100, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Classroom' },
                        { type: 'Theater', capacity: 200, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 120, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' }
                    ]
                }
            ]
        },
        { 
            id: "the-westin-surabaya",
            name: "The Westin Surabaya", 
            lokasi: "Pakuwon Mall, Jl. Raya Lontar No.2, Surabaya 60216", 
            rating: 4.9, 
            images: [
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            ],
            description: "Hotel premium dengan standar internasional, menawarkan luxury experience dengan kamar super luas dan pemandangan kota yang spektakuler dari rooftop bar.",
            phone: "6281234567891",
            gmapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.653455088277!2d112.6896063153682!3d-7.279858994745856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc0df5a38a91%3A0x7c7336987340d87!2sThe%20Westin%20Surabaya!5e0!3m2!1sen!2sid!4v1678887777777",
            mice: [
                {
                    roomName: "GRAND BALLROOM",
                    setups: [
                        { type: 'Theater', capacity: 1500, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Theater' },
                        { type: 'Banquet Rounds', capacity: 800, icon: 'https://placehold.co/100x80/F5AD18/FFFFFF/png?text=Banquet' },
                    ]
                }
            ]
        },
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id');
    const hotel = hotels.find(h => h.id === hotelId);

    const mainContent = document.getElementById('main-content');
    const notFoundDiv = document.getElementById('not-found');

    if (!hotel) {
        mainContent.classList.add('hidden');
        notFoundDiv.classList.remove('hidden');
        return;
    }

    // --- Mengisi Konten ---

    document.title = `${hotel.name} - SidoDolan`;
    document.getElementById('hotel-name-top').textContent = hotel.name;
    document.getElementById('hotel-description').textContent = hotel.description;

    const ratingContainer = document.getElementById('rating-container');
    const fullStars = Math.floor(hotel.rating);
    const hasHalfStar = hotel.rating % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fa-solid fa-star text-primary"></i>';
    if (hasHalfStar) starsHTML += '<i class="fa-solid fa-star-half-stroke text-primary"></i>';
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) starsHTML += '<i class="fa-regular fa-star text-primary"></i>';
    ratingContainer.innerHTML = `<div class="flex items-center gap-2"><span class="bg-primary/10 text-primary-dark font-bold px-3 py-1 rounded-md text-sm">Bintang ${fullStars}</span><div class="flex items-center text-xl">${starsHTML}</div></div>`;

    document.getElementById('address-container').innerHTML = `
        <p class="text-sm font-semibold text-slate-500 mb-1">Alamat</p>
        <p class="font-bold text-primary-dark">${hotel.lokasi}</p>
    `;

    const mainImage = document.getElementById('main-image');
    const thumbnailGrid = document.getElementById('thumbnail-grid');
    mainImage.src = hotel.images[0];
    thumbnailGrid.innerHTML = hotel.images.map((imgSrc, index) => `
        <img src="${imgSrc}" alt="Thumbnail ${index + 1}" class="w-full h-full object-cover rounded-md cursor-pointer border-4 border-transparent opacity-70 hover:opacity-100 transition-all aspect-video ${index === 0 ? 'thumbnail-active' : ''}" data-index="${index}">
    `).join('');

    thumbnailGrid.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const index = e.target.dataset.index;
            mainImage.src = hotel.images[index];
            document.querySelectorAll('#thumbnail-grid img').forEach(t => t.classList.remove('thumbnail-active'));
            e.target.classList.add('thumbnail-active');
        }
    });

    const miceContainer = document.getElementById('mice-accordion-container');
    if (hotel.mice && hotel.mice.length > 0) {
        miceContainer.innerHTML = hotel.mice.map(room => {
            const setupsHtml = room.setups.map(setup => `
                <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                    <div class="text-left">
                        <p class="font-bold text-slate-800">${setup.type}</p>
                        <span class="text-sm font-semibold text-white bg-primary-dark px-3 py-1 rounded-full mt-2 inline-block">${setup.capacity} Orang</span>
                    </div>
                    <img src="${setup.icon}" alt="${setup.type} layout" class="w-24 h-auto rounded-md bg-white p-1 shadow-sm">
                </div>
            `).join('');
            return `
                <div class="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                    <button class="accordion-toggle w-full flex items-center justify-between p-5 text-left font-bold text-lg text-primary-dark">
                        <span>${room.roomName}</span>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content">
                        <div class="p-5 border-t border-slate-200 space-y-3">${setupsHtml}</div>
                    </div>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.accordion-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('i');
                content.classList.toggle('open');
                icon.classList.toggle('rotate-180');
            });
        });
    } else {
        document.getElementById('mice-section').classList.add('hidden');
    }

    document.getElementById('whatsapp-button').href = `https://wa.me/${hotel.phone}?text=Halo, saya tertarik untuk reservasi di ${hotel.name}.`;
    document.getElementById('hotel-gmap-embed').src = hotel.gmapEmbed;

    const pageUrl = window.location.href;
    const shareText = `Kunjungi ${hotel.name}, hotel keren di Sidoarjo!`;
    document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
});