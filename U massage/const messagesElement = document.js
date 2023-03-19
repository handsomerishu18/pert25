const messagesElement = document.getElementById('messages');
const messageInputElement = document.getElementById('message-input');
const sendButtonElement = document.getElementById('send-button');

sendButtonElement.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInputElement.value.trim();
  if (message !== '') {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesElement.appendChild(messageElement);
    messageInputElement.value = '';
  }
}

messageInputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
