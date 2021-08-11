import {Todo} from './todos.js';

let defaultProject = []
let currentProject = defaultProject;

//Testing objects!!
var fakeItem = new Todo('Groceries', '' , '', '',  )
defaultProject.push(fakeItem);


//Task creator form
document.getElementById('submit-item').onclick = () => createItem();

function createItem() {
    const title = document.getElementById('title-form')
    if (title.value == null || title.value == '') return;
    const item = new Todo(title.value);
    currentProject.push(item);
    resetDisplay();
    renderDisplay();
    //Resets the form
    title.value = null;
};

document.body.onload = renderDisplay();

function renderDisplay() {
    currentProject.forEach(e => {
        const div = document.createElement('div');
        addTitle(div, e);
        addDescription(div, e);
    })
}

function addTitle(div, e) {
    div.setAttribute('class', 'task');
    div.innerHTML = `${e.getTitle()}`;
    document.querySelector('.task-container').appendChild(div);  
};

function addDescription(div, e) {
    const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'task-description');
        newDiv.innerHTML = `Description: ${e.getDescription()}`
        div.appendChild(newDiv);
};

function resetDisplay() {
    document.querySelectorAll('.task').forEach(e => e.remove());
};

//Event listener for expanding task content
document.querySelectorAll('.task').forEach(item => {
    item.addEventListener('click', () => {
        const taskContent = item.nextElementSibling;
    })
});



