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

ScrollReveal().reveal("#blog .title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
});
ScrollReveal().reveal("#blog .card-1", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
});
ScrollReveal().reveal("#blog .card-2", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 300,
});
ScrollReveal().reveal("#blog .card-3", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 600,
});
ScrollReveal().reveal("#blog .card-4", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 900,
});
ScrollReveal().reveal("#blog .card-5", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 1200,
});
ScrollReveal().reveal("#blog .card-6", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 1500,
});

//  side menu
ScrollReveal().reveal("#blog #category_sec", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 1000,
});
ScrollReveal().reveal("#blog #recent", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 1600,
});
ScrollReveal().reveal("#blog #activity", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 2000,
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
    delay: 500,
});