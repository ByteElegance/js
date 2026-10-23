// Un objet regroupe des propriétés. Une propriété contient une valeur.
const carnet = {
  titre: "Mon carnet",
  nombre: 0
};
console.log(carnet.titre);
carnet.nombre = carnet.nombre + 1;
console.log(carnet.nombre); // 1
// const empêche de réaffecter carnet, pas de modifier ses propriétés.
// Une méthode est une fonction accessible depuis un objet : console.log.
// Défi : ajouter une propriété auteur et afficher sa valeur.
