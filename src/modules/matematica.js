/* Este es el módulo "matematicas" */
const PI = 3.14;
let array = ["dos","cuatro","ocho","diez"]
function sumar(x, y) 
{
    return parseInt(x) + parseInt(y);
}
function restar(x, y) 
{
    return parseInt(x) - parseInt(y);
}

const multiplicar = (a, b) => {
    return parseInt(a) * parseInt(b);
};
const dividir = (a, b) => {
    return parseInt(a) / parseInt(b);
   };
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {sumar, restar, multiplicar, dividir};
                                      