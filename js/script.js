// Correo
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const btn = document.getElementById('button');
   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_p0xsuzv';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje enviado!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});


// Script para numero de teléfono
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const phoneNumber = document.getElementById('numero').value;
   const phonePattern = /^[0-9]{10}$/;

   if (!phonePattern.test(phoneNumber)) {
     alert('Por favor, ingrese un número de teléfono válido de 10 dígitos.');
     return;
   }

   const btn = document.getElementById('button');
   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_p0xsuzv';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje enviado!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});


/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*==================== scroll sections active link ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);

/*==================== quita toggle icon y navbar cuando da click  ====================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== quita toggle icon y navbar cuando da click  ====================*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', '.iconos-habilidades', { origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right'});

    /*==================== scroll sections active link ====================*/
const typed =  new Typed ('.multiple-text',{

    strings: ['Desarrollador Web FrontEnd Trainee!', 'Técnico en Computación'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true

    } );