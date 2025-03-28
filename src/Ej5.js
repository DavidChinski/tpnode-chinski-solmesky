let miUrl = null;
let miObjeto = null;
miUrl = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    const nuevaURL = new URL(laURL);
    let retornar = {
      host: nuevaURL.host,
      pathname: nuevaURL.pathname,
      parametros: nuevaURL.searchParams,
    };

    return retornar;
}
