const form = document.getElementById("formMatricula");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const ciclo = document.getElementById("ciclo");
const acepto = document.getElementById("acepto");
const mods = document.getElementsByName("modulos");

edad.oninput = function () {
    if (edad.value >= 16 && edad.value <= 60) {
        msgEdad.innerHTML = "VALIDO";
        msgEdad.style.color = "green";
    } else {
        msgEdad.innerHTML = "INVALIDO";
        msgEdad.style.color = "red";
    }
};

email.oninput = function () {
    if (email.value.includes("@") && email.value.includes(".") && email.value.length >= 6 && !email.value.includes("yahoo.")) {
        msgEmail.innerHTML = "VALIDO";
        msgEmail.style.color = "green";
    } else {
        msgEmail.innerHTML = "INVALIDO";
        msgEmail.style.color = "red";
    }
};

form.onsubmit = function (e) {
    e.preventDefault();

    let error = "";

    if (ciclo.value == "") {
        error += "Ciclo\n";
        msgCiclo.innerHTML = "elige uno";
    } else {
        msgCiclo.innerHTML = "";
    }

    let cont = 0;
    let textoMods = "";

    for (let i = 0; i < mods.length; i++) {
        if (mods[i].checked) {
            cont++;
            textoMods += mods[i].value + " ";
        }
    }

    if (cont < 2) {
        error += "Módulos\n";
        msgMods.innerHTML = "marca 2";
    } else {
        msgMods.innerHTML = "";
    }

    if (!acepto.checked) {
        error += "Condiciones\n";
        acepto.innerHTML = "obligatorio";
    } else {
        acepto.innerHTML = "";
    }

    if (error != "") {
        alert("Errores:\n" + error);
        return;
    }

    document.body.innerHTML =
        "<b><h2>Resumen</b></h2>" +
        "<b><p>Edad: </b>" + edad.value + "<p>" +
        "<b><p>Email: </b>" + email.value + "</p>" +
        "<b><p>Ciclo: </b>" + ciclo.value + "</p>" +
        "<b><p>Módulos: </b>" + textoMods + "</p>";
};

btnReload.onclick = function () {
    location.reload();
};
