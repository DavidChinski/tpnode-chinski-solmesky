import { getCountryByAbbreviation } from 'currency-map-country';
import { getCurrencyAbbreviation } from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'AR';
let paisNombre = getCountryByAbbreviation(codigoPais);
monedaDelPais = getCurrencyAbbreviation(paisNombre);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
paisNombre = getCountryByAbbreviation(codigoPais);
monedaDelPais = getCurrencyAbbreviation(paisNombre);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
