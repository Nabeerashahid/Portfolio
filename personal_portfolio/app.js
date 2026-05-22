const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// // AOS ANIMATION

// // AOS.init({
// //     duration: 1000,
// //     once: true
// // });


// // NAVBAR SCROLL EFFECT

// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 50);
// });


