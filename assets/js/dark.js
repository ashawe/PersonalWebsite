function darkToggle() {
  let element = document.body;
  let headernav = document.querySelector(".nav-inner");
  let h3 = document.querySelectorAll("h3");
  let h4 = document.querySelectorAll("h4");
  let h5 = document.querySelectorAll("h5");
  let a = document.querySelectorAll("a");
  let icon = document.getElementById("nav-icon");
  let socialLinks = document.querySelectorAll(".social-icons");

  element.classList.toggle("dark");
  headernav.classList.toggle("nav-dark");
  icon.classList.toggle("fa-sun");

  for (let i = 0; i < h3.length; i++) h3[i].classList.toggle("sec-dark");
  for (let i = 0; i < h4.length; i++) h4[i].classList.toggle("sec-dark");
  for (let i = 0; i < h5.length; i++) h5[i].classList.toggle("sec-dark");
  for (let i = 0; i < a.length; i++) a[i].classList.toggle("sec-dark");
  for (let i = 0; i < socialLinks.length; i++)
    socialLinks[i].classList.toggle("sec-dark");
}
