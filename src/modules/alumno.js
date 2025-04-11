export default class Alumno {
    constructor(username, dni, edad) {
        this.username = username || "";
        this.dni = dni || "";
        this.edad = edad || 0;
    }

    toString() {
        return `Alumno: ${this.username}, DNI: ${this.dni}, Edad: ${this.edad}`;
    }
}
