document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const inputElement = document.getElementById('chat-input');
    const message = inputElement.value.trim();
    if (message) { // Check if the message is not empty
        const chatMessages = document.getElementById('chat-messages');
        const newMessageDiv = document.createElement('div');
        newMessageDiv.classList.add('message');
        const newMessageParagraph = document.createElement('p');
        newMessageParagraph.classList.add('text', 'user-message');
        newMessageParagraph.textContent = message;
        newMessageDiv.appendChild(newMessageParagraph);
        chatMessages.appendChild(newMessageDiv);
        inputElement.value = ''; // Clear input field
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }
});
