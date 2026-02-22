 document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const whatsappURL = `https://wa.me/2348036909700?text=Hello%20Tesleem%2C%20my%20name%20is%20${encodeURIComponent(name)}.%0AEmail%3A%20${encodeURIComponent(email)}%0A%0AMessage%3A%20${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});










     
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
 
    

