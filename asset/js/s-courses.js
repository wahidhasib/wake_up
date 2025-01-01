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


// course details section start
ScrollReveal().reveal("#s-courses .c-title", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 500,
    scale: 0.5,
});
ScrollReveal().reveal("#s-courses .c-detail", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 800,
    scale: 0.5,
});
ScrollReveal().reveal("#s-courses .c-img", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
    delay: 1100,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .feature_title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 1100,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .quote", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
    delay: 1200,
    scale: 0.8,
});

// course card section start
ScrollReveal().reveal("#s-courses .suggest1", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 1400,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .suggest2", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 1600,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .suggest3", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 1800,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .suggest4", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 2000,
    scale: 0.8,
});