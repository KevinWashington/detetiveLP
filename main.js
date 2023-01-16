let navigation = document.querySelector('nav')
let whatsappFlutuante = document.querySelector(".whatsapp-flutuante");

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    whatsappFlutuante.classList.remove('d-none')
  } else {
    navigation.classList.remove('scroll')
    whatsappFlutuante.classList.add("d-none");
  }
  if (scrollY > 300) {
    whatsappFlutuante.classList.remove("d-none");
  } else {
    whatsappFlutuante.classList.add("d-none");
  }
}

 
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20 ,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 1,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

function openmodal1() {
  let modal = document.querySelector("#modal1");
  modal.classList.remove("d-none")
}

function openmodal2() {
  let modal = document.querySelector("#modal2");
  modal.classList.remove("d-none");
}

function closemodal(){
  let modal = document.querySelectorAll(".modals");
  console.log(modal)
  modal.forEach(element => {
    if (!element.classList.contains("d-none")) {
      element.classList.add("d-none")
    }
  });
}
