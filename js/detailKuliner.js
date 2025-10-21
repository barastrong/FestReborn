document.addEventListener('DOMContentLoaded', () => {
    const kulinerData = {
        'sentra-kuliner-gwalk': {
            name: "Sentra Kuliner G-Walk",
            category: "Makanan",
            phone: "tel:+6281234567890",
            images: [
                "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
            ],
            contentBlocks:null,
            gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.142079199695!2d112.71260907475876!3d-7.449624592576046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e12f6ffffffd%3A0x538ba79d3434117!2sCandi%20Pari!5e0!3m2!1sen!2sid!4v1716365453678!5m2!1sen!2sid",
            address: "Desa Candi Pari, Porong, Sidoarjo",
            openingHours: [
                { day: "Senin - Jumat", time: "08:00 - 16:00" },
                { day: "Sabtu - Minggu", time: "07:00 - 17:00" }
            ]
        },
    };

    const params = new URLSearchParams(window.location.search);
    const kulinerId = params.get('id');
    const data = kulinerData[kulinerId];
    const mainContent = document.getElementById('main-content');
    if (!data) {
        mainContent.innerHTML = `<div class="text-center py-20"><i class="fa-solid fa-compass-slash text-8xl text-slate-300 mb-6"></i><h1 class="text-4xl font-bold text-slate-700 mb-4">Kuliner Tidak Ditemukan</h1><p class="text-lg text-slate-500 mb-8">Maaf, kuliner yang Anda cari tidak ada atau URL tidak valid.</p><a href="destination.html" class="bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark/90 transition-all">Kembali ke Daftar kuliner</a></div>`;
        return;
    }
    // Populate all data
    document.title = `${data.name} - SidoDolan`;
    document.getElementById('destination-name').textContent = data.name;
    document.getElementById('destination-category').textContent = data.category;
    
    const phoneButton = document.getElementById('phone-button');
    if(data.phone) {
        phoneButton.href = data.phone;
        phoneButton.classList.remove('hidden');
        phoneButton.classList.add('flex');
    }
    
    document.getElementById('destination-address').textContent = data.address;
    document.getElementById('destination-gmap-embed').src = data.gmapEmbedUrl;
    document.getElementById('destination-hours').innerHTML = data.openingHours.map(item => `<div>${item.day}: ${item.time}</div>`).join('');
    
    // Description Content Blocks
    const descriptionSection = document.getElementById('description-section');
    const descriptionContainer = document.getElementById('description-content-container');
    if (data.contentBlocks && data.contentBlocks.length > 0) {
        descriptionContainer.innerHTML = data.contentBlocks.map(block => {
            if (block.type === 'text') {
                return `<p class="text-slate-600 leading-loose">${block.content}</p>`;
            }
            if (block.type === 'image' && block.images && block.images.length > 0) {
                if (block.images.length === 1) {
                    return `<div class="rounded-lg overflow-hidden shadow-md"><img src="${block.images[0]}" class="w-full h-auto object-cover" alt="Ilustrasi deskripsi"></div>`;
                } else {
                    const imageElements = block.images.map(img => `<img src="${img}" class="w-full h-64 object-cover rounded-lg shadow-sm" alt="Ilustrasi deskripsi">`).join('');
                    return `<div class="grid grid-cols-2 gap-4">${imageElements}</div>`;
                }
            }
            return '';
        }).join('');
    } else {
        descriptionSection.style.display = 'none';
    }
    // Image Gallery
    const mainImage = document.getElementById('main-image');
    const thumbnailGrid = document.getElementById('thumbnail-grid');
    mainImage.src = data.images[0];
    thumbnailGrid.innerHTML = data.images.map((imgSrc, index) => `<img src="${imgSrc}" data-index="${index}" class="thumbnail-item w-full h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-primary transition-all opacity-70 hover:opacity-100" alt="Thumbnail ${index + 1}">`).join('');
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
    // Share Buttons
    const pageUrl = window.location.href;
    const shareText = `Kunjungi ${data.name} di Sidoarjo! Info lengkap di: ${pageUrl}`;
    document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(`Kunjungi ${data.name} di Sidoarjo!`)}`;
});