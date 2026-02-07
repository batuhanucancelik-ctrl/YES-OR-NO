const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");
const hoverSound = document.getElementById("hoverSound");
const yesSound = document.getElementById("yesSound");

/**
 * BUTON KAÇIRMA MANTIĞI
 */
function moveButton(e) {
    // Mobilde tıklama/seçme efektini ve sayfa kaymasını engeller
    if (e.type === 'touchstart') {
        e.preventDefault();
    }

    // Ses efektini oynat (isteğe bağlı)
    if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {}); // Kullanıcı etkileşimi olmadan ses çalmayabilir
    }

    // Ekran boyutlarını al
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Buton boyutlarını al
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Güvenli alan hesapla (Ekrandan 20px içeride kalsın)
    const maxX = windowWidth - btnWidth - 20;
    const maxY = windowHeight - btnHeight - 20;

    // Rastgele yeni pozisyon (En az 0, en fazla maxX/maxY)
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    // Pozisyonu uygula
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = "9999"; // Her zaman en üstte görünsün
}

// Olay Dinleyicileri (Hem Fare Hem Dokunmatik)
noBtn.addEventListener("mouseenter", moveButton); // PC için
noBtn.addEventListener("touchstart", moveButton, { passive: false }); // Mobil için
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton(e);
});

/**
 * EVET BUTONU MANTIĞI
 */
yesBtn.addEventListener("click", () => {
    if (yesSound) yesSound.play().catch(() => {});

    // Konfeti Patlatma
    confetti({
        particleCount: 260,
        spread: 120,
        origin: { y: 0.65 }
    });

    // Sayfa içeriğini güncelle
    setTimeout(() => {
        alert("YAŞASINNN! 💕 Harika bir randevu bizi bekliyor!");
        // İsteğe bağlı: Sayfayı yeni bir mesaja yönlendir veya içeriği değiştir
    }, 500);
});

/**
 * ARKA PLAN KALPLERİ (Gelişmiş Versiyon)
 */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 22 + 14 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.4;
    heart.style.position = "absolute";
    heart.style.bottom = "-50px";
    
    document.body.appendChild(heart);
    
    // Belleği yormamak için kalpleri sil
    setTimeout(() => heart.remove(), 8000);
}

// Her 400ms'de bir kalp oluştur
setInterval(createHeart, 400);
