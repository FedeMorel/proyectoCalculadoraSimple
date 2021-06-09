class Persona {
    constructor(nombre, apellido) {

        this._nombre = nombre;
        this._apellido = apellido;

    }

    get nombre() {

        return this._nombre;

    }

    set nombre(nombre) {

        this._nombre = nombre;

    }

    get apellido() {

        return this._apellido;

    }

    set apellido(apellido) {

        this._apellido = apellido;

    }

}


class Empleado extends Persona {

    constructor(nombre, apellido, departamento) {
        //Llamamos al constructor de la clase Padre
        super(nombre, apellido);
        this._departamento = departamento;

    }

    get departamento() {

        return this._departamento;

    }

    set departamento(departamento) {

        this._departamento = departamento;

    }

}

class Jefe extends Persona {

    constructor(nombre, apellido, telefono, dni, direccion) {
        super(nombre, apellido);
        this._telefono = telefono;
        this._dni = dni;
        this._direccion = direccion;
    }


}

let jefeUno = new Jefe()


let persona1 = new Persona("Federico", "Morel");
console.log(persona1);

let persona2 = new Persona("Marcos", "Morel");
console.log(persona2);

let empleado1 = new Empleado("Federico", "Morel", "Ituzaingo");
console.log(empleado1);
console.log(empleado1.nombre);