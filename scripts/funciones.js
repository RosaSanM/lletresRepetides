
//declaro las var globales
var nombre;
var apellido;

//convertimos los strings en array
const serArray = ((valor)=>{
    let nombre = valor.toUpperCase();
    var nombreArray = nombre.split("")
    return nombreArray;
});
//imprimimos por pantalla y por consola
const imprimirNombre = (()=>{
    nombre = document.getElementById("nombre").value;
    document.getElementById("imprimeNombre").innerText = `El nombre que has introducido es: ${nombre}`;
    console.log(serArray(nombre));
});
const imprimirApellido = (()=>{
    apellido = document.getElementById("apellido").value;
    document.getElementById("imprimeApellido").innerText = `El apellido que has introducido es: ${apellido}`;
    console.log(serArray(apellido));
});
const vocal = (()=>{
    let nombreMin = document.getElementById("nombre").value;
    nombre = serArray(nombreMin);

    document.getElementById("imprimeVocal").innerHTML = " ";
    
    for (i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i])) {
            console.log("Los nombres no llevan números, escribe bien!! :P");
        } else {
            if (nombre[i] == "A" || nombre[i] == "E" || nombre[i] == "I" || nombre[i] == "O" || nombre[i] == "U") {
                console.log(nombre[i] + " es vocal");
                document.getElementById("imprimeVocal").innerHTML += ` ${nombre[i]} es vocal </br>`;

            } else {
                console.log(nombre[i] + " es consonante");
                document.getElementById("imprimeVocal").innerHTML += ` ${nombre[i]} es consonante  </br>`;

            }
        }
    }
});

//Metemos en el map

const map = (()=>{
    var maps = new Map();
    nombre = document.getElementById("nombre").value;
    document.getElementById("imprimeMap").innerHTML = " ";
    for(nom of nombre){
        let contador = 0;
        maps.set(nom);
        for(nomb of nombre){
            if(nomb == nom){
                contador++;
                maps.set(nom,contador);
            }
        }
    }
    for([clave,valor] of maps){
        document.getElementById("imprimeMap").innerHTML += `La letra ${clave} se repite ${valor} veces. </br>`;
    }
    
    console.log(maps);
});
/* Optimización del map
const map = (()=>{
    let myArray = document.getElementById("nombre").value;
    mapStr = new Map;
    for(let i = 0; i<myArray.length; i++){
        let item = parseInt(mapStr.get(myArray[i]))
        // console.log(item)
        if(item>=1){
            // console.log(item)
            mapStr.set(myArray[i], item+=1)
        }else{
            mapStr.set(myArray[i],1)
        }
    }
    console.log(mapStr)
});
*/
/*const map = (()=>{
    let nombreMin = document.getElementById("nombre").value;
    nombre = serArray(nombreMin);
    var nombreOrdenado = nombre.sort();
    let indiceDos = 1;
    let indice = 0;
    let contador = 1;
    let valores =[];
    let llaves = [];

    do{
        if(nombreOrdenado[indice] == nombreOrdenado[indiceDos]){
            indice ++;
            indiceDos ++;
            contador ++;
        }else{
            valores.push(contador);
            llaves.push(nombreOrdenado[indice]);
            contador = 1;
            indice++;
            indiceDos++;
        }
    }while(indice <= nombreOrdenado.length)

    document.getElementById("imprimeMap").innerHTML = " ";

    let letras = new Map();

    for(llave in llaves){
        letras.set(llaves[llave],valores[llave]);
    }
    console.log(letras);
    letras.forEach((valor,key)=>{
        
        document.getElementById("imprimeMap").innerHTML += `La letra ${key} se repite ${valor} veces. </br>`;
    });
});*/

 //Creamos el nombre completo
 const nombreCompleto = (()=>{
    document.getElementById("imprimeCompleto").innerText = " ";
    let apellidoMin = document.getElementById("apellido").value;
    apellido = serArray(apellidoMin); 
    let nombreMin = document.getElementById("nombre").value;
    nombre = serArray(nombreMin);
    let nombreCompleto = [nombre,apellido].join(" ");
    console.log(nombreCompleto);
   
    document.getElementById("imprimeCompleto").innerText = `El nombre completo es ${nombreCompleto} `;
 });

//buscar los mails en el string
const encontrar = (()=>{
    document.getElementById("imprimeEmail").innerText = " ";
    let regex2 = /[\w._%+-]+@[\S]+\.[a-zA-Z]{2,4}/gi;
    let texto = document.getElementById("texto").value;
    var encontrar = texto.match(regex2);
    if(encontrar){
        document.getElementById("imprimeEmail").innerText = `He encontrado estos emails: ${encontrar}`;
        console.log(encontrar);
    }else{
        encontrar = 0;
        document.getElementById("imprimeEmail").innerText = `He encontrado estos emails: ${encontrar}`;
    }
    return encontrar;
});


//listeners de los botones
var clikNombre   = document.getElementById("botonNombre");
var clikApellido = document.getElementById("botonApellido");
var clikVocal    = document.getElementById("botonVocal");
var clikMap      = document.getElementById("botonMap");
var clikCompleto = document.getElementById("botonCompleto");
var clikEmail    = document.getElementById("botonEmail");
clikNombre.addEventListener("click", imprimirNombre);
clikApellido.addEventListener("click", imprimirApellido);
clikVocal.addEventListener("click", vocal);
clikMap.addEventListener("click", map);
clikCompleto.addEventListener("click", nombreCompleto);
clikEmail.addEventListener("click", encontrar);
