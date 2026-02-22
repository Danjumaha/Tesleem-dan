// Auto-scroll + manual control for XP slider
const slider = document.getElementById("xpSlider");
const leftBtn = document.getElementById("slideLeft");
const rightBtn = document.getElementById("slideRight");

let autoScroll;
function startAutoScroll() {
  autoScroll = setInterval(() => {
    slider.scrollBy({ left: 2, behavior: "smooth" });
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 40);
}
function stopAutoScroll() { clearInterval(autoScroll); }

slider.addEventListener("mouseenter", stopAutoScroll);
slider.addEventListener("mouseleave", startAutoScroll);
leftBtn.addEventListener("click", () => slider.scrollBy({ left: -200, behavior: "smooth" }));
rightBtn.addEventListener("click", () => slider.scrollBy({ left: 200, behavior: "smooth" }));

startAutoScroll();
















     
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
 
    