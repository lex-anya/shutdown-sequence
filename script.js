document.addEventListener('DOMContentLoaded', () => {
    const startOverride = document.getElementById('startOverride');
    const voiceover = document.getElementById('voiceover');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const openMailbox = document.getElementById('openMailbox');
    const message = document.querySelector('.message');

    let countdownInterval;

    startOverride.addEventListener('click', () => {
        screen1.style.display = 'none';
        screen2.style.display = 'block';
        voiceover.play();

        // Start countdown 10 seconds before the voiceover ends
        const countdownStart = voiceover.duration - 10;
        setTimeout(startCountdown, countdownStart * 1000);
    });

    voiceover.addEventListener('ended', () => {
        clearInterval(countdownInterval);
        screen2.style.display = 'none';
        screen3.style.display = 'block';
    });

    openMailbox.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com';
    });

    function startCountdown() {
        let countdown = 10;
        message.textContent = countdown;
        message.classList.add('countdown'); // Apply countdown styles

        countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                message.textContent = countdown;
            } else {
                clearInterval(countdownInterval);
                message.textContent = "0";
                // Change to screen 3 when countdown hits 0
                screen2.style.display = 'none';
                screen3.style.display = 'block';
            }
        }, 1000);
    }
});
