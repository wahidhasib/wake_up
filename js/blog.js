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
 
 ScrollReveal().reveal("#blog .card-1", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
 });
 ScrollReveal().reveal("#blog .card-2", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 500,
 });
 ScrollReveal().reveal("#blog .card-3", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 1000,
 });
 ScrollReveal().reveal("#blog .card-4", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 1500,
 });
 ScrollReveal().reveal("#blog .card-5", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 2000,
 });
 ScrollReveal().reveal("#blog .card-6", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 2500,
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