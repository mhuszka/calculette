
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
var touche = document.querySelectorAll(".touche");


function chiffreChoisi() {
    
    var chiffreValeur = this.innerHTML;
    input.value += chiffreValeur;
}

/*var multiplie = touche[12];

multiplie.addEventListener("click", );*/


/*function fonctionFois() {
    var x = touche[12].innerHTML;
   
    console.log(x);
    return x;
}*/

var btnEgal = document.querySelector(".egal");

btnEgal.addEventListener('click', afficheResultat);

function afficheResultat() {
  
    if(input.value.indexOf("x")!=-1) {
        var x = input.value;
        
        x = x.replace('x','*');
        console.log(x);
        input.value += "=" + (eval(x));
    }
    
    else if(input.value.indexOf("+")!=-1) {
         var x = input.value;
        input.value += "=" + (eval(input.value));
        
    }
    
    else if(input.value.indexOf("-")!=-1) {
         var x = input.value;
        input.value += "=" + (eval(input.value));
        
    }
    
      else if(input.value.indexOf("/")!=-1) {
         var x = input.value;
        input.value += "=" + (eval(input.value));
        
    }
    

}
       
    
    
