
function myCreateFunction() {
    var nPartido = document.getElementById("Pname").value;
    var Orientacion = document.getElementById("Orientacion").value;
    var votos = document.getElementById("Vnumber").value;

    var table = document.getElementById("partidos");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    var cell3 = row.insertCell(2);
    

    cell1.innerHTML = nPartido;
    cell2.innerHTML = Orientacion;
    if (votos > 50) {
        cell3.innerHTML = "50+"
     } else if (votos < 50) {
        cell3.innerHTML = "-50";
     } else if (votos === 50){
         cell3.innerHTML = "50";
     }
    


    
    
}


    