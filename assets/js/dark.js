function darkToggle() {
  let element = document.body;
  let headernav = document.querySelector(".nav-inner");
  let h3 = document.querySelectorAll("h3");
  let h4 = document.querySelectorAll("h4");
  let socialLinks = document.querySelectorAll(".social-icons a");

  element.classList.toggle("dark");
  headernav.classList.toggle("nav-dark");

  for (let i = 0; i < h3.length; i++) h3[i].classList.toggle("sec-dark");
  for (let i = 0; i < h4.length; i++) h4[i].classList.toggle("sec-dark");
  for (let i = 0; i < socialLinks.length; i++)
    socialLinks[i].classList.toggle("sec-dark");
}
