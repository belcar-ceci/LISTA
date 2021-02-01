// Selectores
const $input = document.querySelector('input')
const $add = document.querySelector('div button')
const $ul = document.querySelector('ul')


// Cada ves que pulsemos añadir
$add.onclick = () => {
  // Si no se ha escrito tarea mostramos mensaje
  if (!$input.value) 
    return alert('¡Ups, por favor escriba alguna tarea!')

  // Iniciar HTML
  const html = 
    `<li>
      <span>${$input.value}</span>
      <button onclick="borrar(this)">Eliminar</button>
    </li>`

  // Insertamos al final de mi lista
  $ul.insertAdjacentHTML('beforeend', html)
}

// Función para eliminar elemento
function borrar($elemento) {
  $elemento.parentElement.remove()
} 