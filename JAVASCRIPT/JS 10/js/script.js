function creerTableau() {
    var taille = parseInt(document.getElementById("taille").value);
    var tableau = [];

    for (var i = 0; i < taille; i++) {
      var valeur = prompt("Entrez la valeur pour l'index " + i + " :");
      tableau.push(valeur);
    }

    var tableauHTML = "<table>";
    for (var i = 0; i < tableau.length; i++) {
      tableauHTML += "<tr><td>" + tableau[i] + "</td></tr>";
    }
    tableauHTML += "</table>";

    var resultat = document.getElementById("resultat");
    resultat.innerHTML = tableauHTML;
  }