// Ce script est exécuté par le navigateur, pas par Node.js.
const bouton = document.querySelector("#encourager");
console.log("Le bouton trouvé :", bouton);
console.log("Une cible absente :", document.querySelector("#absent"));
// Ouvrir la console du navigateur. La seconde recherche donne null.
// Le bouton n'a pas encore de comportement écrit par nous.
