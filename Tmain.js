//1. CREA UN ARRAY VACÍO PARA GUARDAR LOS NOMBRES DE LA LISTA:
 var nombre_alumno_array = [];
    
function submit()
{
    var ver_alumno_array = [];

    //2. UTILIZA EL BUCLE FOR PARA AGREGAR LOS NOMBRES EN EL ARRAY:
     for(var j = 1; j<= 4; j++)
    {
        var nombre_alumno = document.getElementById("nombre_alumno_"+j).value;
    //PUSH sirve para agregar un nuevo valor a array.    
        nombre_alumno_array.push(nombre_alumno);
    }


    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    

    //3. UTILIZA EL BUCLE FOR PARA SABER LA LONGITUD DE LOS NOMBRES EN EL ARRAY:
     for(var k = 0; k<longitud_nombre_alumnos_array; k++)
    {
        ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k] + "</h4>");
       
    }

    //4. COLOCA LOS NOMBRES DE LA LISTA EN LA PAG WEB, UTILIZA EL ID "ver_nombre_con_comas"
     
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array;

    //5. DECLARA UNA VARIABLE PARA REMOVER LAS COMAS DE LOS NOMBRES EN LA LISTA:
     
    var remover_las_comas = ver_alumno_array.join(" ");

    //6. MUESTRA LOS NOMBRES DE LA LISTA SIN COMAS EN LA PAG WEB, UTILIZA EL ID "ver_nombre_sin_comas":
     
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_las_comas;

    document.getElementById("botón_enviar").style.display = "none";
    document.getElementById("botón_ordenar").style.display = "inline-block";

}

function sorting()
{
    //7. UTILIZA EL MÉTODO SORT PARA ORDENAR LOS NOMBRES EN ORDEN ALFABÉTICO:
    nombre_alumno_array.sort();
    
    //8. DECLARA UN ARRAY VACÍO PARA GUARDAR LA LISTA DE NOMBRES ORDENADA:
    var ver_alumno_array_ordenar = [];

    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    
    //9. UTILIZA EL BUCLE FOR PARA AGREGAR LOS NOMBRES AL ARRAY ver_alumno_array_ordenar:
    for(var k = 0; k<longitud_nombre_alumnos_array; k++)
    {
        ver_alumno_array_ordenar.push("<h4>NOMBRE - " + nombre_alumno_array[k] + "</h4>");
        
    }

    var remover_comas = ver_alumno_array_ordenar.join(" ");
    console.log(remover_comas);

    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
}


//Actividad adicional
function new_update()
{
    document.getElementById("ver_nombre_sin_comas").innerHTML = "<h1>" + nombre_alumno_array +"</h1>";
}





