<<<<<<< HEAD
<<<<<<<< HEAD:js/product.js

// Section 3 Page 2
// Memilih semua elemen 'figure' yang berada di dalam elemen dengan class 'product-lists'
const productLists = document.querySelectorAll(".popular-lists figure");
========
const bgUtama = document.getElementById('bg1');
const bgDekorasi = document.getElementById('bg2');
const judul = document.getElementById('judul');
const content = document.getElementById('content');

const fetchData = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched!');
        }, 1000);
    });
};

let isiContent = 0;
>>>>>>>> main:js/script.js

const addnewContent = () => {
    if (isiContent === 0) {
        const contentA = document.createElement('div');
        contentA.classList.add('column')

        const featured = document.createElement('p');
        featured.classList.add('featured')
        featured.textContent = 'Featured';

        const textshoe = document.createElement('div')
        textshoe.classList.add('textshoe');

        const tahun = document.createElement('h1');
        tahun.classList.add('tahun');
        tahun.textContent = '2023';

        const shoe = document.createElement('h1');
        shoe.classList.add('shoe');
        shoe.textContent = 'SHOE';

        const colection = document.createElement('h1');
        colection.classList.add('collection');
        colection.textContent = 'COLLECTION';

        const textnormal = document.createElement('p');
        textnormal.classList.add('textnormal');
        textnormal.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper vulputate nibh vel venenatis.'

        const btnContent = document.createElement('div');
        btnContent.classList.add('btnContent');

        const btnshop = document.createElement('button');
        btnshop.classList.add('btnshop');
        btnshop.textContent = 'Shop Now';

        const btnCollection = document.createElement('button');
        btnCollection.classList.add('btnCollection');
        btnCollection.textContent = 'Collection';

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
        const contentB = document.createElement('div');
        contentB.classList.add('column');
        contentB.id = 'contentMouse';

        const contentimg = document.createElement('div');
        contentimg.classList.add('contentimg');
        contentimg.id = 'contentimg';

        contentB.appendChild(contentimg);
        content.appendChild(contentB);

        const mouse = 100;
        contentB.addEventListener('mousemove', e => {
            const x = e.clientX;
            const y = e.clientY;

            contentimg.style.transform = `
            translateX(${x / mouse}%)
            translateY(${y / mouse}%)`;
        })
    }
    isiContent++;
};

window.addEventListener('scroll', async () => {
    const scrollTop = window.scrollY;
    const scaleValue = 1 + scrollTop / 500;

    bgUtama.style.transform = `scale(${scaleValue}) translate(0, ${scrollTop / 2}px)`;
    bgDekorasi.style.transform = `scale(${scaleValue}) translate(0, ${scrollTop / 2}px)`;

    const opacityValue = 1 - scrollTop / 50;
    judul.style.opacity = opacityValue > 0 ? opacityValue : 0;

    const result = await fetchData();

    if (scrollTop > 100) {
        addnewContent();
    }
});



=======
console.log("script.js")
// Memilih semua elemen 'figure' yang berada di dalam elemen dengan class 'product-lists'
const productLists = document.querySelectorAll(".product-lists figure");

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
>>>>>>> main
