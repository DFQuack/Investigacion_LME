function calcIMC() {
    let peso = document.getElementById("peso").value;
    peso = Number(peso);
    let h = document.getElementById("altura").value;
    h = Number(h);

    let imc = peso / Math.pow(h, 2);
    if (isNaN(imc)){
        document.getElementById("result").innerHTML = "Inserte valores válidos."
    }
    else {
        document.getElementById("result").innerHTML = "IMC: " + imc.toFixed(1);
    }
}

document.getElementById("ok").onclick = calcIMC;

