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
 ScrollReveal().reveal(".instuctors .tutor", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
 });
 ScrollReveal().reveal(".instuctors .tutor2", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
     delay: 500,
 });
 ScrollReveal().reveal(".instuctors .tutor3", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
     delay: 1000,
 });
 ScrollReveal().reveal(".instuctors .tutor4", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
     delay: 1500,
 });
 ScrollReveal().reveal(".instuctors .tutor5", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
     delay: 1500,
 });
 ScrollReveal().reveal(".instuctors .tutor6", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
     delay: 1500,
 });
 ScrollReveal().reveal(".instuctors .tutor7", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
     delay: 1500,
 });
 ScrollReveal().reveal(".instuctors .tutor8", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
     delay: 1500,
 });
 ScrollReveal().reveal(".intern", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: 0.5,
 });
 ScrollReveal().reveal(".student-1", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 ScrollReveal().reveal(".student-2", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 ScrollReveal().reveal(".student-3", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 ScrollReveal().reveal(".student-4", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 ScrollReveal().reveal(".student-5", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 ScrollReveal().reveal(".student-6", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 ScrollReveal().reveal(".student-7", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 ScrollReveal().reveal(".student-8", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale: .5,
     delay: 500,
 });
 
 
 //  employee header
 ScrollReveal().reveal(".instuctors-title", {
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
    delay: 500,
});
ScrollReveal().reveal("#contact_us .btn", {
    ...scrollRevealOption,
    origin: 'top',
    opacity: 0,
    delay: 1000,
});