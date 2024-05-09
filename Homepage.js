//Nav 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//Slides
let slideIndex = 1;
showslides(slideIndex);

function plusslides(n) {
  showslides(slideIndex += n)
}

function currentslide(n) {
  showslides(slideIndex = n);
}

function showslides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Models
const filterButtons = document.querySelectorAll(".filter button");
const filterableCards = document.querySelectorAll(".filterable .card");

const filterCards = e => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  
  filterableCards.forEach(card => {
    card.classList.add("hide");
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "All"){
      card.classList.remove("hide");
    }
  });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));
