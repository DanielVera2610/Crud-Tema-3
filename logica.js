var selectedRow = null;
function onFormSubmit(){
event.preventDefault();
var Datos = LeerInfo();
if(selectedRow == null){
    Insertar(Datos);
}else{
Actualizar(Datos);

}   
limpiar();
}

function LeerInfo(){
    var Datos= {};
    Datos["CodigoAl"] = document.getElementById("CodigoAl").value;
    Datos["Alumno"] = document.getElementById("Alumno").value;
    Datos["Grado"] = document.getElementById("Grado").value;
    Datos["Grupo"] = document.getElementById("Grupo").value;
    return Datos;

}

function Insertar(data){
    var table = document.getElementById('Encabezados').getElementsByTagName('tbody')[0];
    var nuevaFila = table.insertRow(table.length);
    var celda1 = nuevaFila.insertCell(0);
    celda1.innerHTML = data.CodigoAl;
    var celda2 = nuevaFila.insertCell(1);
    celda2.innerHTML = data.Alumno;
    var celda3 = nuevaFila.insertCell(2);
    celda3.innerHTML = data.Grado;
    var celda4 = nuevaFila.insertCell(3);
    celda4.innerHTML = data.Grupo;
    var celda5 = nuevaFila.insertCell(4);
    celda5.innerHTML = `<button onClick='Editar(this)' class="modificar"> Modificar </button> <button onClick='Eliminar(this)' class="eliminar"> Eliminar </button>`
}

function Editar(td){
   selectedRow = td.parentElement.parentElement;
   document.getElementById('CodigoAl').value = selectedRow.cells[0].innerHTML;
   document.getElementById('Alumno').value = selectedRow.cells[1].innerHTML;
   document.getElementById('Grado').value = selectedRow.cells[2].innerHTML;
   document.getElementById('Grupo').value = selectedRow.cells[3].innerHTML;
}

function Actualizar(Datos){
selectedRow.cells[0].innerHTML = Datos.CodigoAl;
selectedRow.cells[1].innerHTML = Datos.Alumno;
selectedRow.cells[2].innerHTML = Datos.Grado;
selectedRow.cells[3].innerHTML = Datos.Grupo;

}

function Eliminar(td){
   if(confirm('¿Seguro que desea eliminar el registro?')){
    row = td.parentElement.parentElement;
    document.getElementById('Encabezados').deleteRow(row.rowIndex);
   }
   limpiar();
}

function limpiar(){
    document.getElementById('CodigoAl').value = '';
    document.getElementById('Alumno').value = '';
    document.getElementById('Grado').value = '';
    document.getElementById('Grupo').value = '';
}