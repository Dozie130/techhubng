

```
// Navigation Menu Toggle

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll to Top Button

const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopButton.classList.add('active');
    } else {
        scrollTopButton.classList.remove('active');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal Popup

const modalButton = document.querySelector('.modal-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

modalButton.addEventListener('click', () => {
    modal.classList.add('active');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Form Validation

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields!');
        e.preventDefault();
    }
});

// Animations

const scrollElements = document.querySelectorAll('.scroll-animation');

window.addEventListener('scroll', () => {
    scrollElements.forEach((element) => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowScrollTop = window.scrollY;

        if (windowScrollTop > (elementTop - elementHeight)) {
            element.classList.add('active');
        }
    });
});
```

