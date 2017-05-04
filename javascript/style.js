
// CLAVIER

// création du clavier 

var clavier = document.querySelector(".clavier");

for(char of "1234567890-+x/"){

    clavier.innerHTML += "<div class='touche'>" + char + "</div>";   
}
var equal = document.createElement("button")
equal.setAttribute('class', 'egal');
document.body.querySelector(".clavier").appendChild(equal);

// CALCULATRICE

// variables

var chiffreClavier = document.querySelectorAll(".touche");
var input = document.querySelector("input");

// évènements

for(i=0; i<chiffreClavier.length; i++) {

    chiffreClavier[i].addEventListener("click", chiffreChoisi);
}

// déclaration d'une fonction

function chiffreChoisi() {
    
    var chiffreValeur = this.innerHTML;
    input.value += chiffreValeur;
}

var btnEgal = document.querySelector(".egal");
console.log(btnEgal);

btnEgal.addEventListener('click', afficheResultat);

function afficheResultat() {
    
    input.value += eval(input.value);   
}