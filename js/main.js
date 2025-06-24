document.addEventListener("DOMContentLoaded", function() {

  const loadComponent = (selector, url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Could not load ${url}`);
        return response.text();
      })
      .then(data => {
        const container = document.querySelector(selector);
        if (container) {
          container.innerHTML = data;
          if (selector === '#navbar-container') {
            setActiveNavLink();
          }
        }
      })
      .catch(error => console.error('Error loading component:', error));
  };

  const setActiveNavLink = () => {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("href") === current) link.classList.add("active");
    });
  };

  loadComponent("#navbar-container", "navbar.html");
  loadComponent("#footer-container", "footer.html");
});