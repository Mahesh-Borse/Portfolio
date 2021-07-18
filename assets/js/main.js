/*=== Night Mode/Dark Mode ====*/
nightMode = () => {
    document.documentElement.style.setProperty('--font-color', '#fff');
    document.documentElement.style.setProperty('--background-color', '#000');
    document.documentElement.style.setProperty('--footer-color', 'rgb(197, 197, 197)');
    document.getElementById('light_dark_mode').innerHTML = " <i class='fa fa-moon'></i> ";
}
lightMode = () => {
    document.documentElement.style.setProperty('--font-color', '#000');
    document.documentElement.style.setProperty('--background-color', '#fff');
    document.documentElement.style.setProperty('--footer-color', 'rgb(34, 34, 34)');
    document.getElementById('light_dark_mode2').innerHTML = " <i class='fa fa-sun'></i> ";
}
color_Mode = () => {
    document.documentElement.style.setProperty('--primary-color', '#d240ff');
}
color_Mode2 = () => {
    document.documentElement.style.setProperty('--primary-color', '#ff00b3');
}
color_Mode3 = () => {
    document.documentElement.style.setProperty('--primary-color', '#ff2d2d');
}
color_Mode4 = () => {
    document.documentElement.style.setProperty('--primary-color', '#ff6600');
}
color_Mode5 = () => {
    document.documentElement.style.setProperty('--primary-color', '#e4d500');
}
color_Mode6 = () => {
    document.documentElement.style.setProperty('--primary-color', '#00ca0a');
}
color_Mode7 = () => {
    document.documentElement.style.setProperty('--primary-color', '#00ddc0');
}
color_Mode8 = () => {
    document.documentElement.style.setProperty('--primary-color', '#75a1d5');
}


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
// sr.reveal('.work__img', { interval: 200 });
sr.reveal('.work_panel', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });


var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus();
});


function showThemes() {
    var checkboxes = document.getElementById("checkBoxes");

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}
