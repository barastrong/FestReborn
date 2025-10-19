        document.addEventListener('DOMContentLoaded', () => {
            const destinationsData = {
                'candi-pari': {
                    name: "Candi Pari",
                    images: [
                        "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
                        "https://i.ytimg.com/vi/d_eEjalIESo/maxresdefault.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Candi_Pari_dari_dekat.jpg",
                        "https://www.eastjava.com/tourism/sidoarjo/images/gallery/candi-pari/candi-pari-sidoarjo-04.jpg"
                    ],
                    description: "Candi Pari adalah sebuah peninggalan masa Klasik Indonesia yang terletak di Desa Candipari, Kecamatan Porong, Sidoarjo, Jawa Timur. Candi ini merupakan candi yang dibangun pada masa Majapahit pada era pemerintahan Raja Hayam Wuruk.",
                    ticket: 10000,
                    gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.142079199695!2d112.71260907475876!3d-7.449624592576046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e12f6ffffffd%3A0x538ba79d3434117!2sCandi%20Pari!5e0!3m2!1sen!2sid!4v1716365453678!5m2!1sen!2sid",
                    address: "Desa Candi Pari, Kecamatan Porong, Sidoarjo, Jawa Timur",
                    socialMedia: {
                        instagram: "https://www.instagram.com/explore/tags/candipari/",
                        youtube: "https://www.youtube.com/results?search_query=candi+pari"
                    },
                    openingHours: [
                        { day: "Senin - Jumat", time: "08:00 - 16:00" },
                        { day: "Sabtu & Minggu", time: "07:00 - 17:00" }
                    ]
                },
                'kampung-batik-jetis': {
                    name: "Kampung Batik Jetis",
                    images: [
                        "https://cdn.ngopibareng.id/uploads/2023/2023-09-03/kampung-batik-jetis-destinasi-umkm-lokal-di-gelaran-porprov--01",
                        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD9d9fP6p3sI457VbHq4d8_78zK0Q1N7XoG_6N4K0H6y-R0Y2bE3iG4e8K1r9gI9e0lX0X8iG8p4a8b7c5e4d3f2e1a0b9c8d7e6f5g4h3i2j1k0/s1600/kampung-batik-jetis-sidoarjo.jpg",
                        "https://surabayastory.com/wp-content/uploads/2019/08/kampung-batik-jetis.jpg"
                    ],
                    description: null,
                    ticket: null,
                    gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.452668512214!2d112.71239987475841!3d-7.414960592612261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e47854a88f55%3A0xb354a50d276d451b!2sKampung%20Batik%20Jetis!5e0!3m2!1sen!2sid!4v1716365538166!5m2!1sen!2sid",
                    address: "Jetis, Lemahputro, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur",
                    socialMedia: {
                        instagram: "https://www.instagram.com/explore/tags/kampungbatikjetis/"
                    },
                    openingHours: [
                        { day: "Setiap Hari", time: "09:00 - 20:00" }
                    ]
                }
            };

            const params = new URLSearchParams(window.location.search);
            const destinationId = params.get('id');
            const data = destinationsData[destinationId];

            const mainContent = document.getElementById('main-content');

            if (!data) {
                mainContent.innerHTML = `
                    <div class="text-center py-20">
                        <i class="fa-solid fa-compass-slash text-8xl text-slate-300 mb-6"></i>
                        <h1 class="text-4xl font-bold text-slate-700 mb-4">Destinasi Tidak Ditemukan</h1>
                        <p class="text-lg text-slate-500 mb-8">Maaf, destinasi yang Anda cari tidak ada atau URL tidak valid.</p>
                        <a href="destination.html" class="bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark/90 transition-all">
                            Kembali ke Daftar Destinasi
                        </a>
                    </div>
                `;
                return;
            }

            document.title = `${data.name} - SidoDolan`;
            document.getElementById('destination-name').textContent = data.name;

            const ticketPriceEl = document.getElementById('destination-ticket-price');
            if (data.ticket === null || data.ticket === 0) {
                ticketPriceEl.textContent = 'Gratis';
            } else {
                ticketPriceEl.innerHTML = `Rp ${new Intl.NumberFormat('id-ID').format(data.ticket)} <span class="text-lg font-medium text-slate-500">/ orang</span>`;
            }

            const descWrapper = document.getElementById('destination-description-wrapper');
            if (data.description) {
                document.getElementById('destination-description').textContent = data.description;
            } else {
                descWrapper.style.display = 'none';
            }
            
            document.getElementById('destination-address').textContent = data.address;
            
            const gmapEmbed = document.getElementById('destination-gmap-embed');
            if (data.gmapEmbedUrl) {
                gmapEmbed.src = data.gmapEmbedUrl;
                gmapEmbed.title = `Peta Lokasi ${data.name}`;
            }

            const hoursContainer = document.getElementById('destination-hours');
            hoursContainer.innerHTML = data.openingHours.map(item => `
                <div class="flex justify-between">
                    <span class="font-medium">${item.day}</span>
                    <span class="font-mono">${item.time}</span>
                </div>
            `).join('');

            const socialsContainer = document.getElementById('destination-socials');
            if (data.socialMedia && Object.keys(data.socialMedia).length > 0) {
                 socialsContainer.innerHTML = Object.keys(data.socialMedia).map(key => `
                    <a href="${data.socialMedia[key]}" target="_blank" class="text-slate-500 hover:text-primary transition-colors text-2xl">
                        <i class="fa-brands fa-${key}"></i>
                    </a>
                `).join('');
            } else {
                socialsContainer.parentElement.style.display = 'none';
            }

            const mainImage = document.getElementById('main-image');
            const thumbnailGrid = document.getElementById('thumbnail-grid');
            
            mainImage.src = data.images[0];
            thumbnailGrid.innerHTML = data.images.map((imgSrc, index) => `
                <img src="${imgSrc}" 
                     data-index="${index}"
                     class="thumbnail-item w-full h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-primary transition-all opacity-70 hover:opacity-100" 
                     alt="Thumbnail ${index + 1}">
            `).join('');

            const thumbnails = document.querySelectorAll('.thumbnail-item');
            
            function setActiveThumbnail(index) {
                thumbnails.forEach(thumb => {
                    thumb.classList.remove('thumbnail-active', 'opacity-100');
                    thumb.classList.add('opacity-70');
                });
                const activeThumb = document.querySelector(`.thumbnail-item[data-index="${index}"]`);
                if (activeThumb) {
                    activeThumb.classList.add('thumbnail-active', 'opacity-100');
                    activeThumb.classList.remove('opacity-70');
                }
            }

            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const index = thumb.dataset.index;
                    mainImage.src = data.images[index];
                    setActiveThumbnail(index);
                });
            });

            setActiveThumbnail(0);
        });