// This function is used to navigato at particular section
export function scrollToSection(e, sectionId) {
  e.preventDefault();
  const targetSection = document.getElementById(sectionId);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}

export function scrollEffect() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
