document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const startButton = document.getElementById('start-button');
    let timer;

    const handleFinish = () => {
        // Hapus timeout otomatis jika tombol sudah diklik
        clearTimeout(timer);
        
        // Terapkan class untuk transisi fade-out
        splashScreen.classList.add('opacity-0', 'scale-95');
        
        // Tunggu transisi selesai sebelum pindah halaman
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 800);
    };

    // Atur timeout otomatis
    timer = setTimeout(handleFinish, 4000);

    // Tambahkan event listener ke tombol
    startButton.addEventListener('click', handleFinish);
});