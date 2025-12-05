// 1. Seleccionar elementos del DOM
const botonModoOscuro = document.querySelector('#btn-modo-oscuro');
const body = document.body;
// 2. Función que alterna la clase en el body
function toggleModoOscuro() {
// Alternamos la clase
body.classList.toggle('modo-oscuro');
// Comprobamos si el body tiene la clase para cambiar el texto del botón
const estaEnModoOscuro = body.classList.contains('modo-oscuro');
if (estaEnModoOscuro) {
botonModoOscuro.textContent = 'Desactivar modo oscuro';
} else {
botonModoOscuro.textContent = 'Activar modo oscuro';
}
}
// 3. Escuchar el evento click en el botón
botonModoOscuro.addEventListener('click', toggleModoOscuro);
// 1. Seleccionar todas las preguntas de la FAQ
const preguntasFaq = document.querySelectorAll('.faq-pregunta');
console.log('Preguntas FAQ encontradas:', preguntasFaq.length);
// 2. Recorrer cada pregunta y añadir un event listener
preguntasFaq.forEach(function (pregunta) {
pregunta.addEventListener('click', function () {
// this es la pregunta que se ha clicado
const itemFaq = this.parentElement; // .faq-item
// Alternamos la clase "activa" en el contenedor
// Cerrar todas las demás
preguntasFaq.forEach(function (otraPregunta) {
const otroItem = otraPregunta.parentElement;
if (otroItem != itemFaq) {
otroItem.classList.remove('activa');
}
});
// Alternar solo la actual
itemFaq.classList.toggle('activa');

});
});


