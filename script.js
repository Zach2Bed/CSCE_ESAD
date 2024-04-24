document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputElement = document.getElementById('chat-input');
    const message = inputElement.value.trim();
    if (message) {
        displayMessage(message, 'user-message');
        const query = encodeURIComponent(message);
        const scholarUrl = `https://scholar.google.com/scholar?q=${query}`;
        displayLinkMessage(`Click here to search for "${message}" on Google Scholar.`, scholarUrl, 'friend-message-center');
        inputElement.value = ''; // Clear input field after sending
    }
});

function displayMessage(message, className) {
    const chatMessages = document.getElementById('chat-messages');
    const newMessageDiv = document.createElement('div');
    newMessageDiv.classList.add('message', className);
    const newMessageParagraph = document.createElement('p');
    newMessageParagraph.textContent = message;
    newMessageDiv.appendChild(newMessageParagraph);
    chatMessages.appendChild(newMessageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Automatically scroll to the bottom
}

function displayLinkMessage(message, url, className) {
    const chatMessages = document.getElementById('chat-messages');
    const newMessageDiv = document.createElement('div');
    newMessageDiv.classList.add('message', className);
    const newMessageParagraph = document.createElement('p');
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', url);
    linkElement.setAttribute('target', '_blank');
    linkElement.textContent = message;
    newMessageParagraph.appendChild(linkElement);
    newMessageDiv.appendChild(newMessageParagraph);
    chatMessages.appendChild(newMessageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
