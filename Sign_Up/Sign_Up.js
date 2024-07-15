const slidepage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const bullets = document.querySelectorAll(".step .bullet");
const names = document.querySelectorAll(".step p"); // Updated selector to select paragraph elements inside .step
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  slidepage.style.marginLeft = "-25%";
  activateStep(current);
  current += 1;
});

nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidepage.style.marginLeft = "-50%";
  activateStep(current);
  current += 1;
});

nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidepage.style.marginLeft = "-75%";
  activateStep(current);
  current += 1;
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  activateStep(current);
  current += 1;
  setTimeout(function () {
    alert("Your Form Successfully Signed Up");
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidepage.style.marginLeft = "0%";
  deactivateStep(current - 1);
  current -= 1;
});

prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidepage.style.marginLeft = "-25%";
  deactivateStep(current - 1);
  current -= 1;
});

prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidepage.style.marginLeft = "-50%";
  deactivateStep(current - 1);
  current -= 1;
});

function activateStep(index) {
  bullets[index - 1].classList.add("active");
  names[index - 1].classList.add("active");
}

function deactivateStep(index) {
  bullets[index - 1].classList.remove("active");
  names[index - 1].classList.remove("active");
}
