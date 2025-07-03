document.addEventListener("DOMContentLoaded", () => {
    const jessica = document.getElementById("jessica");
    const leila = document.getElementById("leila");

    const fakeLanding = document.getElementById("fakeLanding");
    const realReveal = document.getElementById("realReveal");
    const revealMessage = document.getElementById("revealMessage");


    function handleGrandparent(role) {
        fakeLanding.classList.remove("active");

        const imageTease = document.getElementById("ultraSound");
        imageTease.classList.add("active");

        setTimeout(() => {
            imageTease.classList.remove("active");
            revealMessage.textContent = `🎉 Överraskning! Du ska bli ${role}! 🎉`;
            realReveal.classList.add("active");
        }, 1000);
    }

    jessica.addEventListener("click", () => handleGrandparent("Farmor"));
    leila.addEventListener("click", () => handleGrandparent("Mormor"));

    const countdown = document.getElementById("countdown");

    const dueDate = new Date("2026-01-10T00:00:00");

    function updateCountdown() {
        const now = new Date();
        const diff = dueDate - now;

        if (diff <= 0) {
            countdown.textContent = `🎉 Dagen är här! 🎉`;
            clearInterval(timer);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff /(1000 * 60 * 60)) %  24);
        const minutes = Math.floor(( diff / (1000 * 60)) % 60);
        const seconds = Math.floor(( diff / 1000) % 60);

        countdown.textContent = `${days} dagar ${hours} timmar ${minutes} minuter ${seconds} sekunder`
    }

    const timer = setInterval(updateCountdown, 1000);
});
