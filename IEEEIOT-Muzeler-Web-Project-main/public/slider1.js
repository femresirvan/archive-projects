let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let slides2 = document.getElementsByClassName("slider1");
  let dots2 = document.getElementsByClassName("dot1");
  if (n > slides2.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides2.length}
  for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (let i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex1-1].style.display = "block";  
  dots2[slideIndex1-1].className += " active";
}