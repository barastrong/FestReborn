/* splash.js */
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const loadingPercentage = document.getElementById('loading-percentage');
    const splashScreen = document.getElementById('splash-screen');

    let progress = 0;
    const intervalTime = 30;

    const startTransition = () => {
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 600);
        }, 300);
    };
    
    const loadingInterval = setInterval(() => {
        progress++;
        progressBar.style.width = progress + '%';
        loadingPercentage.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(loadingInterval);
            startTransition();
        }
    }, intervalTime);
});