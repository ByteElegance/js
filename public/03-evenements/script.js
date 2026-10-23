const bouton = document.querySelector("#encourager");
const message = document.querySelector("#message");
function reagir() {
  message.textContent = "Le bouton a été activé !";
  console.log("Une activation a eu lieu.");
}
// Sans parenthèses : transmettre la fonction pour un appel ultérieur.
bouton.addEventListener("click", reagir);
// Défi : tester aussi Tab puis Entrée ou Espace.
