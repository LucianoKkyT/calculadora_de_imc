import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculateIMC } from './utils.js'

// Primeiramente iremos mapear as nossas variáveis - variable
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Sumindo com a mensagem de erro ao começar a digitar nos inputs
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  // Utilizando a função Not a Number
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result) //Mostrando a mensagem com o resultado do IMC
}

// Etapa para mostrar a mensagem
function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message 
  Modal.open()//Aqui a função está sendo executada
}







  
 

  

