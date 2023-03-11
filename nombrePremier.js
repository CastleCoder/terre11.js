// Créez un programme qui affiche si un nombre est premier ou pas.


// Exemples d’utilisation :
// $> node exo.js 5
// Oui, 5 est un nombre premier.

// $> node exo.js 6
// Non, 6 n’est pas un nombre premier.

// Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.

const args = process.argv.slice(2);

function number(a){
  if(isNaN(a)||args.length !==1||a<=1){
    console.log("Erreur !")
  } else if (a ===2){
    console.log("Ce chiffre est un nombre premier.")
    }
    else {
      let i;
      for(i=2; i<=Math.sqrt(a); i++){
       if (a % i === 0) {
        console.log("Ce chiffre n'est pas un nombre premier.");
        break;
       }
    }
    if(i > Math.sqrt(a)){
      console.log("Ce chiffre est un nombre premier.")
      }
    }
}

number(args[0]);