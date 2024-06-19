

/* Mission */
var acc = document.getElementsByClassName
    ("accordion");
    var i;

    for(i = 0; i <acc.length ; i++){
        acc[i].addEventListener("click", function
        (){
            this.classList.toggle("active");
            this.parentElement.classList.toggle
            ("active");

            var pannel = this.nextElementSibling;

            if(pannel.style.display === "block"){
                pannel.style.display = "none";

            } else {
                pannel.style.display = "block";
            }
         
        });
    }


/* Testimony*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/*Cleaning second Part*/


    /* HAMBURGER BUTTON */

/*function toggleMenu(){ 
    document.getElementById("navigation").classList.toggle("open"); 
	document.getElementById("hamButton").classList.toggle("open"); 
  
} 

const X = document.getElementById("hamButton")
X.onclick = toggleMenu;*/
