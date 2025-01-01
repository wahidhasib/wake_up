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

// contact section start

ScrollReveal().reveal(".form-title", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 300,
});
ScrollReveal().reveal(".sub", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 200,
});
ScrollReveal().reveal(".info", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "right",
    delay: 500,
    scale: 0.2,
});
ScrollReveal().reveal(".fild1", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 400,
});
ScrollReveal().reveal(".fild2", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 600,
});
ScrollReveal().reveal(".fild3", {
    ...scrollRevealOption,
    opacity: 0,
    origin: "top",
    delay: 800,
});
ScrollReveal().reveal(".fild4", {
    ...scrollRevealOption,
    opacity: 0,
    delay: 1000,
    origin: "top",
});

// discord section

ScrollReveal().reveal(".support-left", {
    ...scrollRevealOption,
    opacity: 0,
    delay: 1000,
    origin: "left",
});
ScrollReveal().reveal(".support-right", {
    ...scrollRevealOption,
    opacity: 0,
    delay: 1000,
    origin: "right",
});