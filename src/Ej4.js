import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){

    const contenido = fs.readFileSync(origen, 'utf8');
    console.log('Contenido leído:', contenido);

    fs.writeFileSync(destino, contenido);
    console.log(`Archivo copiado de ${origen} a ${destino}`);


}
