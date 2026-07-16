// 1. EL OBJETO: Nuestra única fuente de verdad
const personaje = {
    atributos: {
        fuerza: 1,
        destreza: 1,
        resistencia: 1
    }
};

// 2. REFERENCIAS AL DOM
// Capturamos todos los circulitos de la pantalla
const todosLosPuntos = document.querySelectorAll('.punto');
const consolaJS = document.getElementById('consola-js');

// Mostramos el estado inicial en pantalla
actualizarConsola();

// 3. LOGICA AL HACER CLIC
todosLosPuntos.forEach(punto => {
    punto.addEventListener('click', (evento) => {
        // Obtenemos qué punto se ha pulsado (ej: el 3)
        const valorPulsado = parseInt(evento.target.dataset.valor);
        
        // Obtenemos a qué atributo pertenece subiendo a su elemento padre (ej: "fuerza")
        const atributoSeleccionado = evento.target.closest('.fila-atributo').dataset.atributo;

        // Actualizamos el objeto JS con el nuevo valor
        personaje.atributos[atributoSeleccionado] = valorPulsado;

        // Llamamos a la función que redibuja los puntos
        actualizarInterfaz(atributoSeleccionado, valorPulsado);
        
        // Mostramos cómo el objeto cambia en tiempo real
        actualizarConsola();
    });
});

// 4. FUNCIONES DE ACTUALIZACIÓN VISUAL
function actualizarInterfaz(atributo, valor) {
    // Buscamos la fila específica que tenemos que repintar
    const fila = document.querySelector(`.fila-atributo[data-atributo="${atributo}"]`);
    const puntosDeFila = fila.querySelectorAll('.punto');

    // Recorremos los 5 puntos de esa fila
    puntosDeFila.forEach(punto => {
        const valorDelPunto = parseInt(punto.dataset.valor);
        
        // Si el valor del punto es menor o igual al que hemos pulsado, lo encendemos
        if (valorDelPunto <= valor) {
            punto.classList.add('activo');
        } else {
            // Si es mayor, lo apagamos
            punto.classList.remove('activo');
        }
    });
}

function actualizarConsola() {
    // Mostramos el objeto formateado para que los alumnos lo entiendan
    consolaJS.innerHTML = JSON.stringify(personaje.atributos, null, 4);
}