// EverSpark Cleaning Co. — small site interactions

document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after tapping a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Mirror every contact-form submission to the portal as an in-app notification for Jonah,
// alongside (never instead of) the FormSubmit.co email that still goes straight to Marisa
// unchanged below. sendBeacon fires an async POST that's guaranteed to complete even though
// this page is about to navigate away to FormSubmit's "_next" redirect — a plain fetch()
// could get cancelled mid-flight by that navigation. Deliberately not preventDefault()'d:
// the native form submission to FormSubmit proceeds exactly as it always has.
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", () => {
    try {
      const data = new FormData();
      data.set("name", document.getElementById("name").value);
      data.set("email", document.getElementById("email").value);
      data.set("phone", document.getElementById("phone").value);
      data.set("property_type", document.getElementById("type").value);
      data.set("message", document.getElementById("message").value);
      data.set("_honey", document.querySelector('[name="_honey"]').value);
      navigator.sendBeacon("https://portal.eversparkcleaning.com/api/public/inquiry", data);
    } catch (err) {
      // Never block or interfere with the real submission over a notification side-channel.
      console.warn("Portal notification beacon failed (non-fatal):", err);
    }
  });
}
