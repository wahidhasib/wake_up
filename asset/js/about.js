//  scrolling animation format

const scrollRevealOption = {
    mobile: false,
    distance: "100px",
    origin: "bottom",
    duration: 1000,
    opacity: 0,
};

ScrollReveal().reveal("#logo", {
    ...scrollRevealOption,
    origin: "left",
    opacity: 0,
    scale: 1.5,
    reset: false,
});

ScrollReveal().reveal(".navbar .navigation", {
    ...scrollRevealOption,
    origin: "left",
    opacity: 0,
    scale: 0.5,
    delay: 300,
    reset: false,
});
ScrollReveal().reveal(".navbar form", {
    ...scrollRevealOption,
    origin: "right",
    opacity: 0,
    scale: 0.5,
    delay: 500,
    reset: false,
});

// header animation end

//footer section
ScrollReveal().reveal("#footer .f_logo", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    scale: 0.5,
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
    origin: "top",
    delay: 200,
});
ScrollReveal().reveal("#footer .link1", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 400,
});
ScrollReveal().reveal("#footer .link2", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 600,
});
ScrollReveal().reveal("#footer .link3", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 800,
});
ScrollReveal().reveal("#footer .link4", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 1000,
});
ScrollReveal().reveal("#footer .link5", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 1200,
});
ScrollReveal().reveal("#footer .popular", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 200,
});

// ======FOOTER ANIMATION SECTION END

ScrollReveal().reveal("#hero .hero_title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 200,
});
ScrollReveal().reveal("#hero .hero_sub", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
    delay: 700,
});

//  history section
ScrollReveal().reveal("#body .h-content", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 1000,
    scale: 0.5,
});
ScrollReveal().reveal("#body .h-img", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
    delay: 1200,
    scale: 0.5,
});

//  chairman sir section
ScrollReveal().reveal(".main-title", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 1400,
    scale: 0.5,
});
ScrollReveal().reveal(".chairman", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    scale: 0.5,
});

//  employee section
ScrollReveal().reveal(".ins_1", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 200,
});
ScrollReveal().reveal(".ins_2", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 400,
});
ScrollReveal().reveal(".ins_3", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 600,
});
ScrollReveal().reveal(".ins_4", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 800,
});


//  employee header
ScrollReveal().reveal(".instuctors-title", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    scale: .5,
});

//  intern header
ScrollReveal().reveal(".intern", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    scale: .5,
    delay: 200,
});
ScrollReveal().reveal(".intern", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    scale: .5,
    delay: 400,
});
ScrollReveal().reveal(".intern", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    scale: .5,
    delay: 600,
});
ScrollReveal().reveal(".intern", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    scale: .5,
    delay: 800,
});


//  contact section

ScrollReveal().reveal("#contact_us .contact-title", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
});
ScrollReveal().reveal("#contact_us .text", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 300,
});
ScrollReveal().reveal("#contact_us .btn", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 600,
});