if (history.scrollRestoration) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop.hidden = window.scrollY < 400;
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
