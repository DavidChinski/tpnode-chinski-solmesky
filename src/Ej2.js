/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar, array} from './modules/matematica.js'
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
array.forEach(element => {
    console.log(element)
});

