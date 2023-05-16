function afficherTable() { 
  var input = document.getElementById("nombre")
  var n = parseInt(input.value);
  var table = "";

  for (var i = 1; i <= 10; i++) {
      table += n + " x " + i + " = " + (n * i) + "\n";
    }
    alert("Table de multiplication de " + n + " :\n\n" + table);
  }