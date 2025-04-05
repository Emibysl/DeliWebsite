const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialisiere Swiper für Frühstück
  var frühstückSwiper = new Swiper("#frühstückSwiper", {
    loop: false,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0
  });

  // Initialisiere Swiper für die normale Speisekarte
  var normaleSpeisekarteSwiper = new Swiper("#normaleSpeisekarteSwiper", {
    loop: false,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0
  });

  // Toggle-Switch für Speisekarten
  const speisekarteToggle = document.getElementById("speisekarteToggle");
  const frühstückSwiperContainer = document.getElementById("frühstückSwiper");
  const normaleSpeisekarteSwiperContainer = document.getElementById("normaleSpeisekarteSwiper");

  speisekarteToggle.addEventListener("change", function () {
    if (this.checked) {
      frühstückSwiperContainer.classList.add("d-none");
      normaleSpeisekarteSwiperContainer.classList.remove("d-none");
    } else {
      frühstückSwiperContainer.classList.remove("d-none");
      normaleSpeisekarteSwiperContainer.classList.add("d-none");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('#oeffnungszeiten', {
    duration: 1500,
    distance: '100px',
    origin: 'bottom',
    easing: 'ease-in-out',
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("lieferorteToggleBtn");
  const collapseElement = document.getElementById("lieferorteCollapse");

  collapseElement.addEventListener("show.bs.collapse", function () {
    toggleBtn.textContent = "Lieferorte ausblenden";
  });

  collapseElement.addEventListener("hide.bs.collapse", function () {
    toggleBtn.textContent = "Lieferorte anzeigen";
  });
});