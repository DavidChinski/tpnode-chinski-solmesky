import axios from "axios";
const APIKEY = "54fc19ed";

const OMDBSearchByPage = async (texto, pagina) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : []
    };

    const requestString = `http://www.omdbapi.com/?apikey=54fc19ed&s=${texto}&page=${pagina}`;
    const apiResponse = await axios.get(requestString);
        returnObject.respuesta = apiResponse.data;
        
    return returnObject.respuesta;
};


const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};


const requestString = `http://www.omdbapi.com/?apikey=54fc19ed&s=${searchText}`;

const apiResponse = await axios.get(requestString);
returnObject.respuesta = apiResponse.data;

return returnObject.respuesta;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

const requestString = `http://www.omdbapi.com/?apikey=54fc19ed&i=${imdbID}`;

const apiResponse = await axios.get(requestString);
returnObject.respuesta = apiResponse.data;

return returnObject.respuesta;
};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};