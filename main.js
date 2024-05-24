

/* Testimony */
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

    /* HAMBURGER BUTTON */

function toggleMenu(){ 
    document.getElementById("navigation").classList.toggle("open"); 
	document.getElementById("hamButton").classList.toggle("open"); 
  
} 

const X = document.getElementById("hamButton")
X.onclick = toggleMenu;