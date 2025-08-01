document.querySelectorAll(".image-comp").forEach((comp) => {
  const slider = comp.querySelector(".slider");
  const beforeImage = comp.querySelector(".before-image");
  const sliderLine = comp.querySelector(".slider-line");
  const sliderIcon = comp.querySelector(".slider-icon");

  slider.addEventListener("input", (e) => {
    const value = e.target.value + "%";
    beforeImage.style.width = value;
    sliderLine.style.left = value;
    sliderIcon.style.left = value;
  });
});





const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  console.log(entry)
   if (entry.isIntersecting) {
       entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const animElements = document.querySelectorAll(".anim");
animElements.forEach((el) => observer.observe(el));