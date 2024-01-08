const frutas = new Array();
frutas.push('🍐');
frutas.push('🍎');
frutas.push('🍌');
frutas.push('Sandía');
frutas.push('🍓');
frutas.push('Melón');
frutas.push('🥝');
frutas.push('🥑','🍋');

//console.table(frutas);


// //1ra forma: La de toda la vida, la de primero
// for (let i=0; i< frutas.length; i++){
//     console.log(frutas[i]);
// }

// //2da forma: foreach de tipo in
// for (const i in frutas){ //Se puede usar let, se puede usar const, se puede usar var...
//     // console.log(`${parseInt(i)+1})`, frutas[i]);
//     console.log(`${parseInt(i)+1}) ${frutas[i]}`);
// }

// //3ra forma: foreach de tipo of
// for (const fruta of frutas){
//     console.log(fruta);
// }

//4ta 1ra forma: métodos de la clase Array
// function mostrarFruta(fruta){
//     console.log(fruta); 
//     //Al no poner return, automaticamente es como si se ejecutase: 'return Undefined;'
// }
// //Conforme vayamos avanzando, este deberia de ser el bucle que deberiamos de ir usando.
// frutas.forEach(mostrarFruta);

//4ta 2da forma: metodo de la clase ARRAY, pero con la funcion en el método.
// frutas.forEach(
//     function mostrarFruta(fruta){
//         console.log(fruta); 
//     }
// );

// // 4ta 3ra forma: lambda
// frutas.forEach(
//      function (fruta){
//              console.log(fruta)
//      }
// );
        
//4ta 4ta forma: función flecha

//paso 1: cortar el nombre
// function (fruta){
//     console.log(fruta)
// };

//paso 2: poner la flecha
// function (fruta) => {
//     console.log(fruta)
// };

// paso 3: borrar funcion
// (fruta) => {
//     console.log(fruta)
// };

// paso 4: sin hay un solo parámetro quitamos los paréntesis
// fruta => {
//     console.log(fruta)
// };

// paso 5: si hay una sola linea de código, quitamos las llaves
// fruta => 
//     console.log(fruta)
// ;

// paso 6: si hay una sola línea la subimos y le quitamos el punto y coma
// fruta => console.log(fruta) 

// frutas.forEach(fruta => console.log(fruta));

//5ta forma: crear constante con la función flecha
// const mostrarFruta = fruta => console.log(fruta);

// frutas.forEach(mostrarFruta);

frutas.forEach(function(fruta, i, arrayFrutas){
    const posicion = i+1;

    let contador = 0;
    for (const fruta2 of arrayFrutas){
        if(fruta2.length > fruta.length){
            contador++;
        }
    }
    console.log(posicion, ') ',fruta,`Hay ${contador} frutas con nombre más largo`);

});