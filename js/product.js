document.addEventListener("DOMContentLoaded", function () {
  var mainProductSection = document.querySelector(".main-product");
  var productSection = document.querySelector(".product");

  window.addEventListener("scroll", function () {
    var scrolled = window.scrollY;

    mainProductSection.style.backgroundSize = "cover";
    mainProductSection.style.backgroundSize = "calc(100% + " + scrolled + "px)";

    productSection.style.backgroundSize = "cover";
    productSection.style.backgroundSize = "calc(100% + " + scrolled + "px)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var blurableImages = document.querySelectorAll(".blurable-image");

  blurableImages.forEach(function (image) {
    image.addEventListener("mouseenter", function () {
      image.style.filter = "blur(0)";
      image.style.transform = "scale(1.1)";
    });

    image.addEventListener("mouseleave", function () {
      image.style.filter = "blur(5px)";
      image.style.transform = "scale(1)";
    });
  });
});

// Section 3 Page 2
const popularLists = document.querySelectorAll(".popular-lists figure");

// Fungsi untuk menghitung posisi mouse relatif di dalam kartu
const calculateMousePosition = (el, state) => {
  state.mouseX = el.pageX - state.cardOffsetLeft - state.cardWidth / 2;
  state.mouseY = el.pageY - state.cardOffsetTop - state.cardHeight / 2;
};

// Fungsi untuk mengatur transformasi CSS dan menciptakan efek parallax
const applyParallaxEffect = (cardInner, cardBackground, angleX, angleY, posX, posY) => {
  cardInner.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
  cardBackground.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
};

// Fungsi untuk mengembalikan transformasi CSS ke nilai awal, menghapus efek parallax
const resetParallaxEffect = (cardInner, cardBackground) => {
  cardInner.style.transform = "rotateX(0deg) rotateY(0deg)";
  cardBackground.style.transform = "translateX(0px) translateY(0px)";
};

// Fungsi yang akan dijalankan saat mouse bergerak di atas kartu
const mouseMove = (el, state, cardInner, cardBackground) => {
  calculateMousePosition(el, state);

  // Menghitung sudut rotasi berdasarkan posisi mouse
  const angleX = (state.mouseX / state.cardWidth) * 10;
  const angleY = (state.mouseY / state.cardHeight) * 10;

  // Menghitung perpindahan posisi (translate) berdasarkan posisi mouse
  const posX = (state.mouseX / state.cardWidth) * 80;
  const posY = (state.mouseY / state.cardHeight) * 10;

  // Mengatur transformasi CSS untuk menciptakan efek parallax
  applyParallaxEffect(cardInner, cardBackground, angleX, angleY, posX, posY);
};

// Fungsi yang akan dijalankan saat mouse meninggalkan kartu
const mouseOut = (cardInner, cardBackground) => {
  // Mengembalikan transformasi CSS ke nilai awal, menghapus efek parallax
  resetParallaxEffect(cardInner, cardBackground);
};

// Menambahkan event listener untuk setiap kartu
popularLists.forEach((card) => {
  const cardInner = card;
  const cardBackground = cardInner.querySelector("img");

  const state = {
    mouseX: 0,
    mouseY: 0,
    cardHeight: card.clientHeight,
    cardWidth: card.clientWidth,
    cardOffsetLeft: card.offsetLeft,
    cardOffsetTop: card.offsetTop,
  };

  card.addEventListener("mousemove", (e) => mouseMove(e, state, cardInner, cardBackground));
  card.addEventListener("mouseout", () => mouseOut(cardInner, cardBackground));
});
