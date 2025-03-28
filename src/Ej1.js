let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
let returnValue = '';

texto1 = texto1.split('').reverse().join('');
texto2 = texto2.split('').reverse().join('');
console.log(texto1);

returnValue = texto2+texto1;
return returnValue;
}
