 /**
 * DESAFIO 1
 * Declaramos un array
 * Exploramos los distintos métodos
 * create(crear), read(leer), upload(actualizar), delete(borrar)
 */

 // 1 - Declaración de los array
 let autos = ["Tito", "Renault"];

 // 2 - Imprimimos el contenido del array
console.log(autos);

// 3 - Insertar datos dentro del array con .push();
autos.push("Chevrolet");
console.log("El nuevo listado es: " + autos);

autos.push("Bmw","Ford","Mazda");
console.log("El nuevo listado es: " + autos);

// 4 - .unshift() inserta un dato al principio 
autos.unshift("Fiat");
console.log("El nuevo listado es: " + autos);

// 5 - Hallar la longitud del array con .length
let longitud = autos.length;
console.log("La longitud es: " + longitud);

// 6 - Consultar el último elemento del array con .at()
console.log("El último elemento es: " + autos.at(-1)); // -1 representa al utlimo, se puede usar para cualquier indice.
console.log("El último elemento es: " + autos.at(2));  // con 2 te devuelve el INDICE 2 por ejemplo, no el de elemento 2 (sería el elemento 3).
console.log("El último elemento es: " + autos[2]);     // Esta forma es mas vieja, pero así es exactamente lo mismo que con .at(2).

// 8 - Buscar el indice de un dato que almacena con .indexOf(valorABuscar);
console.log("El índice de BMW es: " + autos. indexOf("Bmw"));

// 9 - actualizar un dato con forma "tradicional"
autos[4] = "Audi";
console.log("El nuevo listado es: " + autos);

// 10 - Borrar elemento con .splice()
console.log("Se borra el elemento: "+ autos.splice(3,1)); //borra lo que este entre 
console.log("El nuevo listado despues del splice es: " + autos);

// 11 - Para borrar el último dato del array .pop();
autos.pop();
console.log("El nuevo listado es: " + autos);

// 12 - Borrar el primer elemento de la lista con .shift();
autos.shift();
console.log("El nuevo listado es: " + autos);

// FOR para recorrer arrays
/* For "tradicional".
for(let i=0; i<5;i++){
    
}
*/

// 13 - For-in  mira e inspecciona solamente los indices y desde ahi se pueden usar los datos.
for(let indice in autos){
    console.log(indice); //muestra todos los indices del arreglo
}

// 14 - For-of inspecciona los datos directamente.
for (let dato of autos) {
    if (dato === "Audi") {
        console.log("Existe stock de: " + dato);
    } 
}
//muestra directamente todos los datos del arreglo
console.log("For-of consulta todos los datos del arreglo:")
for (let dato of autos) {
    console.log(dato);
}

// *Tarea* Generar otro array y combinarlo con autos mediante .concat()
let autosNuevos1 = ["Mercedes","Toyota"];
let autosNuevos2 = ["Honda","Hyundai"];
autos = autos.concat(autosNuevos1,autosNuevos2);

console.log("El nuevo arreglo concatenado es: " + autos);



/*********************/

// ------------ Los strings --------------- 

let txt= "Hola que tal";

//Son un array, por eso tienen longitud.
console.log(txt.length);
let txt1 = "sahdkajs"
// Se evidencian los índices del String. 
for(let index in txt){
    console.log(index);
}
txt = txt.concat(txt1);
console.log(txt);

// -------- OBJETOS LITERALES ------------ 
let personal = {
    // Atributos clave-valor
    nombre:"Luis Alfredo",
    apellido: "Rodriguez",
    id: "000a1"
    // ,obtenerNombres() {
    //     console.log(this.nombre+" "+ this.apellido);
    // }
};
let personal2= {nombre:"Luis Alfredo",  apellido: "Rodriguez", id: "000a1"};

// personal.obtenerNombres();
console.log(personal.nombre);
console.log(personal.id);

// Json, se pasa personal a notacion JSON.
let jsonPersonal = `{
    "personal":{
        "nombre":"Luis Alfredo",
        "apellido":"Rodriguez",
        "id":"000a1"
    },
    "personal1":{
        "nombre":"Luisa",
        "apellido":"Lopez",
        "id":"000a2" 
    }
}`;

// Consumir datos de json
// 1 - Se transforma json a algo legible por JS
let personalObjeto = JSON.parse(jsonPersonal); /* .parse(Datos) lo que hace es pasar los datos para usarlos como objeto */

// A partir de esta linea se puede trabajar como objeto.
console.log(personalObjeto.personal.nombre);
console.log("ID: "+ personalObjeto.personal1.id+ "\nNombre y Apellido: "+ personalObjeto.personal1.nombre+" "+personalObjeto.personal1.apellido);
