console.log("script.js")

// Section2
document.addEventListener("DOMContentLoaded", function() {
    const productLists = document.querySelector(".card");

    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const translateY = -scrollPosition * 0.5;

      productLists.style.transform = `translateY(${translateY}px)`;
    });
  });

// Section 3
// Memilih semua elemen 'figure' yang berada di dalam elemen dengan class 'product-lists'
const productLists = document.querySelectorAll(".popular-lists figure");

// Memilih setiap elemen 'figure' yang telah dipilih
productLists.forEach((card) => {

    // Mengambil elemen 'figure' sebagai cardInner
    const cardInner = card;
    // Mengambil elemen 'img' di dalam 'figure' sebagai cardBackground
    const cardBackground = cardInner.querySelector("img");

    // Membuat objek 'state' untuk menyimpan informasi tentang kartu dan posisi mouse
    const state = {
        mouseX: 0,
        mouseY: 0,
        cardHeight: card.clientHeight,
        cardWidth: card.clientWidth,
        cardOffsetLeft: card.offsetLeft,
        cardOffsetTop: card.offsetTop,
    };
    // Fungsi yang akan dijalankan saat mouse bergerak di atas kartu
    const mouseMove = (el) => {
        // Menghitung posisi relatif mouse di dalam kartu
        state.mouseX = el.pageX - state.cardOffsetLeft - state.cardWidth / 2;
        state.mouseY = el.pageY - state.cardOffsetTop - state.cardHeight / 2;

        // Menghitung sudut rotasi berdasarkan posisi mouse
        const angleX = (state.mouseX / state.cardWidth) * 80;
        const angleY = (state.mouseY / state.cardHeight) * 80;

        // Menghitung perpindahan posisi (translate) berdasarkan posisi mouse
        const posX = (state.mouseX / state.cardWidth) * 80;
        const posY = (state.mouseY / state.cardHeight) * 80;

        // Mengatur transformasi CSS untuk menciptakan efek parallax
        cardInner.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
        cardBackground.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    };

    // Fungsi yang akan dijalankan saat mouse meninggalkan kartu
    const mouseOut = () => {
        // Mengembalikan transformasi CSS ke nilai awal, menghapus efek parallax
        cardInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        cardBackground.style.transform = `translateX(0px) translateY(0px)`;
    };

    // Menambahkan event listener untuk mengikuti pergerakan mouse dan keluar dari kartu
    card.addEventListener("mousemove", mouseMove);
    card.addEventListener("mouseout", mouseOut);
});