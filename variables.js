//* Tipos de datos
//* Primitivos:  string, numbers, boolean, undefined
//* Otros: arrays, objects, nulll

//* Variables

const PI = 3.14;
const BASE_URL = "https://fakestoreapi.com/products";
const MAPS_API_KEY = "AK48@##$34IJXV89@##$342";

var getListProducts = true;
let iterator = 1200;

//* Diferencia entre var y let

//* let: tiene un alcance a nivel de bloque
//* var: tiene un alcance a nivel de funcion (más alcance)
//* hoisting

const FLAG = true;

function ejemploVar() {
  if (FLAG) {
    var nombre = "Fran Espino";
  }
  console.log(nombre);
}

function ejemploLet() {
  if (FLAG) {
    let nombre = "Fran Espino";
  }
  console.log(nombre);
}

ejemploVar();
ejemploLet();
