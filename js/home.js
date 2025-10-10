/* home.js */
document.addEventListener('DOMContentLoaded', () => {

    const itineraries = {
        1: [
            { day: 1, hotel: "Hotel Delta Sidoarjo (Rp 400rb)", kuliner: "Lontong Kupang & Sate Kerang", wisata: "Monumen Jayandaru & Kampung Batik Jetis (09:00-16:00, 2 jam)", budget: "Rp 450.000" }
        ],
        2: [
            { day: 1, hotel: "Favehotel Sidoarjo (Rp 450rb)", kuliner: "Lontong Kupang Pak Misari", wisata: "Museum Mpu Tantular (08:00-15:00, 2 jam)", budget: "Rp 550.000" },
            { day: 2, hotel: "Favehotel Sidoarjo", kuliner: "Bandeng Asap & Ote-ote Porong", wisata: "Pusat Kerajinan Kulit Tanggulangin (10:00-17:00, 3 jam)", budget: "Rp 300.000" }
        ],
        3: [
            { day: 1, hotel: "The Sun Hotel (Rp 500rb)", kuliner: "Sate Kerang Alun-alun", wisata: "Candi Pari & Candi Sumur (08:00-16:00, 2 jam)", budget: "Rp 600.000" },
            { day: 2, hotel: "The Sun Hotel", kuliner: "Rawon Gajah Mada", wisata: "Wisata Bahari Tlocor (07:00-17:00, 4 jam)", budget: "Rp 400.000" },
            { day: 3, hotel: "The Sun Hotel", kuliner: "Bebek Sinjay (cabang Sidoarjo)", wisata: "Belanja oleh-oleh Bandeng & Petis", budget: "Rp 350.000" }
        ],
        4: [
            { day: 1, hotel: "Aston Sidoarjo (Rp 600rb)", kuliner: "Lontong Kupang", wisata: "Alun-alun & Monumen Jayandaru (sore hari, 2 jam)", budget: "Rp 700.000" },
            { day: 2, hotel: "Aston Sidoarjo", kuliner: "Sate Kerang & Tahu Petis", wisata: "Museum Mpu Tantular & Kampung Batik Jetis (09:00-16:00, 4 jam)", budget: "Rp 400.000" },
            { day: 3, hotel: "Aston Sidoarjo", kuliner: "Bandeng Asap", wisata: "Pusat Kerajinan Kulit Tanggulangin (10:00-17:00, 3 jam)", budget: "Rp 350.000" },
            { day: 4, hotel: "Aston Sidoarjo", kuliner: "Ote-ote Porong", wisata: "Delta Fishing (08:00-18:00, 3 jam) & beli oleh-oleh", budget: "Rp 450.000" }
        ]
    };

    let currentItinerary = null;

    const durationCards = document.querySelectorAll('.duration-card');
    const itineraryContainer = document.getElementById('itinerary-container');
    const itinerarySection = document.getElementById('itinerary-result-section');
    const saveBtn = document.getElementById('save-btn');
    const resetBtn = document.getElementById('reset-btn');
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    const generateItinerary = (duration) => {
        itineraryContainer.innerHTML = '';
        const data = itineraries[duration];
        currentItinerary = { duration, plan: data };

        if (data) {
            data.forEach(dayPlan => {
                const card = document.createElement('div');
                card.className = 'itinerary-card';
                card.innerHTML = `
                    <h4>Hari ${dayPlan.day}</h4>
                    <ul>
                        <li><strong>🏨 Hotel:</strong> ${dayPlan.hotel}</li>
                        <li><strong>🍜 Kuliner:</strong> ${dayPlan.kuliner}</li>
                        <li><strong>🗺️ Wisata:</strong> ${dayPlan.wisata}</li>
                        <li><strong>💰 Budget:</strong> ${dayPlan.budget}</li>
                    </ul>
                `;
                itineraryContainer.appendChild(card);
            });
            itinerarySection.classList.remove('hidden');
            updateSaveButtonStatus();
        }
    };

    durationCards.forEach(card => {
        card.addEventListener('click', () => {
            const duration = card.getAttribute('data-duration');
            generateItinerary(duration);
        });
    });

    const saveItinerary = () => {
        if (currentItinerary) {
            localStorage.setItem('savedSidoDolanItinerary', JSON.stringify(currentItinerary));
            updateSaveButtonStatus();
        }
    };

    const updateSaveButtonStatus = () => {
        const savedData = localStorage.getItem('savedSidoDolanItinerary');
        if (savedData && JSON.stringify(currentItinerary) === savedData) {
            saveBtn.textContent = 'Disimpan ✓';
            saveBtn.classList.add('saved');
            saveBtn.disabled = true;
        } else {
            saveBtn.textContent = 'Simpan Itinerary';
            saveBtn.classList.remove('saved');
            saveBtn.disabled = false;
        }
    };

    const resetItinerary = () => {
        itineraryContainer.innerHTML = '';
        itinerarySection.classList.add('hidden');
        currentItinerary = null;
    };

    saveBtn.addEventListener('click', saveItinerary);
    resetBtn.addEventListener('click', resetItinerary);

    const tukarModal = document.getElementById('tukar-modal');
    const shopPanel = document.getElementById('shop-panel');

    const toggleTukar = () => tukarModal.classList.toggle('hidden');
    const toggleShop = () => shopPanel.classList.toggle('open');
    
    document.getElementById('tukar-btn-desktop').addEventListener('click', toggleTukar);
    document.getElementById('tukar-btn-mobile').addEventListener('click', toggleTukar);
    document.getElementById('close-tukar-modal').addEventListener('click', toggleTukar);
    tukarModal.querySelector('.modal-ok-button').addEventListener('click', toggleTukar);
    
    document.getElementById('shop-btn-desktop').addEventListener('click', toggleShop);
    document.getElementById('shop-btn-mobile').addEventListener('click', toggleShop);
    document.getElementById('close-shop-panel').addEventListener('click', toggleShop);
});