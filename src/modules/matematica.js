/* Este es el módulo "matematicas" */
const PI = 3.14;
let array = ["dos","cuatro","ocho","diez"]
function sumar(x, y) 
{
    return x+y;
}
function restar(x, y) 
{
    return x-y;
}

const multiplicar = (a, b) => {
    return a*b;
};
const dividir = (a, b) => {
    return a/b;
   };
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, array};
