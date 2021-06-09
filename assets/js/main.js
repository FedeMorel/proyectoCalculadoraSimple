let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnDividir = document.getElementById("btnDividir");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnRestar = document.getElementById("btnRestar");
let btnIgual = document.getElementById("btnIgual");
let btnLimpiar = document.getElementById("btnLimpiar");
let btn0 = document.getElementById("btn0");
let btnSuma = document.getElementById("btnSuma");
let display = document.getElementById("display");
let valorUno;
let valorDps;
let operador;
const escribirSiete = () => {
    btn7.addEventListener("click", () => {
        display.value = display.value + "7";
    })
}

const escribirOcho = () => {
    btn8.addEventListener("click", () => {
        display.value = display.value + "8";
    })
}

const escribirNueve = () => {
    btn9.addEventListener("click", () => {
        display.value = display.value + "9";
    })
}

const escribirCuatro = () => {
    btn4.addEventListener("click", () => {
        display.value = display.value + "4";
    })
}

const escribirCinco = () => {
    btn5.addEventListener("click", () => {
        display.value = display.value + "5";
    })
}

const escribirSeis = () => {
    btn6.addEventListener("click", () => {
        display.value = display.value + "6";
    })
}

const escribirUno = () => {
    btn1.addEventListener("click", () => {
        display.value = display.value + "1";
    })
}

const escribirDos = () => {
    btn2.addEventListener("click", () => {
        display.value = display.value + "2";
    })
}

const escribirTres = () => {
    btn3.addEventListener("click", () => {
        display.value = display.value + "3";
    })
}

const escribirCero = () => {
    btn0.addEventListener("click", () => {
        display.value = display.value + "0";
    })
}

const limpiar = () => {
    btnLimpiar.addEventListener("click", () => {
        display.value = "";
    })
}

const sumar = () => {
    btnSuma.addEventListener("click", () => {
        valorUno = display.value;
        operador = "+";
        display.value = "";
    })
}

const restar = () => {
    btnRestar.addEventListener("click", () => {
        valorUno = display.value;
        operador = "-";
        display.value = "";
    })

}
const dividir = () => {
    btnDividir.addEventListener("click", () => {
        valorUno = display.value;
        operador = "/";
        display.value = "";
    })
}
const multiplicar = () => {
    btnMultiplicar.addEventListener("click", () => {
        valorUno = display.value;
        operador = "*";
        display.value = "";
    })
}

const igualar = () => {
    btnIgual.addEventListener("click", () => {
        valorDos = display.value;
        let numeroUno = parseInt(valorUno, 10);
        let numeroDos = parseInt(valorDos, 10);
        let resultado;
        switch (operador) {
            case "+":
                resultado = numeroUno + numeroDos;
                display.value = resultado;
                break;
            case "-":
                resultado = numeroUno - numeroDos;
                display.value = resultado;
                break;
            case "/":
                resultado = numeroUno / numeroDos;
                display.value = resultado;
                break;
            case "*":
                resultado = numeroUno * numeroDos;
                display.value = resultado;
                break;
            default:
                break;
        }
    })
}

escribirCero();
escribirUno();
escribirDos();
escribirTres();
escribirCuatro();
escribirCinco();
escribirSeis();
escribirSiete();
escribirOcho();
escribirNueve();
limpiar();
sumar();
restar();
dividir();
multiplicar();
igualar();