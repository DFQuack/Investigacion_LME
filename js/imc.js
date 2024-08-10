function calcIMC() {
    let peso = document.getElementById("peso").value;
    peso = Number(peso);
    let h = document.getElementById("altura").value;
    h = Number(h);

    let imc = peso / Math.pow(h, 2);
    imc = imc.toFixed(1);

    if (isNaN(imc)) {
        document.getElementById("result").innerHTML = "Inserte valores válidos."
    }
    else {
        document.getElementById("result").innerHTML = "IMC: " + imc;
    }

    if (imc < 18.5) {
        azulClaro();
        verdeOscuro();
        naranjaOscuro();
        rojoOscuro();
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        azulOscuro();
        verdeClaro();
        naranjaOscuro();
        rojoOscuro();
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        azulOscuro();
        verdeOscuro();
        naranjaClaro();
        rojoOscuro();
    }
    else if (imc >= 30.0) {
        azulOscuro();
        verdeOscuro();
        naranjaOscuro();
        rojoClaro();
    }
    else {
        azulOscuro();
        verdeOscuro();
        naranjaOscuro();
        rojoOscuro();
    }
}

function azulClaro() {
    const collection = document.getElementsByClassName("azul");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#47BFFF";
        }
}
function azulOscuro() {
    const collection = document.getElementsByClassName("azul");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#003049";
        }
}
function verdeClaro() {
    const collection = document.getElementsByClassName("verde");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#78D34A";
        }
}
function verdeOscuro() {
    const collection = document.getElementsByClassName("verde");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#336819";
        }
}
function naranjaClaro() {
    const collection = document.getElementsByClassName("naranja");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#FFBA0A";
        }
}
function naranjaOscuro() {
    const collection = document.getElementsByClassName("naranja");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#c56601";
        }
}
function rojoClaro() {
    const collection = document.getElementsByClassName("rojo");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#F74242";
        }
}
function rojoOscuro() {
    const collection = document.getElementsByClassName("rojo");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#b32121";
        }
}

document.getElementById("ok").onclick = calcIMC;

