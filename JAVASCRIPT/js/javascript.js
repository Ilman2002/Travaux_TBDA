{var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prenom");
window.alert("Votre nom : " + (reponse1) + "                                                                                                    Votre prenom : " + (reponse2))
}

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
} 