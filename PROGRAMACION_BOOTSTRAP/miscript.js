var cont = 1;
   $("#btnAgregar").click(function () {
       var nombre = $("#nombre").val();
       var cedula = $("#cedula").val();
       var correo = $("#correo").val();
       var dir = $("#dir").val();


let fila = `<tr id="${cont}">
   <td>${nombre}</td>
   <td>${cedula}</td>
   <td>${correo}</td>
   <td>${dir}</td>
   <td><button class="btn btn-danger btn-sm" onclick="eliminar(${cont})">
       <i class="bi bi-trash3-fill"></i> Eliminar</button></td>
</tr>`;

cont++;

$("#tabla").append(fila);

$("#nombre, #cedula, #correo, #dir").val("");
});


function eliminar(x){
   $("#"+x).remove();
}
