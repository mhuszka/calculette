var clavier = document.querySelector(".clavier");

for(char of "1234567890-+x/"){

    clavier.innerHTML += "<div class='touche'>" + char + "</div>";  
}

var chiffreClavier = document.querySelectorAll(".touche");

for(i=0; i<chiffreClavier.length; i++) {

    chiffreClavier[i].addEventListener("click", lettreChoisie);
}