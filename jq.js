//Repuestos
/*var repuestos = [
    {
        "idRep": "1",
        "Marca": "Marca1",
        "Modelo": "ModeloX",
        "Precio": 5000,
        "Tipo": "Venta",
        "Cantidad": 5
    },
    {
        "idRep": "2",
        "Marca": "Marca2",
        "Modelo": "ModeloY",
        "Precio": 4000,
        "Tipo": "Venta",
        "Cantidad": 15
    },
    {
        "idRep": "3",
        "Marca": "Marca3",
        "Modelo": "ModeloZ",
        "Precio": 6000,
        "Tipo": "venta",
        "Cantidad": 10
    },
]*/

var repuestos = new Array()
repuestos[0] = new Array("Marca1", "ModeloX", "5000", "Venta", 5)
repuestos[1] = new Array("Marca2", "ModeloY", "4000", "Venta", 6)
repuestos[2] = new Array("Marca3", "ModeloZ", "7000", "Venta", 10)
repuestos[3] = new Array("Marca4", "ModeloA", "8000", "Reparacion", 5)
//Validacion para ingresar datos

var marca = "";
var modelo = "";
var precio = 0;
var cantidad = "";
var tVenta = "";
var tReparacion = "";
var tipo = "";
var tabla = "";

$("#btnRegistrar").on('click', function () {
    marca = $('#inputMarca').val();
    modelo = $('#inputModelo').val();
    precio = $('#inputPrecio').val();
    cantidad = $('#inputCantidad').val();

    tVenta = document.getElementById("inlineRadio2");
    tReparacion = document.getElementById("inlineRadio1");
    tipo = (tVenta.checked ? "Venta" : "Reparacion")


    if (marca == '') {
        alert("Por favor ingrese la marca");
        return;
    }

    if (precio == "") {
        alert("Por favor ingrese el precio");
        return;
    }

    if (cantidad == '') {
        alert("Por favor ingrese la cantidad");
        return;
    }

    // var repLength = repuestos.length;
    // repuestos[repLength] = new Array (marca,modelo,precio,tipo,cantidad);
    var obj = [marca,modelo,precio,tipo,cantidad];
    repuestos.push(obj);

    alert("Repuesto agregado");
})
$("#btnLimpiar").on("click",function(){ 
    $('#inputMarca').val("");
    $('#inputModelo').val("");
    $('#inputPrecio').val("");
    $('#inputCantidad').val("");
})


$("#selectTipoRepuesto").on("change",function(){
    var opcion = $("#selectTipoRepuesto option:selected").val();
    cargarTabla(opcion);
})

$("#tableDiv").ready(function () {
    cargarTabla("Venta");
});

function cargarTabla(opcion) {
    document.getElementById("tableDiv").innerHTML = "";
    var myTableDiv = document.getElementById("tableDiv")
    var table = document.createElement('TABLE')
    table.className = "table";
    var tableBody = document.createElement('TBODY')

    table.border = '1'
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "Marca"
    heading[1] = "Modelo"
    heading[2] = "Precio"
    heading[3] = "Tipo"
    heading[4] = "Cantidad"

    //COLUMNAS DE LA TABLA
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }
    //FILAS DE LA TABLA
    for (i = 0; i < repuestos.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < repuestos[i].length; j++) {
            if (repuestos[i][3] == opcion) {
                var td = document.createElement('TD')
                td.appendChild(document.createTextNode(repuestos[i][j]));
                tr.appendChild(td)
            }
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}

