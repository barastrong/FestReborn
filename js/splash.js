document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const startButton = document.getElementById('start-button');
    let timer;

    const handleFinish = () => {
        clearTimeout(timer);
        splashScreen.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 800);
    };

    timer = setTimeout(handleFinish, 4000);
    startButton.addEventListener('click', handleFinish);
});