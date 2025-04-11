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




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

