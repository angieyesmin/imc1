function calcularIMC() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);
    const recomendaciones = obtenerRecomendaciones(imc);

    document.getElementById("nombreResultado").textContent = nombre;
    document.getElementById("edadResultado").textContent = edad + " años";
    document.getElementById("imcResultado").textContent = imc.toFixed(2);

    let recomendacionesTexto = "";
    recomendaciones.forEach(recomendacion => {
        recomendacionesTexto += recomendacion + "<br>";
    });
    document.getElementById("recomendacionesResultado").innerHTML = recomendacionesTexto;

    document.getElementById("resultado").style.display = "block";
}

function obtenerRecomendaciones(imc) {
    if (imc < 18.5) {
        return ["Estás bajo de peso.", "Consulta a un médico y un nutricionista para planificar una dieta adecuada."];
    } else if (imc >= 18.5 && imc < 24.9) {
        return ["Tienes un peso saludable.", "Mantén una dieta equilibrada y realiza ejercicio regularmente."];
    } else if (imc >= 25 && imc < 29.9) {
        return ["Tienes sobrepeso.", "Habla con un médico o un nutricionista para recibir orientación sobre cómo perder peso de forma saludable."];
    } else {
        return ["Tienes obesidad.", "Es importante buscar asesoramiento médico para abordar la obesidad y sus riesgos para la salud."];
    }
}

