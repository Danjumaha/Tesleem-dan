document.getElementById('year').textContent = new Date().getFullYear();

function revealOnScroll(){
  const elements = document.querySelectorAll('.float-in');
  elements.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);













     
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = navMenu.querySelectorAll('a');

  // Open menu
  menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  // Close menu with × button
  closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
 
    