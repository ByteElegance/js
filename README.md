# Workshop JavaScript avec npm

Projet complet pour FORGE. Les étudiants ont déjà exécuté npm init : ils vont apprendre à utiliser scripts dans package.json, exécuter un fichier après l’autre avec Node.js, puis relier JavaScript au HTML dans le navigateur.

## 01 Démarrage sur un projet déjà initialisé

Décompresser l’archive. Ouvrir le dossier forge-introduction-javascript dans VS Code. Pour conserver le projet vierge des étudiants, copier les dossiers exercices, public et infrastructure dans leur dossier existant, puis remplacer son package.json par celui fourni après avoir conservé leur éventuel contenu utile. Ne pas copier le dossier parent en créant une imbrication involontaire.

Dans le terminal intégré de VS Code, se placer dans le dossier qui contient package.json. Exécuter :

```sh
node --version
npm --version
npm run
npm run js:01
```

Le projet vise Node.js 22 ou plus récent. Vérifier la version réellement installée avant le cours. Le champ engines annonce le prérequis, il n’installe pas Node.js et ne garantit pas à lui seul le blocage d’une version incompatible.

Aucune dépendance externe n’est nécessaire. Les scripts utilisent le langage et les modules intégrés à Node.js. Pas besoin de npm install ni de connexion au registre pour exécuter ce projet avec Node.js et npm déjà installés. npm init ne télécharge pas JavaScript et ne construit pas un site : il prépare les métadonnées du projet.

## 02 Comprendre le vocabulaire avant les commandes

Node.js est un environnement qui exécute JavaScript hors du navigateur. npm est un outil associé à l’écosystème Node.js : il gère notamment des paquets et lance les commandes définies dans scripts. Un paquet est un ensemble de fichiers et de métadonnées réutilisables.

Le terminal est une interface où l’on tape des commandes. Le shell les interprète ; le shell peut être fish sous Ubuntu, PowerShell sous Windows ou un autre programme. Les commandes npm du projet sont utilisables dans ces environnements sans syntaxe particulière de variables système.

JSON est un format de données. package.json utilise des clés et des valeurs, des guillemets doubles et des virgules entre les entrées. Il n’accepte ni commentaires // ni virgule après la dernière entrée. JavaScript et JSON ne sont pas le même langage.

Dans scripts, la clé js:01 est un nom de commande choisi par nous. Sa valeur node exercices/01-bonjour.js est la commande exécutée. Le signe : fait partie du nom et sert simplement à classer les commandes. Il n’est pas un opérateur JavaScript dans ce contexte.

Quand on écrit npm run js:01, npm retrouve l’entrée js:01 et lance Node.js avec ce fichier. Le résultat apparaît dans le terminal. Exécuter directement node exercices/01-bonjour.js produit le même exercice ; npm fournit ici un nom stable et facile à retrouver.

## 03 Lire package.json

name identifie le projet. version donne sa version déclarée. private à true empêche sa publication accidentelle via npm publish ; cela ne met pas en place un contrôle d’accès à un site. description décrit l’objectif.

type à module indique à Node.js de traiter les fichiers .js de ce paquet comme des modules ECMAScript. Nos exercices restent simples ; le serveur utilise des imports et une extension .mjs, qui désigne aussi explicitement un module. Ce réglage ne transforme pas les scripts HTML classiques en modules de navigateur.

engines annonce la version de Node.js attendue. scripts contient les commandes du workshop. Aucun champ main n’est requis pour lancer ces commandes : main est un point d’entrée de paquet, pas une instruction qui lance automatiquement le projet. Aucun champ dependencies ou devDependencies n’est nécessaire sans paquet externe.

npm run affiche les commandes disponibles. npm run js:01 lance le premier exercice. npm run dev lance le serveur du site. npm start est un raccourci autorisé par npm pour notre entrée start. npm run js:01 n’a pas de raccourci npm js:01.

## 04 Parcourir les scripts Node.js dans cet ordre

Pour chaque ligne du tableau : ouvrir le fichier correspondant dans VS Code, faire prédire les logs, exécuter la commande, expliquer le résultat, réaliser le défi présent en commentaire, enregistrer puis relancer. Un script terminé rend la main au terminal.

| Commande | Fichier dans exercices | Notion et résultat repère |
| --- | --- | --- |
| npm run js:01 | 01-bonjour.js | Deux messages dans le terminal |
| npm run js:02 | 02-valeurs-types.js | number, string et boolean |
| npm run js:03 | 03-calculs-texte.js | Calculs puis concaténation |
| npm run js:04 | 04-variables.js | Sam puis 0, 1 et 2 |
| npm run js:05 | 05-comparaisons.js | false, true, true, true, false, true |
| npm run js:06 | 06-conditions.js | Message d’attente pour le nombre 4 |
| npm run js:07 | 07-fonctions.js | Bonjour Sam puis Bonjour Nour |
| npm run js:08 | 08-etat-et-portee.js | Compteur 1, 2 puis 3 |
| npm run js:09 | 09-objets-methodes.js | Mon carnet puis 1 |
| npm run js:10 | 10-node-et-navigateur.js | document est undefined dans Node.js |

Les programmes ne demandent pas de saisie interactive : modifier la valeur dans le fichier, enregistrer puis relancer. Chaque exécution crée un nouvel état. Les variables du premier exercice ne se transmettent pas au suivant.

## 05 Passer au navigateur

Dans Node.js ordinaire, document n’existe pas. Le navigateur fournit document et le DOM, une représentation de la page en mémoire. Ce n’est donc pas en exécutant node public/04-compteur/script.js que l’on anime le site.

Lancer :

```sh
npm run dev
```

Ouvrir l’adresse affichée : http://127.0.0.1:3000/. La page d’accueil contient les liens de toutes les étapes, dont la page HTML/CSS sans notre JavaScript. Un seul serveur peut fournir toutes les étapes : inutile de l’arrêter à chaque lien.

Le serveur reste actif et occupe le terminal : c’est normal. Ouvrir un second terminal pour continuer à lancer les exercices, ou arrêter le serveur avec Ctrl+C. Enregistrer puis recharger manuellement le navigateur après une modification. Ce serveur ne fait pas de rechargement automatique et ne remplace pas le moteur JavaScript du navigateur.

127.0.0.1 désigne cet ordinateur. 3000 est le port de notre serveur. /04-compteur/ est le chemin demandé. Le serveur sert seulement les fichiers publics explicitement déclarés, pas le package.json ni les exercices Node.js. Il écoute uniquement en local.

Pour commencer directement sur une étape, arrêter le serveur actif puis utiliser une commande web ci-dessous. Ces commandes lancent le même serveur avec une adresse de départ différente. Elles ne lisent pas automatiquement un fichier de leçon à votre place : ouvrir le fichier dans VS Code et l’URL dans le navigateur.

## 06 Parcourir les étapes Web

| Commande | Dossier dans public | Observation et vérification |
| --- | --- | --- |
| npm run web:01 | 01-selection | Console du navigateur : bouton trouvé puis null pour la cible absente |
| npm run web:02 | 02-texte | Le texte change au chargement, sans clic |
| npm run web:03 | 03-evenements | Une activation change le texte et produit un log |
| npm run web:04 | 04-compteur | Le nombre augmente, le message change au cinquième clic |
| npm run web:05 | 05-reset | Le deuxième bouton remet l’état et les textes à zéro |

Sur chaque étape, parcourir index.html, la feuille partagée public/style.css puis script.js. Ouvrir la console du navigateur, distincte du terminal de VS Code. Sous Ubuntu, Ctrl+Maj+J dans Chrome/Chromium ou Ctrl+Maj+K dans Firefox ouvrent généralement la console ; utiliser les menus si nécessaire.

Chaque dossier conserve sa version propre pour pouvoir comparer les étapes. La page HTML/CSS de départ n’inclut pas de script. Les pages suivantes contiennent dans head :

```html
<link rel="stylesheet" href="/style.css">
<script src="./script.js" defer></script>
```

Le / initial de /style.css désigne la racine de notre serveur : toutes les pages partagent cette feuille. ./script.js désigne le script voisin de la page de l’étape. defer permet à notre script classique externe de s’exécuter après l’analyse du HTML, lorsque les éléments existent. Les balises script restent dans HTML et ne doivent pas être copiées dans le fichier JavaScript.

Le mot « importer » désigne ici relier un script externe au HTML. L’instruction import des modules JavaScript est une autre notion, utilisée uniquement dans l’infrastructure fournie.

## 07 Expliquer les lignes du projet final

Dans public/04-compteur/script.js, querySelector reçoit un sélecteur CSS et renvoie le premier élément correspondant, ou null si rien ne correspond. #encourager recherche id="encourager". Un id doit être unique dans le document.

Les trois const conservent les références aux éléments. Modifier compteur.textContent ne réaffecte pas compteur : on change une propriété de l’objet référencé. let nombre = 0 initialise l’état réaffectable.

function encourager déclare le comportement. Au moment de cette déclaration, les lignes du corps ne s’exécutent pas encore. Au clic, nombre = nombre + 1 lit l’ancienne valeur, calcule puis affecte la nouvelle. La ligne textContent met à jour la page : elle n’est pas automatique quand la variable change.

if (nombre >= 5) choisit le message. >= inclut exactement le seuil 5. Sinon, else choisit le message d’attente. Enfin addEventListener("click", encourager) enregistre la fonction sans l’appeler immédiatement. Avec encourager(), on l’appellerait au moment de l’enregistrement et l’on transmettrait son résultat au lieu de la fonction attendue.

La version 05 ajoute une fonction de remise à zéro. Il faut modifier nombre et les deux textes. Réinitialiser seulement nombre ne suffit pas à actualiser ce qui est affiché.

## 08 Tester le comportement réel

Avant tout clic : compteur à 0 et message initial. Après 1 et 4 clics : même message d’attente et nombre correspondant. Après 5 et 6 clics : message de réussite. Recharger : retour à 0, car aucune sauvegarde n’est programmée.

Utiliser Tab pour atteindre le bouton puis Entrée ou Espace pour l’activer. Garder le bouton HTML natif et l’indicateur de focus du CSS. Dans la version 05, tester remise à zéro avant tout clic, après le seuil puis un nouveau clic, qui doit donner 1. Le rôle status du compteur vise à annoncer sa mise à jour aux technologies d’assistance ; vérifier le comportement avec les outils du public concerné.

## 09 Diagnostiquer les problèmes courants

ENOENT avec package.json : vérifier le dossier courant. Missing script : vérifier le nom exact et afficher npm run. EJSONPARSE : vérifier les guillemets doubles et les virgules du JSON. Si node est inconnu, l’installation ou le PATH du poste doit être corrigé avant le workshop.

EADDRINUSE signifie que le port est déjà occupé. Arrêter l’ancien serveur avec Ctrl+C ou lancer npm run dev -- 3001 puis utiliser l’adresse annoncée. Pour une étape : npm run web:04 -- 3001. Le séparateur -- transmet ici l’argument à la commande configurée.

ReferenceError document is not defined signifie généralement que le script de page a été lancé dans Node.js. Démarrer le serveur et ouvrir la page dans le navigateur. Une recherche null demande de vérifier l’id, le sélecteur, la bonne page et defer.

Après une modification sans effet : enregistrer, recharger et vérifier quelle étape est ouverte. Les logs des exercices Node.js apparaissent dans le terminal ; ceux des scripts de page apparaissent dans la console du navigateur. Si le compteur augmente trop vite, rechercher une double inclusion ou plusieurs écouteurs.

## 10 Ordre conseillé pour le formateur

Commencer par montrer npm run js:01 et la ligne correspondante dans package.json. Puis faire commenter les symboles et les résultats, script après script. Garder les détails techniques de infrastructure/serveur.mjs pour une autre séance : son rôle doit être compris, sa réalisation complète n’est pas un prérequis de cette introduction.

Après js:10, montrer le navigateur sans JS puis ajouter l’élément script dans une copie de la version de départ. Utiliser les dossiers Web comme points de contrôle. Ne pas avancer si un binôme ne sait pas raconter « sélectionner, garder l’état, définir la fonction, enregistrer l’écouteur, réagir et afficher ».

Ce projet remplace le démarrage avec Live Server pour ce workshop npm. Il n’est pas nécessaire de lancer les deux serveurs. npm n’est pas une condition pour écrire JavaScript dans le navigateur ; il fournit ici un point d’entrée cohérent pour la classe.

## 11 Sources officielles

Exemples et exercices originaux ; documentation de référence :

- [MDN introduction à JavaScript](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [MDN grammaire et types](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions)
- [MDN querySelector](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
- [MDN addEventListener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [MDN élément script](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/script)
- [npm scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts/)
- [npm package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/)
- [Node.js modules et paquets](https://nodejs.org/api/packages.html)
- [Node.js HTTP](https://nodejs.org/api/http.html)
