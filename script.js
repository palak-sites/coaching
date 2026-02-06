// Sticky navbar background on scroll (like template)
const navwrap = document.getElementById("navwrap");
if (navwrap) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) navwrap.classList.add("scrolled");
    else navwrap.classList.remove("scrolled");
  });
}

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const mobilemenu = document.getElementById("mobilemenu");

if (hamburger && mobilemenu) {
  hamburger.addEventListener("click", () => {
    mobilemenu.classList.toggle("show");
  });

  // Close mobile menu on link click
  mobilemenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobilemenu.classList.remove("show"));
  });
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-q");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
    if (!isOpen) item.classList.add("active");
  });
});

// Lead form -> WhatsApp message (safe)
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = leadForm.name?.value?.trim() || "";
    const phone = leadForm.phone?.value?.trim() || "";
    const cls = leadForm.class?.value || "";
    const msg = leadForm.message?.value?.trim() || "";

    const text =
      `Hello, I want enquiry.\n\n` +
      `Name: ${name}\nPhone: ${phone}\nClass: ${cls}\nMessage: ${msg}\n\n` +
      `City: Jaipur`;

    const waNumber = "919999999999"; // <-- yaha apna number daal do
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
}

// ✅ Instagram/Facebook in-app map fix (data-src -> src)
document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent || "";
  const isInApp = /Instagram|FBAN|FBAV/i.test(ua);

  const mapFrame = document.getElementById("mapFrame");
  const mapToolbar = document.getElementById("mapToolbar");

  if (!mapFrame || !mapToolbar) return;

  if (isInApp) {
    mapFrame.remove();                  // no iframe => no error
    mapToolbar.style.display = "block"; // show button
  } else {
    const src = mapFrame.getAttribute("data-src");
    if (src) mapFrame.setAttribute("src", src); // load map
    mapToolbar.style.display = "none";
  }
});
