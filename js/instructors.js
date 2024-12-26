//  scrolling animation format

const scrollRevealOption = {
    mobile: false,
    distance: "50px",
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

ScrollReveal().reveal("#instructors .banner h2", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
});
ScrollReveal().reveal("#instructors .ins_title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
});
ScrollReveal().reveal("#instructors .ins_1", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 500,
});
ScrollReveal().reveal("#instructors .ins_2", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 800,
});
ScrollReveal().reveal("#instructors .ins_3", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 1100,
});
ScrollReveal().reveal("#instructors .ins_4", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 1400,
});
ScrollReveal().reveal("#instructors .ins_5", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 1700,
});
ScrollReveal().reveal("#instructors .ins_6", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 2300,
});
ScrollReveal().reveal("#instructors .ins_7", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 2600,
});
ScrollReveal().reveal("#instructors .ins_8", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 2900,
});
ScrollReveal().reveal("#instructors .pagination", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
});

//  others section
ScrollReveal().reveal("#instructors .desc1", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale: .5,
    delay: 500,
});
ScrollReveal().reveal("#instructors .desc2", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 1000,
});
ScrollReveal().reveal("#instructors .desc3", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay: 1500,
});