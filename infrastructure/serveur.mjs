// Infrastructure fournie par le formateur. À expliquer après les bases.
// Ce programme Node.js fournit des fichiers ; les scripts des pages sont
// ensuite exécutés séparément par le navigateur.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const routes = new Map([
  [
    "/",
    [
      "index.html",
      "text/html; charset=utf-8"
    ]
  ],
  [
    "/style.css",
    [
      "style.css",
      "text/css; charset=utf-8"
    ]
  ],
  [
    "/00-html-css/",
    [
      "00-html-css/index.html",
      "text/html; charset=utf-8"
    ]
  ],
  [
    "/01-selection/",
    [
      "01-selection/index.html",
      "text/html; charset=utf-8"
    ]
  ],
  [
    "/01-selection/script.js",
    [
      "01-selection/script.js",
      "text/javascript; charset=utf-8"
    ]
  ],
  [
    "/02-texte/",
    [
      "02-texte/index.html",
      "text/html; charset=utf-8"
    ]
  ],
  [
    "/02-texte/script.js",
    [
      "02-texte/script.js",
      "text/javascript; charset=utf-8"
    ]
  ],
  [
    "/03-evenements/",
    [
      "03-evenements/index.html",
      "text/html; charset=utf-8"
    ]
  ],
  [
    "/03-evenements/script.js",
    [
      "03-evenements/script.js",
      "text/javascript; charset=utf-8"
    ]
  ],
  [
    "/04-compteur/",
    [
      "04-compteur/index.html",
      "text/html; charset=utf-8"
    ]
  ],
  [
    "/04-compteur/script.js",
    [
      "04-compteur/script.js",
      "text/javascript; charset=utf-8"
    ]
  ],
  [
    "/05-reset/",
    [
      "05-reset/index.html",
      "text/html; charset=utf-8"
    ]
  ],
  [
    "/05-reset/script.js",
    [
      "05-reset/script.js",
      "text/javascript; charset=utf-8"
    ]
  ]
]);
const cheminDepart = process.argv[2] ?? "/";
const port = Number(process.argv[3] ?? 3000);
if (!routes.has(cheminDepart) || !Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("Usage : node infrastructure/serveur.mjs /chemin/ [port de 1 à 65535]");
  process.exit(1);
}

const serveur = createServer(async function repondre(requete, reponse) {
  if (requete.method !== "GET" && requete.method !== "HEAD") {
    reponse.writeHead(405, { "Allow": "GET, HEAD" });
    reponse.end("Méthode non autorisée");
    return;
  }
  let chemin;
  try {
    chemin = new URL(requete.url, "http://localhost").pathname;
  } catch {
    reponse.writeHead(400);
    reponse.end("Requête invalide");
    return;
  }
  const fichier = routes.get(chemin);
  if (!fichier) {
    reponse.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    reponse.end("Ressource introuvable. Utilise un lien du parcours à la racine /.");
    return;
  }
  try {
    const contenu = await readFile(new URL("../public/" + fichier[0], import.meta.url));
    reponse.writeHead(200, { "Content-Type": fichier[1], "Cache-Control": "no-store" });
    reponse.end(requete.method === "HEAD" ? undefined : contenu);
  } catch {
    reponse.writeHead(500);
    reponse.end("Fichier indisponible. Vérifie le contenu du dossier public.");
  }
});

serveur.on("error", function expliquerErreur(erreur) {
  console.error(erreur.code === "EADDRINUSE"
    ? "Port occupé. Arrête l’autre serveur ou utilise : npm run dev -- 3001"
    : "Impossible de démarrer le serveur : " + erreur.message);
  process.exitCode = 1;
});
serveur.listen(port, "127.0.0.1", function annoncerAdresse() {
  console.log("Ouvre dans le navigateur : http://127.0.0.1:" + port + cheminDepart);
  console.log("Enregistre puis recharge la page. Arrêt du serveur : Ctrl+C.");
});
