// document.getElementById("hamburger").addEventListener("click", function () {
//      const menu = document.getElementById("menu");
//      menu.classList.toggle("active");
//  }); 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


//  scrolling animation format

const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
};

ScrollReveal().reveal(".navbar", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale : .5,
});


// ScrollReveal().reveal(".navbar .navigation", {
//     ...scrollRevealOption,
//     origin: 'left',
//     opacity: 0,
//     scale : .5,
//     delay : 300,
// });
// ScrollReveal().reveal(".navbar form", {
//     ...scrollRevealOption,
//     origin: 'right',
//     opacity: 0,
//     scale : .5,
//     delay : 500,
// });
// header animation end



ScrollReveal().reveal("#carouselExampleCaptions", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay : 200,
});

// feature section
ScrollReveal().reveal("#feature .today", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
});
ScrollReveal().reveal(".feature_btns .btn", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 300,
});
ScrollReveal().reveal("#feature .tab-content", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 600,
});
ScrollReveal().reveal("#feature .feature_img", {
    ...scrollRevealOption,
    opacity: 0,
    delay: 800,
    scale: 0.5,
});


// courses section

ScrollReveal().reveal("#courses .course-title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
});
ScrollReveal().reveal("#courses .course-card1", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 500,
});
ScrollReveal().reveal("#courses .course-card2", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 1000,
});
ScrollReveal().reveal("#courses .course-card3", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 1500,
});
ScrollReveal().reveal("#courses .course-card4", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 2000,
});

// class section
ScrollReveal().reveal("#comunity .comunity-title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
});
ScrollReveal().reveal("#comunity .comunity-sub", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
});
ScrollReveal().reveal("#comunity .comunity-img", {
    ...scrollRevealOption,
    opacity: 0,
    scale: .5,
});

// instructors section
ScrollReveal().reveal("#instuctors .instuctors-title", {
    ...scrollRevealOption,
    opacity: 0,
    scale: 0.5,
    origin: "left",
});
ScrollReveal().reveal("#instuctors .tutor", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "left",
    delay: 500,
});
ScrollReveal().reveal("#instuctors .tutor2", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "left",
    delay: 1000,
});
ScrollReveal().reveal("#instuctors .tutor3", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "left",
    delay: 1500,
});
ScrollReveal().reveal("#instuctors .tutor4", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "left",
    delay: 2000,
});

// contact section
ScrollReveal().reveal("#contact .contact-title", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
});
ScrollReveal().reveal("#contact .contact-sub", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 500,
});
ScrollReveal().reveal("#contact .contact-card1", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    scale: 0.2,
    delay: 1000,
});
ScrollReveal().reveal("#contact .contact-card2", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    scale: 0.2,
    delay: 1500,
});
ScrollReveal().reveal("#contact .contact-card3", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    scale: 0.2,
    delay: 2000,
});

//footer section
ScrollReveal().reveal("#footer .f_logo", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    scale: 0.4,
});
ScrollReveal().reveal("#footer .slogan", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    scale: 0.4,
    delay: 200,
});
ScrollReveal().reveal("#footer .social-links", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 500,
});
ScrollReveal().reveal("#footer .info", {
    ...scrollRevealOption,
    opacity: 0,
    origin: 'top',
    delay: 200,
});
ScrollReveal().reveal("#footer .link1", {
    ...scrollRevealOption,
    opacity: 0,
    origin: 'top',
    delay :500,
});
ScrollReveal().reveal("#footer .link2", {
    ...scrollRevealOption,
    opacity: 0,
    origin: 'top',
    delay: 800,
});
ScrollReveal().reveal("#footer .link3", {
    ...scrollRevealOption,
    opacity: 0,
    origin: 'top',
    delay: 1100,
});
ScrollReveal().reveal("#footer .link4", {
    ...scrollRevealOption,
    opacity: 0,
    origin: 'top',
    delay: 1400,
});
ScrollReveal().reveal("#footer .link5", {
    ...scrollRevealOption,
    opacity: 0,
    origin: 'top',
    delay: 1700,
});
ScrollReveal().reveal("#footer .popular", {
    ...scrollRevealOption,
    opacity: 0,
    origin: 'top',
    delay: 200,
});


