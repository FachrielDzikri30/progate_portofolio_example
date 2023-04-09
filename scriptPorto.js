// deklarasi
// deklarasi slider index
let slideIndex = 0;

// deklarasi modal image1
const popUpImg1 = document.getElementById("popUp1");
const openPopUpImg1 = document.getElementById("img1");
const closePopUpImg1 = document.getElementById("closePopUp1");

// deklarasi modal image2
const popUpImg2 = document.getElementById("popUp2");
const openPopUpImg2 = document.getElementById("img2");
const closePopUpImg2 = document.getElementById("closePopUp2");

// deklarasi modal image3
const popUpImg3 = document.getElementById("popUp3");
const openPopUpImg3 = document.getElementById("img3");
const closePopUpImg3 = document.getElementById("closePopUp3");

// deklarasi modal image4
const popUpImg4 = document.getElementById("popUp4");
const openPopUpImg4 = document.getElementById("img4");
const closePopUpImg4 = document.getElementById("closePopUp4");

// deklarasi modal image5
const popUpImg5 = document.getElementById("popUp5");
const openPopUpImg5 = document.getElementById("img5");
const closePopUpImg5 = document.getElementById("closePopUp5");

// deklarasi modal image6
const popUpImg6 = document.getElementById("popUp6");
const openPopUpImg6 = document.getElementById("img6");
const closePopUpImg6 = document.getElementById("closePopUp6");

// deklarasi modal form contact
const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModalButton");
const closeModal = document.getElementById("closeModalIcon");
const inputEmail = document.getElementById("inputEmail");
const inputMessage = document.getElementById("inputMessage");

// deklarasi accordion footer
const accordion = document.getElementsByClassName("faq");

// fungsi-fungsi
// fungsi slider image proyek contoh
const updateSlide = (n) => {
    slideIndex += n;
    showSlide(slideIndex);
}

// fungsi tampilan slider image proyek contoh
const showSlide = (n) => {
    const slides = document.getElementsByClassName("image");
    if(n > slides.length - 1) {
        slideIndex = 0;
    }
    if(n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Panggil fungsi showSlide
showSlide(slideIndex);

// fungsi open modal untuk contoh proyek gambar1
openPopUpImg1.addEventListener('click', () => {
    popUpImg1.style.display = "block";
});

// fungsi close modal untuk contoh proyek gambar1
closePopUpImg1.addEventListener('click', () => {
    popUpImg1.style.display = "none";
});

// fungsi open modal untuk contoh proyek gambar2
openPopUpImg2.addEventListener('click', () => {
    popUpImg2.style.display = "block";
});

// fungsi close modal untuk contoh proyek gambar2
closePopUpImg2.addEventListener('click', () => {
    popUpImg2.style.display = "none";
});

// fungsi open modal untuk contoh proyek gambar3
openPopUpImg3.addEventListener('click', () => {
    popUpImg3.style.display = "block";
});

// fungsi close modal untuk contoh proyek gambar3
closePopUpImg3.addEventListener('click', () => {
    popUpImg3.style.display = "none";
});

// fungsi open modal untuk contoh proyek gambar4
openPopUpImg4.addEventListener('click', () => {
    popUpImg4.style.display = "block";
});

// fungsi close modal untuk contoh proyek gambar4
closePopUpImg4.addEventListener('click', () => {
    popUpImg4.style.display = "none";
});

// fungsi open modal untuk contoh proyek gambar5
openPopUpImg5.addEventListener('click', () => {
    popUpImg5.style.display = "block";
});

// fungsi close modal untuk contoh proyek gambar5
closePopUpImg5.addEventListener('click', () => {
    popUpImg5.style.display = "none";
});

// fungsi open modal untuk contoh proyek gambar6
openPopUpImg6.addEventListener('click', () => {
    popUpImg6.style.display = "block";
});

// fungsi close modal untuk contoh proyek gambar6
closePopUpImg6.addEventListener('click', () => {
    popUpImg6.style.display = "none";
});

// fungsi open modal untuk form contact
openModal.addEventListener('click', () => {
    if (inputEmail.value === "" || inputMessage.value === "") {
        modal.style.display = "block";
    }
});

// fungsi close modal untuk form contact
closeModal.addEventListener('click' , () => {
    modal.style.display = "none";
});

// fungsi tampilan accordion footer
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click",function() {
        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
