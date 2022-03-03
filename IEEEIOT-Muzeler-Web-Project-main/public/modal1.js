window.onload=function(){
    // Get the modal
const modal = document.getElementById("myModal");
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const modal5 = document.getElementById('myModal5');
const modal6 = document.getElementById('myModal6');



// Get the button that opens the modal
const img1 = document.getElementById("imageLouvre");
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');



// Get the <span> element that closes the modal
const span =  document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];
const span4 = document.getElementsByClassName("close")[3];
const span5 = document.getElementsByClassName("close")[4];
const span6 = document.getElementsByClassName("close")[5];
 
// When the user clicks the button, open the modal 
img1.onclick = function() {
  modal.style.display = "block";
}
img2.onclick = function() {
    modal2.style.display = "block";
}
img3.onclick = function() {
  modal3.style.display = "block";
}
img4.onclick = function() {
  modal4.style.display = "block";
}
img5.onclick = function() {
  modal5.style.display = "block";
}
img6.onclick = function() {
  modal6.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  span4.onclick = function() {
      modal4.style.display = "none";
    }
    span5.onclick = function() {
      modal5.style.display = "none";
    }
    span6.onclick = function() {
        modal6.style.display = "none";
      }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }

}
}


  

  
