let slideIndex2 = 1;


const plusSlides2 = (n) => {
  showSlides2(slideIndex2 += n);
}

const currentSlide2 = (n) => {
  showSlides2(slideIndex2 = n);
}

const showSlides2 = (n) => {
    var i;
    let slides = document.getElementsByClassName("slider2");
    let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
}
showSlides2(slideIndex2);