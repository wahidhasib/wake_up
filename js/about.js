const scrollRevealOption = {
    mobile: false,
     distance: '50px',
     origin: 'bottom',
     duration: 1000,
     opacity: 0,
 };

 // header animation start

ScrollReveal().reveal(".navbar", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale : .5,
});

// header animation end

 ScrollReveal().reveal("#hero .hero_title", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     delay : 200,
 });
 ScrollReveal().reveal("#hero .hero_sub", {
     ...scrollRevealOption,
     origin: 'right',
     opacity: 0,
     delay : 700,
 });

//  history section
 ScrollReveal().reveal("#body .h-content", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     delay : 1000,
     scale: 0.5,
 });
 ScrollReveal().reveal("#body .h-img", {
     ...scrollRevealOption,
     origin: 'right',
     opacity: 0,
     delay : 1300,
     scale: 0.5,
 });

//  chairman sir section
 ScrollReveal().reveal(".main-title", {
     ...scrollRevealOption,
     origin: 'top',
     opacity: 0,
     delay : 1700,
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
    scale : .5,
    delay: 500,
});
ScrollReveal().reveal(".ins_2", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale : .5,
    delay: 700,
});
ScrollReveal().reveal(".ins_3", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale : .5,
    delay: 900,
});
ScrollReveal().reveal(".ins_4", {
    ...scrollRevealOption,
    origin: 'left',
    opacity: 0,
    scale : .5,
    delay: 1100,
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