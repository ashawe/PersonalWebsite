function darkToggle() {
  let element = document.body;
  let headernav = document.getElementById("navbar");
  let h3 = document.getElementsByTagName("h3");

  element.classList.toggle("dark");
  headernav.classList.toggle("nav-dark");

  for (let i = 0; i < h3.length; i++) {
   h3[i].classList.toggle("sec-dark");
  }
}
