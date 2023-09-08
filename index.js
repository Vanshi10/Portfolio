const toggle = document.querySelector('.nav-toggle');
const navLink = document.querySelector('.nav__link');

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

navLink.forEach(link =>{
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    })
})