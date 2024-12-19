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
 
 ScrollReveal().reveal("#instructors .banner h2", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
 });
 ScrollReveal().reveal("#instructors .ins_title", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
 });
 ScrollReveal().reveal("#instructors .ins_1", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 500,
 });
 ScrollReveal().reveal("#instructors .ins_2", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 800,
 });
 ScrollReveal().reveal("#instructors .ins_3", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 1100,
 });
 ScrollReveal().reveal("#instructors .ins_4", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 1400,
 });
 ScrollReveal().reveal("#instructors .ins_5", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 1700,
 });
 ScrollReveal().reveal("#instructors .ins_6", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 2300,
 });
 ScrollReveal().reveal("#instructors .ins_7", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 2600,
 });
 ScrollReveal().reveal("#instructors .ins_8", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
     delay: 2900,
 });
 ScrollReveal().reveal("#instructors .pagination", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
 });

//  others section
 ScrollReveal().reveal("#instructors .desc1", {
     ...scrollRevealOption,
     origin: 'left',
     opacity: 0,
     scale : .5,
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