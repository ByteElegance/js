// = affecte une valeur. === compare sans conversion de type.
const seuil = 5;
console.log(4 >= seuil); // false
console.log(5 >= seuil); // true
console.log(6 > seuil);  // true
console.log(5 === 5);    // true
console.log(5 === "5");  // false
console.log(5 !== 3);    // true : différent en comparaison stricte
// Défi : comparer > et >= à la frontière exacte du seuil.
