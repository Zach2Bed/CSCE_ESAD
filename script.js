document.addEventListener('DOMContentLoaded', function() {
    // Display the initial message when the chat loads
    displayMessage("Please enter the topic you would like to begin research on.", 'friend-message');
});

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting through the browser
    const inputElement = document.getElementById('chat-input');
    const message = inputElement.value.trim();

    if (message) {
        // Display the user's message in the chat
        displayMessage(message, 'user-message');

        // Encode the user's query for use in a URL
        const query = encodeURIComponent(message);

        // Generate a Google Scholar search URL
        const scholarUrl = `https://scholar.google.com/scholar?q=${query}`;

        // Display the link in the chat for the user to click, centered
        displayLinkMessage(`Click here to search for "${message}" on Google Scholar.`, scholarUrl, 'friend-message-center');

        inputElement.value = ''; // Clear input field
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
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}

function displayLinkMessage(message, url, className) {
    const chatMessages = document.getElementById('chat-messages');
    const newMessageDiv = document.createElement('div');
    newMessageDiv.classList.add('message', className);
    const newMessageParagraph = document.createElement('p');
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', url);
    linkElement.setAttribute('target', '_blank'); // Open link in a new tab
    linkElement.innerHTML = message;
    newMessageParagraph.appendChild(linkElement);
    newMessageDiv.appendChild(newMessageParagraph);
    chatMessages.appendChild(newMessageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}
