function addTodo() {
    const input = document.getElementById('todoInput');
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter an item.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${itemText}</span> <button class="delete-btn" onclick="deleteItem(this)">Delete</button>`;
    
    document.getElementById('list').appendChild(listItem);
    input.value = '';
}

function deleteItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function deleteAllItems() {
    document.getElementById('list').innerHTML = '';
}