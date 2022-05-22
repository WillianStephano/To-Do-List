const btNovaTarefa = document.querySelector('.bt_nova_tarefa')

btNovaTarefa.addEventListener( 'click', function (event) {
   event.preventDefault()
   
   
   tagLI = CriaItemEmLista()
   
   var inputCheckbox = document.createElement('input')
   inputCheckbox.setAttribute('type', 'checkbox')
   tagLI.appendChild(inputCheckbox)
   
   
   
   
})

function CriaItemEmLista(){
   var valorNovaTarefa = document.querySelector('.nova_tarefa_campo').value
   
   var tarefasLista = document.querySelector('.lista_tarefas')

   var tagLI = document.createElement('li')
   tagLI.textContent = valorNovaTarefa
   tagLI.classList.add('item_tarefas')
   tarefasLista.appendChild(tagLI)

   return tagLI
}




