const bouton = document.querySelector("#encourager");
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
let nombre = 0;

function encourager() {
  nombre = nombre + 1;
  compteur.textContent = "Encouragements : " + nombre;
  if (nombre >= 5) {
    message.textContent = "Bravo, tu avances !";
  } else {
    message.textContent = "Continue, chaque essai compte.";
  }
}

bouton.addEventListener("click", encourager);

const boutonReset = document.querySelector("#reinitialiser");
function reinitialiser() {
  nombre = 0;
  compteur.textContent = "Encouragements : " + nombre;
  message.textContent = "Clique pour commencer.";
}
boutonReset.addEventListener("click", reinitialiser);
