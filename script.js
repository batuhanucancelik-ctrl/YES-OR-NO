const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');
const container = document.querySelector('.question-container');

// Hayır butonunun üzerine gelindiğinde kaçma fonksiyonu
noBtn.addEventListener('mouseover', () => {
    // Butonu ekran sınırları içinde rastgele bir yere ışınla
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Evet butonuna tıklandığında
yesBtn.addEventListener('click', () => {
    const question = document.querySelector('.question');
    const gif = document.querySelector('.local-gif');
    
    question.innerHTML = "Harika! ❤️ 2035 Randevusu Onaylandı!";
    // İstersen başarılı bir GIF linki koyabilirsin
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3YjR3eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/T86lbVQInM3NcyT6hU/giphy.gif";
    
    noBtn.style.display = 'none'; // Hayır butonunu yok et
});