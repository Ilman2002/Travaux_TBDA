function calculerPrix() {

    var PU = parseFloat(document.getElementById("prixUnitaire").value);
    var QTECOM = parseInt(document.getElementById("quantite").value);

    var TOT = PU * QTECOM;

    /*Calcul de la remise*/
    var REM;
    if (TOT >= 100 && TOT <= 200) {
      REM = TOT * 0.05;
    } else if (TOT < 100) {
      REM = 0
    }
    else {
      REM = TOT * 0.1;
    }

    /*Calcul du prix à payer avec remise*/
    var PAP = TOT - REM;

    /*Calcul des frais de port*/
    var PORT;
    if (PAP > 500) {
      PORT = 0;
    } else {
      PORT = PAP * 0.02;
      if (PORT < 6) {
        PORT = 6;
      }
    }

    /*Prix à payer total*/
    PAP += PORT;

    document.getElementById("prixUnitaireResultat").textContent = PU.toFixed(2) + " €";
    document.getElementById("quantiteResultat").textContent = QTECOM;
    document.getElementById("remiseResultat").textContent = REM.toFixed(2) + " €";
    document.getElementById("portResultat").textContent = PORT.toFixed(2) + " €";
    document.getElementById("prixAPayerResultat").textContent = PAP.toFixed(2) + " €";
  }