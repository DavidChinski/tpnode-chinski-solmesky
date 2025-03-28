let miUrl = null;
let miObjeto = null;
miUrl = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
miUrl = "HGOUHYG";
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
  try {
    const nuevaURL = new URL(laURL);
    let retornar = {
      host: nuevaURL.host,
      pathname: nuevaURL.pathname,
      parametros: nuevaURL.searchParams,
    };

    return retornar;
  } catch (error) {
    console.error(`Error al parsear la URL`);
    return {
      host: null,
      pathname: null,
      parametros: null
    };
  }
}
