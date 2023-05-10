function check(){
    var age;
    age = Number(document.getElementById("age").value);
    if(2023-age<=18)
    {
       alert("Vous êtes mineur");
    }
    else
    {
       alert("Vous êtes majeur");
    }
}