export const Modal = {//Utilizando um Objeto Literal

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'), 

  open() {
    Modal.wrapper.classList.add('open')//Função está sendo somente registrada
  },
  close() {
    Modal.wrapper.classList.remove('open')//Função está sendo somente registrada 
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()//Aqui a função está sendo executada
}

// Adicinando a função para fechar o Modal com a tecla ESC
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}

