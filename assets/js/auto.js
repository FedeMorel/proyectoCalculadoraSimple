class Auto {
    constructor(patente, marca, modelo) {
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
    }

    get patente() {
        return this._patente;
    }

    set patente(patente) {
        this._patente = patente;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

}

let autoUno = new Auto('de 323 er', 'volkswagen', 'polo');
let autoDos = new Auto('re 231 hy', 'Audi', 'R8');
let autoTres = new Auto('ZA 000 AA', 'Citroën', 'c3');