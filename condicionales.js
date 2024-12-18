//* Comparar en condicionales
//* (=) : Nunca debe de ir solo en las condionales
//* (==) : Solo valida que sean del mismo valor
//* (===) : Valida tipo de dato y el valor
//* (>) : Solo valida Mayor que
//* (>=) : Valida Mayor que o igual que
//* (<) : Solo valida Menor que
//* (<=) : Valida Menor que o igual que
//* (&&) Conjunción : Exigir todas las condiciones se cumplan si o si 
//* (\\) Disyucción : Al menos que una condicion se cumplan 

let numMax = 10;
let numString = 10;

//Validar solo el valor
if (numMax == numString) {
  console.log("Son iguales, tienen el mismo valor");
} else {
  console.log("No son iguales, no tienen el mismo valor");
}

//Validar el valor y el tipo de dato
if (numMax === numString) {
  console.log("Tienen el mismo valor y  tienen el mismo tipo de dato");
} else {
  console.log("O no tienen el mismo valor o no tienen el mismo tipo de dato");
}

//Distinto solo en valor
if (numMax != numString) {
  console.log("Son  distintos");
} else {
  console.log("Tienen el mismo valor");
}

//Distintos en valor y tipo de dato
if (numMax !== numString) {
  console.log("Son  distintos o en valor o en tipo de dato");
} else {
  console.log("Tienen el mismo valor y el mismo tipo de dato");
}

var dia = 6;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
}

var fruta = "Fresa";
var numFruta = 4;

switch (fruta) {
  case "Manzana":
    console.log("🍎");
    break;
  case "Pera":
    console.log("🍐");
    break;
  case "Durazno":
    console.log("🍑");
    break;
  case "Fresa":
    {
      //Se puede agregar un bloque de código con lógica dentro
      if (numFruta == 4) {
        console.log("Hay 4 frutas");
      }
    }
   break;
}


var edad = 16 
var premium = false 

if(edad >= 18 || premium === true  ){
    console.log("Bienvenido, disfruta XD")
}else{
    console.log("Aun estás muy pequeño")
}

//Operadores ternarios
(edad >=18 && premium === true)
?  console.log("Bienvenido, disfruta XD")
:  console.log("Aun estás muy pequeño")