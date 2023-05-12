function countAges() {
    let age;
    let countYoungerThan20 = 0;
    let countOlderThan40 = 0;
    let countBetween20And40 = 0;

    do {
      age = prompt("Entrez un âge (saisissez un centenaire pour arrêter) :");

      if (age !== null && age !== "") {
        age = parseInt(age);
        if (!isNaN(age)) {
          if (age < 20) {
            countYoungerThan20++;
          } else if (age > 40) {
            countOlderThan40++;
          } else {
            countBetween20And40++;
          }
        }
      }
    } while (age !== null && age < 100);

    document.getElementById("result").innerHTML = "<p>Nombre de personnes d'âge strictement inférieur à 20 ans : " + countYoungerThan20 + "</p>" +
      "<p>Nombre de personnes d'âge strictement supérieur à 40 ans : " + countOlderThan40 + "</p>" +
      "<p>Nombre de personnes d'âge compris entre 20 ans et 40 ans : " + countBetween20And40 + "</p>";
  }

  window.onload = function() {
    countAges();
  };