console.log("main.js");

const productLists = document.querySelectorAll(".product-lists figure");

productLists.forEach((card) => {
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

  const mouseMove = (el) => {
    state.mouseX = el.pageX - state.cardOffsetLeft - state.cardWidth / 2;
    state.mouseY = el.pageY - state.cardOffsetTop - state.cardHeight / 2;

    const angleX = (state.mouseX / state.cardWidth) * 80;
    const angleY = (state.mouseY / state.cardHeight) * 80;

    const posX = (state.mouseX / state.cardWidth) * 80;
    const posY = (state.mouseY / state.cardHeight) * 80;

    cardInner.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
    cardBackground.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  };

  const mouseOut = () => {
    cardInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
    cardBackground.style.transform = `translateX(0px) translateY(0px)`;
  };

  card.addEventListener("mousemove", mouseMove);
  card.addEventListener("mouseout", mouseOut);
});
