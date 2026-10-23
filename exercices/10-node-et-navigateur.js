// Node.js et le navigateur exécutent le langage JavaScript.
// Leurs API disponibles ne sont pas identiques.
console.log("Langage :", typeof 2);          // number
console.log("Console :", typeof console);   // object
console.log("Document :", typeof document); // undefined dans Node.js
// typeof permet ici de vérifier un nom absent sans provoquer une erreur.
console.log("La prochaine étape se déroule dans le navigateur.");
// document.querySelector(...) directement ici provoquerait une ReferenceError.
// npm run web:01 servira une page ; son JS s'exécutera dans le navigateur.
