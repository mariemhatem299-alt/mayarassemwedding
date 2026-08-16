const loader = document.getElementById("loader");
window.addEventListener("load", () => setTimeout(() => loader.classList.add("hide"), 700));

const cursor = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const petals = document.querySelector(".petals");
for (let i = 0; i < 24; i++) {
  const p = document.createElement("span");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "%";
  p.style.animationDuration = (7 + Math.random() * 9) + "s";
  p.style.animationDelay = (-Math.random() * 12) + "s";
  p.style.opacity = (0.18 + Math.random() * 0.45).toFixed(2);
  p.style.transform = `scale(${0.45 + Math.random() * 0.9})`;
  petals.appendChild(p);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const heroPhoto = document.querySelector(".hero-photo");
window.addEventListener("scroll", () => {
  const y = Math.min(window.scrollY * 0.12, 100);
  if (heroPhoto && window.scrollY < window.innerHeight) {
    heroPhoto.style.transform = `translateY(${y}px)`;
  }
}, { passive: true });
