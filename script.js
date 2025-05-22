// Array de preguntas del cuestionario
const preguntas = [
  {
    pregunta: "¿Cuál es la principal función de las enzimas en el cuerpo humano?",
    opciones: [
      "Proporcionar energía",
      "Regular la temperatura corporal",
      "Acelerar las reacciones químicas",
      "Transportar oxígeno en la sangre"
    ],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué macronutriente es la principal fuente de energía en la dieta humana?",
    opciones: [
      "Proteínas",
      "Carbohidratos",
      "Lípidos",
      "Vitaminas"
    ],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuál de las siguientes vitaminas es liposoluble?",
    opciones: [
      "Vitamina C",
      "Vitamina B12",
      "Vitamina A",
      "Vitamina B6"
    ],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué mineral es esencial para la formación de hemoglobina?",
    opciones: [
      "Calcio",
      "Hierro",
      "Potasio",
      "Zinc"
    ],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuál es el pH aproximado del jugo gástrico en el estómago humano?",
    opciones: [
      "7.0",
      "6.5",
      "2.0",
      "8.0"
    ],
    respuestaCorrecta: 2
  }
];

// Variables para controlar el estado del cuestionario
let preguntaActual = 0;
let puntuacion = 0;

// Referencias a elementos del DOM
const contenedorCuestionario = document.getElementById("cuestionario");
const btnSiguiente = document.getElementById("btn-siguiente");
const contenedorResultado = document.getElementById("resultado");
const textoPuntuacion = document.getElementById("puntuacion");

// Función para mostrar una pregunta
function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  let opcionesHTML = "";

  pregunta.opciones.forEach((opcion, index) => {
    opcionesHTML += `
      <div class="opcion">
        <label>
          <input type="radio" name="opcion" value="${index}">
          ${opcion}
        </label>
      </div>
    `;
  });

  contenedorCuestionario.innerHTML = `
    <h2>Pregunta ${preguntaActual + 1} de ${preguntas.length}</h2>
    <p>${pregunta.pregunta}</p>
    ${opcionesHTML}
  `;
}

// Función para mostrar el resultado final
function mostrarResultado() {
  contenedorCuestionario.classList.add("oculto");
  btnSiguiente.style.display = "none";
  //btnSiguiente.classList.add("oculto"); // Ocultar botón siguiente
  contenedorResultado.classList.remove("oculto");
  textoPuntuacion.textContent = `Obtuviste ${puntuacion} de ${preguntas.length} respuestas correctas.`;
}

// Evento del botón siguiente
btnSiguiente.addEventListener("click", () => {
  const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');

  if (!opcionSeleccionada) {
    alert("Por favor, selecciona una respuesta antes de continuar.");
    return;
  }

  const respuesta = parseInt(opcionSeleccionada.value);

  if (respuesta === preguntas[preguntaActual].respuestaCorrecta) {
    puntuacion++;
  }

  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
});

// Mostrar primera pregunta al cargar la página
mostrarPregunta();
