// Capturamos el elemento HTML donde mostraremos los resultados
const displayArea = document.getElementById('display-area');

// ==========================================
// 1. DEFINICIÓN DE TIPOS DE DATOS
// ==========================================

// String (Cadenas de texto)
const datoString = "Vampiro: La Mascarada 5ª Edición";

// Number (Números, ya sean enteros o decimales)
const datoNumber = 1997;

// Boolean (Verdadero o Falso)
const datoBoolean = true;

// Array (Listas o colecciones de datos ordenados)
const datoArray = ["Dragon Quest", "Final Fantasy", "Pokemon"];

// Object (Estructuras de datos complejas con pares clave/valor)
const datoObject = {
    titulo: "Werewolf: The Apocalypse",
    edicion: "5th",
    jugadores: 4,
    enCurso: true
};


// ==========================================
// 2. FUNCIONES Y EFECTOS
// ==========================================

/**
 * Función principal que recibe el contenido a mostrar y la clase CSS del efecto.
 * Es vistosa porque reinicia la animación en el DOM cada vez que se llama.
 */
function mostrarConEfecto(contenidoHTML, claseEfecto) {
    // Primero, limpiamos las clases y el contenido anterior
    displayArea.className = '';
    displayArea.innerHTML = '';

    // Usamos un pequeño retraso (setTimeout) para engañar al navegador.
    // Esto fuerza a que se vuelva a reproducir la animación CSS desde cero.
    setTimeout(() => {
        displayArea.innerHTML = contenidoHTML;
        displayArea.classList.add(claseEfecto);
    }, 10);
}

// ==========================================
// 3. EVENTOS (Conectando botones con JS)
// ==========================================

document.getElementById('btn-string').addEventListener('click', () => {
    mostrarConEfecto(`<strong>String:</strong> "${datoString}"`, 'slide-effect');
});

document.getElementById('btn-number').addEventListener('click', () => {
    // Podemos hacer cálculos antes de mostrarlos
    const calculo = datoNumber + 29; 
    mostrarConEfecto(`<strong>Number:</strong> ${datoNumber} <br> <span style="font-size:1rem; color:#aaa;">(En 29 años será el ${calculo})</span>`, 'pop-effect');
});

document.getElementById('btn-boolean').addEventListener('click', () => {
    // Usamos un operador ternario para tomar una decisión basada en el booleano
    const mensaje = datoBoolean ? "¡Sí, es verdadero! (true)" : "Falso (false)";
    mostrarConEfecto(`<strong>Boolean:</strong> ${mensaje}`, 'spin-effect');
});

document.getElementById('btn-array').addEventListener('click', () => {
    // .join() convierte el array en una cadena de texto separada por comas
    const listaFormateada = datoArray.join(' ⚔️ ');
    mostrarConEfecto(`<strong>Array:</strong><br>[ ${listaFormateada} ]`, 'slide-effect');
});

document.getElementById('btn-object').addEventListener('click', () => {
    // JSON.stringify convierte el objeto a texto para poder verlo bonito en pantalla
    const objetoFormateado = JSON.stringify(datoObject, null, 4);
    mostrarConEfecto(`<strong>Object:</strong><br><pre>${objetoFormateado}</pre>`, 'pop-effect');
});