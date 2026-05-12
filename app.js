
const formulario = document.getElementById('formulario-tareas');
const listaTareas = document.getElementById('lista-tareas');
const entradaTexto = document.getElementById('entrada-tarea');
const entradaPrioridad = document.getElementById('prioridad-tarea');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que se recargue la página

    // Crear el elemento de la lista (LI) dinámicamente
    const nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add('item-tarea', entradaPrioridad.value);

    
    nuevaTarea.innerHTML = `
        <span class="texto-tarea">${entradaTexto.value}</span>
        <button class="boton-eliminar">Borrar</button>
    `;

    // Programar la eliminación de la tarea al hacer clic en el botón
    nuevaTarea.querySelector('.boton-eliminar').onclick = function() {
        nuevaTarea.remove();
    };

    // "Inyectar" la nueva tarea dentro de la lista en el HTML
    listaTareas.appendChild(nuevaTarea);

    // Limpiar el formulario para la siguiente tarea
    formulario.reset();
});