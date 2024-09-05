let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const serviceBoxes = document.querySelectorAll('.service-box');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    serviceBoxes.forEach(box => {
        observer.observe(box);
    });
});

// JavaScript for expanding "Read More" content
document.querySelectorAll('.service-box .btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const content = event.target.previousElementSibling;
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            event.target.textContent = 'Read More';
        } else {
            content.classList.add('expanded');
            event.target.textContent = 'Show Less';
        }
    });
});
window.onscroll=() => {
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top<offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a [href*='+id+']').classList.add('active');
            })
        }
    })
}