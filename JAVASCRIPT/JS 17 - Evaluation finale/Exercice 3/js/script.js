var prenoms = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

/*supprimer un prénom*/
function supprimerPrenom() {
  var prenomSaisi = document.getElementById("prenom").value;
  var index = prenoms.indexOf(prenomSaisi);

  if (index !== -1) {
    /* Supprimer le prénom et décaler les cases suivantes*/
    for (var i = index; i < prenoms.length - 1; i++) {
      prenoms[i] = prenoms[i + 1];
    }
    /* Mettre à blanc la dernière case*/
    prenoms[prenoms.length - 1] = "";

    afficherPrenoms();
  } else {
    alert("Le prénom n'a pas été trouvé.");
  }
}

/*afficher les prénoms dans un tableau*/
function afficherPrenoms() {
  var table = document.getElementById("tableau");
  table.innerHTML = "";

  for (var i = 0; i < prenoms.length; i++) {
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    cell.textContent = prenoms[i];
    row.appendChild(cell);
    table.appendChild(row);
  }
}

window.onload = function() {
  afficherPrenoms();
};
