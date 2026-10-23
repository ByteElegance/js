// Déclarer la fonction ne lance pas son corps.
function saluer(prenom) {
  return "Bonjour " + prenom;
}
// prenom est un paramètre ; "Sam" est un argument.
const message = saluer("Sam");
console.log(message);
console.log(saluer("Nour"));
// return renvoie une valeur ; console.log l'affiche.
// Défi : écrire ajouterUn(valeur), puis afficher ajouterUn(4).
