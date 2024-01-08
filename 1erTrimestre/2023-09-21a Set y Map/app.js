/*Set -> Cuando intentas meter un item que ya está introducido, no lo hace*/
const frutas = new Set();
frutas.add('manzana');
frutas.add('pera');
frutas.add('manzana');
frutas.add('pera');
frutas.add('melón');
frutas.add('fresa');

console.log(frutas);


const colores = new Set(['rojo', 'verde', 'azul', 'rojo', 'verde', 'azul']);
console.log(colores);

/*console.clear();*/

/*MAPAS -> Es un conjunto de elementos a los que se accede por clave*/
const equipos = new Map();
equipos.set('rm','Real Madrid'); 
equipos.set('bc','FC Barcelona');
equipos.set('am','Atlético de Madrid');

console.log(equipos);
console.table(equipos);
console.table(equipos.get('bc'));
console.log(equipos.keys());
console.log(equipos.values());

const claves = Array.from(equipos.keys());
console.log(claves);

const valores = Array.from(equipos.values());
console.log(valores);

