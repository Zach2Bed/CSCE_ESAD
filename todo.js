document.getElementById('add-item').addEventListener('click', addItem);
document.getElementById('clear-all').addEventListener('click', function() {
    document.getElementById('todo-list').innerHTML = ''; // Clear all tasks
});

function addItem() {
    const itemText = document.getElementById('new-item').value.trim();
    const itemDescription = document.getElementById('new-description').value.trim();
    const priorityValue = document.getElementById('new-priority').value;
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.innerHTML = `
        <div>
            <strong>${itemText}</strong> - <small>Priority: ${priorityValue}</small>
            <p>${itemDescription}</p>
        </div>
        <button onclick="this.parentNode.remove()">Complete</button>
    `;
    document.getElementById('todo-list').appendChild(listItem);
}
