/* ===================== HEADER ===================== */

// SHOW MENU
const navMenu = document.getElementById('nav_menu'),
	navToggle = document.getElementById('nav_toggle'),
	navClose = document.getElementById('nav_close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show_menu');
	});
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show_menu');
	});
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');
const linkAction = () => {
	const navMenu = document.getElementById('nav_menu');
	navMenu.classList.remove('show_menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

// ADD BLUR HEADER
const blurHeader = () => {
	const header = document.getElementById('header');
	this.scrollY >= 50
		? header.classList.add('blur_header')
		: header.classList.remove('blur_header');
};
window.addEventListener('scroll', blurHeader);

/* ====================== MAIN ====================== */

// SECTION - FAVORITES
// Swiper Favorites
let swiperFavorite = new Swiper('.favorite_swiper', {
	loop: true,
	slidesPerView: 'auto',
	centeredSlides: 'auto',
	grabCursor: true,

	breakpoints: {
		768: {
			slidesPerView: 3,
		},
	},
});

/* ================= SCROLL ACTIONS ================= */

// SHOW SCROLL UP
const scrollUp = () => {
	const scrollUp = document.getElementById('scrollup');
	this.scrollY >= 350
		? scrollUp.classList.add('show_scroll')
		: scrollUp.classList.remove('show_scroll');
};
window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');
		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active_link');
		}else {
			sectionsClass.classList.remove('active_link');
		}
	});
}
window.addEventListener('scroll', scrollActive);
// SCROLL REVEAL ANIMATION

/* ===================== FOOTER ===================== */
