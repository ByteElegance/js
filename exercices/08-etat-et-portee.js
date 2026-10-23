// L'état est défini à l'extérieur pour survivre entre les appels.
let nombre = 0;
function encourager() {
  nombre = nombre + 1;
  console.log("Encouragements : " + nombre);
}
encourager(); // 1
encourager(); // 2
encourager(); // 3
// Défi : déplacer let nombre = 0 dans la fonction et prédire le résultat.
// Revenir ensuite à la version initiale.
