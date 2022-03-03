let slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
    let i;
    let slides = document.getElementsByClassName("slider6");
    let dots = document.getElementsByClassName("dot6");
  if (n > slides.length) {slideIndex6 = 1}    
  if (n < 1) {slideIndex6 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex6-1].style.display = "block";  
  dots[slideIndex6-1].className += " active";
}