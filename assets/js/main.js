/* ===================== HEADER ===================== */

// SHOW MENU
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show_menu');
        })
    }

    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show_menu');
        })
    }

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');
const linkAction = () => {
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ADD BLUR HEADER


// SWIPER FAVORITES

/* ====================== MAIN ====================== */


/* ================= SCROLL ACTIONS ================= */

// SHOW SCROLL UP

// SCROLL SECTIONS ACTIVE LINK

// SCROLL REVEAL ANIMATION


/* ===================== FOOTER ===================== */