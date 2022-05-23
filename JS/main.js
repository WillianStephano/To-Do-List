const btNovaTarefa = document.querySelector('.bt_nova_tarefa')

btNovaTarefa.addEventListener( 'click', function (event) {
   event.preventDefault()
   
   tagLI = criaNovaTarefa()
   
   criaBtClose()   
   selecionaBtFechar()
   
   
})


window.onload = (event) =>{   
   criaBtClose()
   selecionaBtFechar()
}




function criaNovaTarefa(){
   let valorNovaTarefa = document.querySelector('.nova_tarefa_campo').value
   let tarefasLista = document.querySelector('.lista_tarefas')
   
   let tagLI = document.createElement('li')
   tagLI.textContent = valorNovaTarefa
   tagLI.classList.add('item_tarefas')
   tarefasLista.appendChild(tagLI)
   
   
   return tagLI
}




function criaBtClose() {
   var tarefasLista = document.querySelectorAll('.item_tarefas')
   
   for (let i = 0; i < tarefasLista.length; i++) {
      var elemento = tarefasLista[i]
      var filho = elemento.childElementCount
      
      if (filho == 0) {
         let span = document.createElement('span')
         span.classList.add('bt_fechar_item')
         span.textContent = '\u00D7'
         elemento.appendChild(span)
      }
   }  
}

function selecionaBtFechar() {
   var btFecharTarefa = document.querySelectorAll('.bt_fechar_item')
   for (let i = 0; i < btFecharTarefa.length; i++) {
      btFecharTarefa[i].addEventListener('click', function (){
         let tarefa = btFecharTarefa[i].parentNode
         tarefa.classList.add('fechado')
      })
   }
}