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

    const kulinerData = {
        'sentra-kuliner-gwalk': {
            name: "Sentra Kuliner G-Walk",
            category: "Makanan",
            phone: "tel:+6281234567890",
            images: [
                "https://cdn.antaranews.com/cache/1200x800/2021/07/20/SWK-surabaya_1.jpeg",
                "https://www.sewamobil-surabaya.com/wp-content/uploads/2021/07/pazkul-sidoarjo-1024x640.jpg",
                "https://media-cdn.tripadvisor.com/media/photo-s/13/1d/15/d5/kolam-renang-ombak.jpg"
            ],
            contentBlocks: [
                { type: 'text', content: 'Sentra Kuliner G-Walk adalah pusat jajanan serba ada yang populer di Sidoarjo. Tempat ini menawarkan beragam pilihan makanan, mulai dari masakan tradisional Indonesia, Chinese food, hingga hidangan Barat.' },
                { type: 'image', images: ['https://www.sewamobil-surabaya.com/wp-content/uploads/2021/07/pazkul-sidoarjo-1024x640.jpg'] },
                { type: 'text', content: 'Dengan suasana yang ramai dan pilihan yang melimpah, G-Walk menjadi destinasi favorit bagi keluarga dan anak muda untuk berkumpul dan menikmati malam.' }
            ],
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.142079199695!2d112.71260907475876!3d-7.449624592576046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e12f6ffffffd%3A0x538ba79d3434117!2sCandi%20Pari!5e0!3m2!1sen!2sid!4v1716365453678!5m2!1sen!2sid",
            address: "Jl. Pahlawan No.1, Sidoarjo",
            openingHours: [
                { day: "Setiap Hari", time: "17:00 - 23:00" },
            ]
        },
    };

    const params = new URLSearchParams(window.location.search);
    const kulinerId = params.get('id');
    const data = kulinerData[kulinerId];
    const mainContent = document.getElementById('main-content');

    if (!data) {
        mainContent.innerHTML = `
            <div class="text-center py-20">
                <i class="fa-solid fa-utensils text-8xl text-slate-300 mb-6"></i>
                <h1 class="text-4xl font-bold text-slate-700 mb-4">Kuliner Tidak Ditemukan</h1>
                <p class="text-lg text-slate-500 mb-8">
                    Maaf, kuliner yang Anda cari tidak ada atau URL tidak valid.
                </p>
                <a href="kuliner.html"
                   class="bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark/90 transition-all">
                   Kembali ke Daftar Kuliner
                </a>
            </div>`;
        return;
    }

    document.title = `${data.name} - SidoDolan`;
    document.getElementById('destination-name').textContent = data.name;
    document.getElementById('destination-category').textContent = data.category;

    const phoneButton = document.getElementById('phone-button');
    if (data.phone) {
        phoneButton.href = data.phone;
        phoneButton.classList.remove('hidden');
        phoneButton.classList.add('flex');
    }

    document.getElementById('destination-address').textContent = data.address;
    document.getElementById('destination-gmap-embed').src = data.gmapEmbedUrl;
    document.getElementById('destination-hours').innerHTML = data.openingHours
        .map(item => `<div>${item.day}: ${item.time}</div>`)
        .join('');

    const descriptionSection = document.getElementById('description-section');
    const descriptionContainer = document.getElementById('description-content-container');

    if (data.contentBlocks && data.contentBlocks.length > 0) {
        descriptionSection.style.display = 'block';
        descriptionContainer.innerHTML = data.contentBlocks.map(block => {
            if (block.type === 'text') {
                return `<p class="text-slate-600 leading-loose">${block.content}</p>`;
            }
            if (block.type === 'image' && block.images && block.images.length > 0) {
                if (block.images.length === 1) {
                    return `
                        <div class="rounded-lg overflow-hidden shadow-md">
                            <img src="${block.images[0]}" class="w-full h-auto object-cover" alt="Ilustrasi deskripsi">
                        </div>`;
                } else {
                    const imageElements = block.images
                        .map(img => `<img src="${img}" class="w-full h-64 object-cover rounded-lg shadow-sm" alt="Ilustrasi deskripsi">`)
                        .join('');
                    return `<div class="grid grid-cols-2 gap-4">${imageElements}</div>`;
                }
            }
            return '';
        }).join('');
    } else {
        descriptionSection.style.display = 'none';
    }

    const mainImage = document.getElementById('main-image');
    const thumbnailGrid = document.getElementById('thumbnail-grid');
    mainImage.src = data.images[0];
    thumbnailGrid.innerHTML = data.images
        .map((imgSrc, index) => `
            <img src="${imgSrc}" data-index="${index}"
                 class="thumbnail-item w-full h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-primary transition-all opacity-70 hover:opacity-100"
                 alt="Thumbnail ${index + 1}">
        `)
        .join('');

    const thumbnails = document.querySelectorAll('.thumbnail-item');

    function setActiveThumbnail(index) {
        thumbnails.forEach(thumb => thumb.classList.remove('thumbnail-active'));
        const activeThumb = document.querySelector(`.thumbnail-item[data-index="${index}"]`);
        if (activeThumb) activeThumb.classList.add('thumbnail-active');
    }

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = thumb.dataset.index;
            mainImage.src = data.images[index];
            setActiveThumbnail(index);
        });
    });

    setActiveThumbnail(0);

    const pageUrl = window.location.href;
    const shareText = `Cicipi ${data.name} di Sidoarjo! Info lengkap di: ${pageUrl}`;

    document.getElementById('share-whatsapp').href =
        `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    document.getElementById('share-facebook').href =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    document.getElementById('share-twitter').href =
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(`Cicipi ${data.name} di Sidoarjo!`)}`;
});