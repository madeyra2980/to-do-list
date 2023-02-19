const container = document.querySelector('.container')
const header = document.querySelector('.header')
const Todo = document.createElement('div')
const ToDoItems = document.createElement('div')


Todo.classList.add('main-to_do')
container.appendChild(Todo)
const toDoContainer = document.querySelector('.main-to_do')


const elem = [
    {
        title: 'Completed online JavaScript course',
        completed:false
    },
    {
        title: 'Jog around the park 3x',
        completed:true,
    },
    {
        title: '10 minutes meditation',
        completed: false,
    }   
    ,
    {
        title:'Read for 1 hour',
        completed: false,
    }
    ,
    {
        title: 'Pick up groceries',
        completed: false,
    },
    {
        title: 'Complete Todo App on Frontend Mentor',
        completed: false
        
    }
]


function displayToDO(){        
    toDoContainer.innerHTML = "";
    for(let i = 0; i<elem.length; i++){
        key = elem[i]
        toDoContainer.innerHTML +=    
        `
        <ul id = "task-list">
        <div class = "to-do-main-section">
            <input type = "checkbox"></input>
            <p>${key.title}</p>
            </div>
            </ul>   
            `
    }



ToDoItems.innerHTML = 

`  <div class="to-do_items">
<div class = "left_items">
<p>5 items left</p>
</div>

<div class = "center_items">
<button id="all_btn">All</button>
<button id="active_btn">Active</button>
<button id="completed_btn">Completed</button>
</div>

<div class="right_items">
<button id="clear_completed">Clear Completed</button>
</div>
</div>`




toDoContainer.appendChild(ToDoItems) 



}
// const all_btn = document.querySelector('#all_btn')
// const active_btn = document.querySelector('#active_btn')
// const completed_btn = document.querySelector('#completed_btn')
// const clear_completed = document.querySelector('#clear_completed')





function addTask(){
    const taskInput = document.getElementById("printer");
    const taskText = taskInput.value;

    if(taskText !== ""){
        elem.push({
            title: taskInput.value,
            completed: false,

        })

        taskInput.value = ""

    }
    
        
        

    displayToDO()

}


// function renderTasks() {
//     const taskList = document.getElementById("task-list");
//     taskList.innerHTML = "";

//     for (let i = 0; i < tasks.length; i++) {

//       const task = elem[i];

//       const taskItem = document.querySelector("li");

//       taskItem.innerHTML = task;
//       taskList.appendChild(taskItem);

//     }
//     displayToDO()
//   }

displayToDO()




