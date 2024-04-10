document.getElementById('add-item').addEventListener('click', addItem);

function addItem() {
    const itemText = document.getElementById('new-item').value.trim();
    const itemDescription = document.getElementById('new-description').value.trim();
    const priorityValue = document.getElementById('new-priority').value;
    const priorityText = document.getElementById('new-priority').options[document.getElementById('new-priority').selectedIndex].text;
    if (!itemText) return;

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.innerHTML = `
        <div>
            <strong>${itemText}</strong> (Priority: ${priorityText})
            <p>${itemDescription}</p>
        </div>
        <button class="complete-item">Complete</button>
    `;
    listItem.querySelector('.complete-item').addEventListener('click', function() {
        animateFirework(listItem);
        setTimeout(() => listItem.remove(), 1000); // Delay item removal to show animation
    });

    document.getElementById('todo-list').appendChild(listItem);
    sortList();
}

function animateFirework(element) {
    element.classList.add('firework-animation');
    setTimeout(() => element.remove(), 1000); // Remove item after animation
}


function sortList() {
    let list = document.getElementById('todo-list');
    let items = Array.from(list.querySelectorAll('.todo-item'));
    items.sort(function(a, b) {
        let priorityA = parseInt(a.innerHTML.match(/\(Priority: (\d)/)[1], 10);
        let priorityB = parseInt(b.innerHTML.match(/\(Priority: (\d)/)[1], 10);
        if (priorityA !== priorityB) return priorityB - priorityA;
        let textA = a.querySelector('strong').textContent.toUpperCase();
        let textB = b.querySelector('strong').textContent.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    items.forEach(item => list.appendChild(item));
}

document.getElementById('new-item').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addItem();
});
