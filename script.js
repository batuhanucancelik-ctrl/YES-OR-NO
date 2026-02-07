const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const hoverSound = document.getElementById("hoverSound");
const yesSound = document.getElementById("yesSound");

// KAÇIŞ FONKSİYONU
function moveButton(e) {
    // Mobilde tıklamayı ve mavi seçimi engeller
    if (e.type === 'touchstart') e.preventDefault();

    // Ses çal
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});

    // Ekran sınırlarını hesapla (Butonun dışarı taşmaması için)
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // Rastgele pozisyon
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Yeni koordinatları uygula
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.zIndex = "999";
}

// Olay Dinleyicileri (Hem Fare Hem Parmak Dokunuşu)
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton, { passive: false });

// EVET'E TIKLANDIĞINDA
yesBtn.addEventListener("click", () => {
    yesSound.play().catch(() => {});

    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Sayfayı güncelle
    document.querySelector(".card").innerHTML = `
        <div class="emoji">💖</div>
        <h2 style="color: #ff4d6d;">Harika! ❤️</h2>
        <p style="font-size: 18px; color: #4a1c2f;">Randevumuz ayarlandı!</p>
        <div class="hint" style="margin-top:20px;">Seni bekliyor olacağım... ✨</div>
    `;
});

// ARKA PLAN KALPLERİ
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = ["❤️", "💖", "💗", "✨"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);
