
function myCreateFunction() {
    var nPartido = document.getElementById("Pname").Value;
    var Orientacion = document.getElementById("Orientacion").Value;
    var votos = document.getElementById("Vnumber").Value

    var table = document.getElementById("partidos");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "hola";
    cell2.innerHTML = Orientacion.Value;
    cell3.innerHTML = votos;
}


    