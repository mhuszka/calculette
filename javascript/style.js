
// CLAVIER

// création du clavier 

var clavier = document.querySelector(".clavier");

for(char of "1234567890-+x/"){

    clavier.innerHTML += "<div class='touche'>" + char + "</div>";   
}
var equal = document.createElement("button")
equal.setAttribute('class', 'egal');
equal.innerHTML = "=";
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
var touche = document.querySelectorAll(".touche");



function chiffreChoisi() {
    var longText = input.value;
    
    if (longText.length < 8){
        var chiffreValeur = this.innerHTML;
        input.value += chiffreValeur;
    }
}

/*var multiplie = touche[12];

multiplie.addEventListener("click", fonctionFois);


function fonctionFois() {
    var x = touche[12].innerHTML;
    x = x.replace('x','*');
    console.log(x);
}*/

var btnEgal = document.querySelector(".egal");

btnEgal.addEventListener('click', afficheResultat);

function afficheResultat() {
  
/*    if(touche.includes([12]))
    console.log("true");*/
    
    input.value += "=" + eval(input.value);
    
}


// FONCTION EFFACE TOUT
var clear = document.querySelector('.clear');

clear.addEventListener('click', effaceTout);

function effaceTout(){
    input.value="";
    document.body.style.backgroundImage = "url('./calculatrice_enfant-05.svg')";
}


//FONCTIONS CHANGE BACKGROUND

var divi = touche[13];
var fois = touche[12];
var moins = touche[10];
var plus = touche[11];
var bgBody = document.querySelector("body");


function afficheBg(){
    document.body.style.backgroundImage = "url('./calculatrice_enfant-05.svg')";

}
afficheBg();


plus.addEventListener('click', changefondplus);

function changefondplus(){
    document.body.style.backgroundImage = "url('./plus-01.svg')";
}

moins.addEventListener('click', changefondmoins);

function changefondmoins(){
    document.body.style.backgroundImage = "url('./mois-01.svg')";
}


fois.addEventListener('click', changefondfois);

function changefondfois(){
    document.body.style.backgroundImage = "url('./fois-01.svg')";
}


divi.addEventListener('click', changefonddivi);

function changefonddivi(){
    document.body.style.backgroundImage = "url('./divi-01.svg')";
}





