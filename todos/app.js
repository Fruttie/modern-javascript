const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = (todo) => {

    //template string
    const html =  `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

    e.preventDefault();

    //trim() method removes any kind of white space before and after the string
    const todo = addForm.add.value.trim();

    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
    }
    
    
});

//delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }


})