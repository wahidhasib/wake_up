const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
};

// header animation start

ScrollReveal().reveal(".navbar #logo", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale : .5,
});
ScrollReveal().reveal(".navbar .navigation", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale : .5,
    delay : 300,
});
ScrollReveal().reveal(".navbar form", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
    scale : .5,
    delay : 500,
});

// header animation end

ScrollReveal().reveal("#hero .hero_title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay : 200,
});


// course details section start
ScrollReveal().reveal("#s-courses .c-title", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay : 500,
    scale: 0.5,
});
ScrollReveal().reveal("#s-courses .c-detail", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay : 1000,
    scale: 0.5,
});
ScrollReveal().reveal("#s-courses .c-img", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
    delay : 1500,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .feature_title", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    delay : 1500,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .quote", {
    ...scrollRevealOption,
    origin: 'right',
    opacity: 0,
    delay : 1800,
    scale: 0.8,
});

// course card section start
ScrollReveal().reveal("#s-courses .suggest1", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay : 2100,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .suggest2", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay : 2500,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .suggest3", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay : 2900,
    scale: 0.8,
});
ScrollReveal().reveal("#s-courses .suggest4", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay : 3300,
    scale: 0.8,
});