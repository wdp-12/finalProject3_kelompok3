const bgUtama = document.getElementById("bg1");
const bgDekorasi = document.getElementById("bg2");
const judul = document.getElementById("judul");
const content = document.getElementById("content");

const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};

let isiContent = 0;

const addnewContent = () => {
  if (isiContent === 0) {
    const contentA = document.createElement("div");
    contentA.classList.add("column");

    const featured = document.createElement("p");
    featured.classList.add("featured");
    featured.textContent = "Featured";

    const textshoe = document.createElement("div");
    textshoe.classList.add("textshoe");

    const tahun = document.createElement("h1");
    tahun.classList.add("tahun");
    tahun.textContent = "2023";

    const shoe = document.createElement("h1");
    shoe.classList.add("shoe");
    shoe.textContent = "SHOE";

    const colection = document.createElement("h1");
    colection.classList.add("collection");
    colection.textContent = "COLLECTION";

    const textnormal = document.createElement("p");
    textnormal.classList.add("textnormal");
    textnormal.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper vulputate nibh vel venenatis.";

    const btnContent = document.createElement("div");
    btnContent.classList.add("btnContent");

    const btnshop = document.createElement("button");
    btnshop.classList.add("btnshop");
    btnshop.textContent = "Shop Now";

    const btnCollection = document.createElement("button");
    btnCollection.classList.add("btnCollection");
    btnCollection.textContent = "Collection";

    contentA.appendChild(featured);
    contentA.appendChild(textshoe);
    textshoe.appendChild(tahun);
    textshoe.appendChild(shoe);
    contentA.appendChild(colection);
    contentA.appendChild(textnormal);
    contentA.appendChild(btnContent);
    btnContent.appendChild(btnshop);
    btnContent.appendChild(btnCollection);

    content.appendChild(contentA);
  } else if (isiContent === 1) {
    const contentB = document.createElement("div");
    contentB.classList.add("column");
    contentB.id = "contentMouse";

    const contentimg = document.createElement("div");
    contentimg.classList.add("contentimg");
    contentimg.id = "contentimg";

    contentB.appendChild(contentimg);
    content.appendChild(contentB);

    const mouse = 150;
    contentB.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      contentimg.style.transform = `
            translateX(${x / mouse}%)
            translateY(${y / mouse}%)`;
    });
  }
  isiContent++;
};

window.addEventListener("scroll", async () => {
  const scrollTop = window.scrollY;
  const scaleValue = 1 + scrollTop / 500;

  bgUtama.style.transform = `scale(${scaleValue}) translate(0, ${
    scrollTop / 2
  }px)`;
  bgDekorasi.style.transform = `scale(${scaleValue}) translate(0, ${
    scrollTop / 2
  }px)`;

  const opacityValue = 1 - scrollTop / 50;
  judul.style.opacity = opacityValue > 0 ? opacityValue : 0;

  const result = await fetchData();

  if (scrollTop > 100) {
    addnewContent();
  }
});

// secsions 4
function reviel() {
  var reveals = document.querySelectorAll(".revTitle");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reviel);

// paralax
let imageleft = document.getElementById("home3");
let imageright = document.getElementById("home4");
let imageright2 = document.getElementById("home5");
let imagereviews = document.getElementById("ImageReviews");
const simageleft = 400;
const simageright = 400;
imagereviews.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  imageleft.style.transform = `
      translateX(${x / simageleft}%)
      translateY(${y / simageleft}%)`;

  imageright.style.transform = `
      translateX(${x / simageright}%)
      translateY(${y / simageright}%)`;

  imageright2.style.transform = `
      translateX(${x / simageright}%)
      translateY(${y / simageright}%)`;
});

ScrollReveal().reveal("#sectionTiga .container .image", {
    delay: 500,
    origin: "left",
  });
  ScrollReveal().reveal("#sectionTiga .container .text-content", {
    delay: 600,
    origin: "right",
  });