 // Selecionar elementos do DOM
    const inputMessage = document.getElementById('input1');
    const sendMessageButton = document.getElementById('button1');
    const chatContainer = document.getElementById('Caixadetextos');

    // Função para enviar mensagem do usuário
    function enviarMensagemUsuario() {
      const mensagem = inputMessage.value.trim();

      if (mensagem !== '') {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user'); // classe da div
        
        const userMessageH5 = document.createElement('h5');
        userMessageH5.textContent = 'Você diz:';
        
        const userMessageP = document.createElement('p');
        userMessageP.textContent = mensagem;
        
        userMessageDiv.appendChild(userMessageH5);
        userMessageDiv.appendChild(userMessageP); // append na div criada
        
        chatContainer.appendChild(userMessageDiv); // append na caixa de textos
        
        // Limpar o campo de entrada
        inputMessage.value = '';
      }
    }

    // Adicionar um evento de clique ao botão de envio
    // ao acontecer o evento, a função é chamada
    sendMessageButton.addEventListener('click', enviarMensagemUsuario);

    // Lidar com pressionar Enter para enviar a mensagem
    inputMessage.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        enviarMensagemUsuario();
      }
    });