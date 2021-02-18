//array con nombre
let nombre = ["R", "A", "S", "A"];
let apellido = ["S", "A", "N", "C", "H", "E", "Z"];
let i;

for (i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

//separar vocal de consonante
for (i = 0; i < nombre.length; i++) {
    if (!isNaN(nombre[i])) {
        console.log("Los nombres no llevan números, escribe bien!! :P");
    } else {
        if (nombre[i] == "A" || nombre[i] == "E" || nombre[i] == "I" || nombre[i] == "O" || nombre[i] == "U") {
            console.log(nombre[i] + " es vocal");
        } else {
            console.log(nombre[i] + " es consonante");
        }
    }
}

//juntar nombres
/*nombre.push(" ");
let nomCompleto = [].concat(nombre, apellido);
console.log(nomCompleto);*/

let nombreCompleto = [nombre,apellido].join(" ");
console.log(nombreCompleto);

//usando el map
 
mapear();

function mapear(){
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

    console.log(valores);
    console.log(llaves);

    let letras = new Map();


    for(llave in llaves){
        letras.set(llaves[llave],valores[llave]);
    }
    console.log(letras);
}

//buscar email
var str = 'Una  dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio ( nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES ). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
let regex2 = /[\w._%+-]+@[\S]+\.[a-zA-Z]{2,4}/gi;
let encontrar = str.match(regex2);

console.log(encontrar);
