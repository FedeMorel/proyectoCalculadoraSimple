const cambiarColorDisplay = () => {
    btnIgual.addEventListener("click", () => {
        display.style.background = "#3be967";
        setTimeout(() => {
            display.style.background = "white";
        }, 500);
    })
}


cambiarColorDisplay();

//concatenando string sin estandar
const mostrandoNombre = (nombre = 'Federico', apellido = 'Morel') => {
    console.log(nombre + " " + apellido);
}

//concatenando string con estandar
const mostrandoNombreConEstandar = (nombre = 'Federico', apellido = 'Morel') => {
    console.log(`${nombre} ${apellido}`);
}

const mostrandoSaltoDeLiea = () => {
    texto = "Hola \n" + "como estas?"
    console.log(texto);
}

const mostrandoSaltoDeLieaConEstandar = () => {
    texto = `Hola,
como estas?`
    console.log(texto);
}
const persona = {
    nombre: 'Federico',
    apellido: 'Morel',
    edad: '19',
    altura: '1,62'
}

const concatenadoAtributos = (persona) => {
    texto = `Mi nombre es ${persona.nombre} ${persona.apellido},
    tengo ${persona.edad} años y mido ${persona.altura}`
    console.log(texto);
}


//Tarea a realizar

const persona1 = {
    nombre: 'Federico',
    apellido: 'Morel',
    edad: 19,
    altura: 1.62,
    salario: 25000
}

const persona2 = {
    nombre: 'Gaston',
    apellido: 'Morel',
    edad: 17,
    altura: 1.68,
    salario: 40000
}

const persona3 = {
    nombre: 'Emiliano',
    apellido: 'Morel',
    edad: 20,
    altura: 1.65,
    salario: 20000
}

const calcularPromedioEdad = (personaUno, personaDos, personaTres) => {
    let promedio = (personaUno.edad + personaDos.edad + personaTres.edad) / 3
    console.log(promedio);
}

const editarObjeto = (persona, nuevaEdad) => {

    persona.edad = nuevaEdad;
    texto = `La edad de ${persona.nombre} se cambio por ${persona.edad}`
    console.log(texto);
}

const calcuarPromedioAltura = (personaUno, personaDos, personaTres) => {
    let promedio = (personaUno.altura + personaDos.altura + personaTres.altura) / 3
    console.log(promedio);
}

const calcualar = (personaUno, personaDos, personaTres) => {
    let promedio = (personaUno.altura + personaDos.altura + personaTres.altura) / 3
    console.log(promedio);
}

const mostrarAtributos = (personaUno, personaDos, personaTres) => {
    let texto = `Primer Objeto
    Nombre y apellido: ${personaUno.nombre} ${personaUno.apellido}
    Edad: ${personaUno.edad}
    Altura: ${personaUno.altura}
    Salario: ${personaUno.salario}

    Segundo Objeto
        Nombre y apellido: ${personaDos.nombre} ${personaDos.apellido}
        Edad: ${personaDos.edad}
        Altura: ${personaDos.altura}
        Salario: ${personaDos.salario}

    Tercer Objeto
        Nombre y apellido: ${personaTres.nombre} ${personaTres.apellido}
        Edad: ${personaTres.edad}
        Altura: ${personaTres.altura}
        Salario: ${personaTres.salario}
    `

    console.log(texto);
}

class Cliente {
    constructor(nombre, apellido, mail, localidad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._mail = mail;
        this._localidad = localidad;
    }

    /*get nombre() {
        return this._nombre;
    }*/

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }


}
let federico = new Cliente('Federico', 'Morel', 'ignaciomorel', 'Ituzaingo');



//Tarea crear 10 Clases y hacer 3 instancias por casa clase.
class Persona {
    constructor(nombre, apellido, edad, localidad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._localidad = localidad;
    }

    decirNombreCompleto() {
        console.log(`Mi nombre es ${this._nombre} ${this._apellido}`);
    }
    decirEdad() {
        console.log(`Tengo ${this._edad}`);
    }
    mostrarLocalidad() {
        console.log(`Vivo en la localidad de ${this._localidad}`);
    }
    mayorDeEdad() {
        if (this._edad >= 18) console.log('Soy mayor de edad');
        else console.log('No soy mayor de edad');
    }
    mostrarAtributos() {
        let texto = `        Mi nombre completo es ${this._nombre} ${this._apellido}, 
        tengo ${this._edad} años y vivo en la localidad de ${this._localidad}`
        console.log(texto);
    }

}

class Auto {
    constructor(patente, marca, modelo, kilometraje, years) {
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
        this._kilometraje = kilometraje;
        this._years = years;
    }

    mostrarKilometraje() {
        console.log(`Kilometraje: ${this._kilometraje}`);
    }
    mostrarMarca() {
        console.log(`La marca es: ${this._marca}`);
    }
    mostrarPatente() {
        console.log(`La patente es: ${this._patente}`);
    }
    mostrarYears() {
        console.log(`Año: ${this._years}`);
    }

    MostrarAtributos() {
        let texto = `        N° de patente: ${this._patente}
        Marca y modelo: ${this._marca} ${this._modelo}
        kilimetraje: ${this.Kilometraje}
        Año: ${this._years}`
        console.log(texto);
    }



}

class Perro {
    constructor(raza, years, color, nombre) {
        this._raza = raza;
        this._years = years;
        this._color = color;
        this._nombre = nombre;
    }

    mostarRaza() {
        console.log(`La raza es: ${this._raza}`);
    }
    mostrarAños() {
        console.log(`La edad es: ${this._years}`);
    }
    get mostarColor() {
        console.log(`El color es: ${this._color}`);
    }
    mostrarNombre() {
        console.log(`El nombre es: ${this._nombre}`);
    }
    mostrarAtributos() {
        let texto = `        La raza es: ${this._raza}
        El color es: ${this._color}
        Su edad es: ${this._years} años
        Su nombre es: ${this._nombre}`
        console.log(texto);
    }
}

class Gato {
    constructor(raza, years, color, nombre) {
        this._raza = raza;
        this._years = years;
        this._color = color;
        this._nombre = nombre;
    }

    mostarRaza() {
        console.log(`La raza es: ${this._raza}`);
    }
    mostrarAños() {
        console.log(`La edad es: ${this._years}`);
    }
    mostarColor() {
        console.log(`El color es: ${this._color}`);
    }
    mostrarNombre() {
        console.log(`El nombre es: ${this._nombre}`);
    }
    mostrarAtributos() {
        let texto = `        La raza es: ${this._raza}
        El color es: ${this._color}
        Su edad es: ${this._years} años
        Su nombre es: ${this._nombre}`
        console.log(texto);
    }
}

class Computadora {
    constructor(procesador, motherboard, cantidadRam, almacenamiento) {
        this._procesador = procesador;
        this._motherboard = motherboard;
        this._cantidadRam = cantidadRam;
        this._almacenamiento = almacenamiento;
    }
    mostrarProcesador() {
        console.log(`La computadora tiene un ${this._procesador}`);
    }
    mostrarMotherboard() {
        console.log(`La computadora tiene una Motherboard ${this._motherboard}`);
    }
    mostrarRam() {
        console.log(`La computadora tiene ${this._cantidadRam} de RAM`);
    }
    mostrarAlmacenamiento() {
        console.log(`La computadora tiene de almacenamiento ${this.almacenamiento}`);
    }

    mostrarEspecificaciones() {
        let texto = `        Procesador: ${this._procesador}
        Motherboard: ${this._motherboard}
        RAM:  ${this._cantidadRam}
        Almacenamiento ${this.almacenamiento}`
        console.log(texto);
    }
}

class Monitor {
    constructor(marca, linea, modelo, pulgadas, tipoPanel, tipoResolucion, frecuencia) {
        this._marca = marca;
        this._linea = linea;
        this._modelo = modelo;
        this._pulgadas = pulgadas;
        this._tipoPanel = tipoPanel;
        this._tipoResolucion = tipoResolucion;
        this._frecuencia = frecuencia
    }

    mostrarNombreMonitor() {
        console.log(`Marca, linea y modelo: ${this._marca} ${this._linea} ${this._modelo}`);
    }
    mostrarPulgadas() {
        console.log(`Pulgadas: ${this._pulgadas}`);
    }
    mostrarTipoPanel() {
        console.log(`Panel: ${this._tipoPanel}`);
    }
    mostrarResolucion() {
        console.log(`Resolucion: ${this._tipoResolucion}`);
    }
    mostrarEspecificaciones() {
        let texto = `        Marca, linea y modelo: ${this._marca} ${this._linea} ${this._modelo}
        Pulgadas: ${this._pulgadas}
        Tipo de panel: ${this._tipoPanel}
        Resolucion: ${this._tipoResolucion}
        Frecuencia: ${this._frecuencia}`
        console.log(texto);
    }

}

class Mouse {
    constructor(marca, linea, modelo, resolucionSensor, rgb, inalambrico) {
        this._marca = marca;
        this._linea = linea;
        this._modelo = modelo;
        this._resolucionSensor = resolucionSensor;
        this._rgb = rgb;
        this._inalambrico = inalambrico;
    }
    mostrarMarca() {
        console.log(`Marca: ${this._marca}`);
    }
    mostrarLineaModelo() {
        console.log(`Linea y modelo: ${this._linea} ${this._marca}`);
    }
    mostrarResolucionSensor() {
        console.log(`Resolucion del sensor: ${this._resolucionSensor} `);
    }
    mostrarInformacionExtra() {
        console.log(`rgb: ${this._rgb} inalambrico: ${this._inalambrico}`);
    }

    mostrarEspecificaciones() {
        let texto = `        Marca: ${this._marca}
        Linea y modelo: ${this._linea} ${this._modelo}
        Resolucion del sensor: ${this._resolucionSensor}
        rgb: ${this._rgb}
        inalambrico: ${this._inalambrico}`
        console.log(texto);
    }

}

class Teclado {
    constructor(marca, linea, modelo, tipo, formato, idioma) {
        this._marca = marca;
        this._linea = linea;
        this._modelo = modelo;
        this._tipo = tipo;
        this._formato = formato;
        this._idioma = idioma;
    }
    mostrarMarca() {
        console.log(`Marca: ${this._marca}`);
    }
    mostrarLineaModelo() {
        console.log(`Linea y modelo: ${this._linea} ${this._modelo}`);
    }
    mostrarTipoFormato() {
        console.log(`Tipo y formato: ${this._tipo} ${this._formato}`);
    }
    mostarIdioma() {
        console.log(`Idiona: ${this._idioma}`);
    }
    mostrarEspecificaciones() {
        let texto = `        Marca: ${this._marca}
        Linea y modelo: ${this._linea} ${this._marca}
        Tipo y formato: ${this._tipo} ${this._formato}
        Idiona: ${this._idioma}`
        console.log(texto);
    }

}

class Procesador {
    constructor(marca, linea, modelo, nucleos, hilo, frecuencia, socket) {
        this._marca = marca;
        this._linea = linea;
        this._modelo = modelo;
        this._nucleos = nucleos;
        this._hilo = hilo;
        this._frecuencia = frecuencia;
        this._socket = socket;
    }

    mostrarNombre() {
        console.log(`Procesador: ${this._marca} ${this._linea} ${this._modelo}`);
    }
    mostrarNucleosHilos() {
        console.log(`Cantidad de nucleos: ${this._nucleos} Catidad de hilos: ${this._hilo} `);
    }
    mostrarTipoSocket() {
        console.log(`Socket compatible: ${this._socket}`);
    }
    mostrarFrecuencia() {
        console.log(`Frecuencia base: ${this._frecuencia}`);
    }
    mostrarEspecificaciones() {
        let texto = `        Procesador: ${this._marca} ${this._linea} ${this._modelo}
        Cantidad de nucleos: ${this._nucleos} Catidad de hilos: ${this._hilo}
        Socket compatible: ${this._socket}
        Frecuencia base: ${this._frecuencia}`
        console.log(texto);
    }

}
class Escritorio {
    constructor(material, alto, profundidad, ancho, color) {
        this._material = material;
        this._alto = alto;
        this._profundidad = profundidad;
        this._ancho = ancho;
        this._color = color;
    }

    mostrarMaterial() {
        console.log(`Material de construccion : ${this._material}`);
    }
    mostrarMedidas() {
        console.log(`Alto/Profundidad/Anchi: ${this._alto}/${this._profundidad}/${this._ancho}`);
    }
    mostrarColor() {
        console.log(`Color : ${this._color}`);
    }
    mostrarEspecificaciones() {
        let texto = `        Material de construccion : ${this._material}
        Alto/Profundidad/Anchi: ${this._alto}/${this._profundidad}/${this._ancho}
        Color : ${this._color}`
        console.log(texto);
    }

}

let personaUno = new Persona('Federico', 'Morel', 19, 'Ituzaingó');
let personaDos = new Persona('Candela', 'Barrirrero', 19, 'Moreno');
let personaTres = new Persona('Guillermo', 'Morel', 27, 'Padua');

let autoUno = new Auto('ZA 000 AA', 'Volkswagen', 'Gol Trend', '1000 Km', '2020');
let autoDos = new Auto('nn', 'Citroën', 'C3', '0Km', '2021');
let autoTres = new Auto('AB 120 ZB', '	Toyota', 'Etios', '68396 Km', '2015');

let perroUno = new Perro('caniche', 2, 'blanco', 'Rufina');
let perroDos = new Perro('No especifica', 7, 'Negro y marron', 'Negro');
let perroTres = new Perro('cocker ', 'nn', 'Negro', 'Toto');

let gatoUno = new Gato('No especifica', 3, 'Negro, marrón y blanco', 'Gatina');
let gatoDos = new Gato('No especifica', 3, 'Gris y blanco', 'Simona');
let gatoTres = new Gato('No especifica', 2, 'Negro y blanco', 'Sofia');

let computadoraUno = new Computadora('Intel I9 109000', 'SK 1200 H410', '64 Gb', '1Tb HDD - 120Gb SSD');
let computadoraDos = new Computadora('Ryzen 9 5900x', 'ASROCK A520m-HVS WIFI', '64 Gb', '1Tb HDD');
let computadoraTres = new Computadora('Amd Ryzen Threadripper 3990X', 'x399 phantom gaming 6', '128Gb', '10Tb HDD - 1Tb M.2');

let monitorUno = new Monitor('LG', '(No especifica) -', '22MN430H', '22', 'LED', 'Full HD', '60Hz');
let monitorDos = new Monitor('BenQ', 'XL Series', 'XL2411P', '24', 'LED', 'Full HD', '144Hz');
let monitorTres = new Monitor('Samsung', 'CRG5', 'LC27RG50FQL', '27', 'LED', 'Full HD', '240Hz');

let mouseUno = new Mouse('Logitech', 'G Series', 'Hero 16K', '16000', 'No', 'No');
let mouseDos = new Mouse('Razer', '(No especifica) -', 'Basilisk X Hyperspeed', '16000', 'No', 'Si');
let mouseTres = new Mouse('Primus', 'Gladius', '4000T', '4000', 'Si', 'No');

let tecladoUno = new Teclado('Redrgon', 'Kumara', 'K552', 'Mecanico', '60%', 'Español');
let tecladoDos = new Teclado('Logitech', '(No especifica) -', 'K400 Plus', 'Menbrana', '60%', 'Español');
let tecladoTres = new Teclado('HyperX', 'Alloy', 'FPS Pro', 'Mecanico', '80%', 'Ingles US');

let procesadorUno = new Procesador('Intel', 'Core i9', '10900', 10, 20, '5.2GHz', 'FCLGA1200');
let procesadorDos = new Procesador('Intel', 'Core i5', '10400F', 6, 12, '4.3GHz', 'FCLGA1200');
let procesadorTres = new Procesador('AMD', 'Ryzen 9', '3950X', 16, 32, '4.7GHz', 'AM4');

let escritorioUno = new Escritorio('Madera de pino', '80cm', '80cm', '120cm', 'marrón');
let escritorioDos = new Escritorio('Melamina', '80cm', '45cm', '100cm', 'Blanco');
let escritorioTres = new Escritorio('Melamina', '75cm', '45cm', '100cm', 'marrón');