const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Demo “form”: opens mail client with prefilled subject/body
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get("name"));
    const email = encodeURIComponent(data.get("email"));
    const message = encodeURIComponent(data.get("message"));

    const to = "you@email.com"; // <-- replace
    const subject = encodeURIComponent(`Website message from ${decodeURIComponent(name)}`);
    const body = encodeURIComponent(
      `Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\n${decodeURIComponent(message)}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}