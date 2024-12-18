//* While: Mientras la condición sea verdadera se ejecuta el buble (bloque de código)

let i = 101

while(i <= 100){
    if(i%2 === 0){
      console.log("Es par: ",i)
    }
    //i = i +1
    i++
}


//* Do While: Asegura que el bloque de código se ejecute al menos una vez y se repote el bloque do while si la condición es verdadera

let iterador = 11
do{
    console.log("Ejecutando bucle", iterador)
    iterador++

}while(iterador <= 10)


//* For: Bucle tradicional que se usa cuando conocemos de antemano cuantas veces queremos iterar 

for(let i=1; i<=100; i++){
     i%2 === 0 ?  console.log("Es par: ",i) : null
}   
//* Le podemos dar  la vuelda :D

for(let i=100; i>=1; i--){
    i%2 === 0 ?  console.log("Es par: ",i) : null
}   