document.querySelector("#pierre").onclick = jouer;
document.querySelector("#papier").onclick = jouer;
document.querySelector("#ciseaux").onclick = jouer;

function jouer(event) {
  let jeu = document.querySelector("#jeu");
  let joueur = event.target.dataset.choix;
  let ordinateur = "pierre";

  // Le tirage fourni produit 0, 1 ou 2.
  let tirage = Math.floor(Math.random() * 3);
  if (tirage === 1) {
    ordinateur = "papier";
  } else if (tirage === 2) {
    ordinateur = "ciseaux";
  }

  jeu.dataset.joueur = joueur;
  jeu.dataset.ordinateur = ordinateur;

  let resultat = "Défaite"; // Par défaut c'est une défaite

  if (joueur === ordinateur) {
    resultat = "Égalité";
  } else if (
    (joueur === "pierre" && ordinateur === "ciseaux") ||
    (joueur === "papier" && ordinateur === "pierre") ||
    (joueur === "ciseaux" && ordinateur === "papier")
  ) {
    resultat = "Victoire";
  }


  document.querySelector("#choix-joueur").src = `images/${joueur}.svg`;
  document.querySelector("#choix-joueur").alt = joueur;

  document.querySelector("#choix-ordinateur").src = `images/${ordinateur}.svg`;
  document.querySelector("#choix-ordinateur").alt = ordinateur;

  jeu.dataset.resultat = resultat;
  message.textContent = resultat;

  document.querySelector("#choix").hidden = true;
  document.querySelector("#resultat").hidden = false;
  message.focus();
}

