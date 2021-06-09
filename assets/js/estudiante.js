class Estudiante {
    constructor(dni, nombre, apellido, edad, mail) {
        this._dni = dni;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._mail = mail;
    }

}

let estudiateUno = new Estudiante('43344534', 'Jose', 'Domingez', '20', 'JoseDomingez@gmail.com');
let estudiateDos = new Estudiante('42323323', 'Marisol', 'Vaccaro', '20', 'Marisol', );