import {OMDBGetByImdbID, OMDBSearchByPage, OMDBSearchComplete} from './modules/omdb-wrapper.js'


let resultado1 = await OMDBSearchByPage("cars", 1)
console.log("Por pagina y titulo:", resultado1);

let resultado2 = await OMDBSearchComplete("toy story")
console.log("Por titulo", resultado2);

let resultado3 = await OMDBGetByImdbID("tt2948372")
console.log("Por ID", resultado3);