import Alumno from "./modules/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"
import express  from "express"; // hacer npm i express
import cors     from "cors";    // hacer npm i cors

const app  = express();
const port = 3000;

app.use(cors());         
app.use(express.json());

//a1
app.get('/', (req,res) => {
    res.status(200).send("Ya te estoy respondiendo")
})

//a2    
app.get('/saludar/:nombre', (req,res) => {
    res.status(200).send("Hola " + req.params.nombre )
})

//a3 http://localhost:3000/2014/12/05
app.get('/validarFecha/:ano/:mes/:dia', (req,res) => {
   let fecha =  Date.parse(`${req.params.ano}/${req.params.mes}/${req.params.dia}`)
    if(!fecha){
        res.status(400).send("Bad Request")
    }
    else{
        res.status(200).send("fecha OK")
    }
})

//b1
app.get('/matematica/sumar', (req,res) => {
    let n1 = req.query.n1; 
    let n2 = req.query.n2; 
    res.status(200).send("RESULTADO: " + sumar(n1, n2))
})

//b2
app.get('/matematica/restar', (req,res) => {
    let n1 = req.query.n1;
    let n2 = req.query.n2;
    res.status(200).send("RESULTADO: " + restar(n1, n2))
})

//b3
app.get('/matematica/multiplicar', (req,res) => {
    let n1 = req.query.n1;
    let n2 = req.query.n2;
    res.status(200).send("RESULTADO: " + multiplicar(n1, n2))
})

//b4
app.get('/matematica/dividir', (req,res) => {
    let n1 = req.query.n1;
    let n2 = req.query.n2;

    if(n2 == 0){
        res.status(400).send("El divisor no puede ser 0")
    }
    else{

        res.status(200).send("RESULTADO: " + dividir(n1, n2))
    }
    
})

//c1

app.get('/omdb/searchbypage' , async (req,res) => {
    let {texto, pagina} = req.query
    try {
        const result = await OMDBSearchByPage(texto, pagina);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error recolectando datos de la api' });
    }

    res.status(200).json(results)
})

//c2
app.get('/omdb/searchcomplete', async (req, res) => {
    const { search } = req.query;
    try {
        const result = await OMDBSearchComplete(search);
        res.status(200).json(result);
    } catch (error) {
           res.status(500).json({ error: 'Error recolectando datos de la api' });
    }
});

// c3
app.get('/omdb/getbyomdbid', async (req, res) => {
    const { imdbID } = req.query;
    try {
        const result = await OMDBGetByImdbID(imdbID );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error recolectando datos desde la api' });
    }
});

//D1

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido"  , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao"    , "32623391", 18));


app.get('/alumnos', async (req, res) => {
    res.status(200).json({
        alumnosArray
    });
});

//D2

app.get('/alumnos/:dni', async (req, res) => {
    const dni = req.params.dni;

    const alumnoEncontrado = alumnosArray.find(alumno => alumno.dni === dni);

    if (alumnoEncontrado) {
        res.status(200).json(alumnoEncontrado);
    } else {
        res.status(404).json({ mensaje: "Alumno no encontrado" });
    }
});

//d3

app.post('/alumnos', (req, res) => {
    const { username, dni, edad } = req.body;

    if (!username || !dni || !edad) {
        return res.status(400).json({ mensaje: "Faltan datos del alumno" });
    }

    const nuevoAlumno = new Alumno(username, dni, edad);

    alumnosArray.push(nuevoAlumno);

    res.status(201).json({
        alumno: nuevoAlumno
    });
});

//d4

app.delete('/alumnos', (req, res) => {
    const { dni } = req.body;
    if (!dni) {
        return res.status(400).json({ mensaje: "DNI nulo" });
    }

    const index = alumnosArray.findIndex(alumno => alumno.dni === dni);
    
    if (index === -1) {
        return res.status(404).json({ mensaje: "Alumno no encontrado" });
    }
    alumnosArray.splice(index, 1);
    res.status(200).json({ mensaje: "Alumno eliminado correctamente" });
});

//e1




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

