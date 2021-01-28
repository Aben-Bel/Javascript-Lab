const taskInput = document.querySelector("#task");
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const taskTitle = document.querySelector("#task-title");
const flip = document.querySelector("#order");


form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
flip.addEventListener('change', order);

function addNewTask(e) {
    e.preventDefault();

    if(taskInput.value === ""){
        taskInput.style.borderColor = "red";
        return;
    }


    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    const date = document.createElement('span');
    date.hidden = true;
    date.textContent = " " + new Date();



    li.appendChild(link);
    li.appendChild(date);

    taskList.appendChild(li);

}

function clearAllTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    
    document.querySelectorAll(".collection-item").forEach(function(e){
        if(e.childNodes[0].textContent.includes(filter.value)){
            e.style.display = "block";
        }else{
            e.style.display = "none";
        }
    });

    
}


function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure about that?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

function order(e){
    console.log("hello");
    taskListChild = Array.from(taskList.childNodes);
    taskListChild.reverse();
    clearAllTasks();
    taskListChild.forEach((ele)=>{
        taskList.appendChild(ele);
    });
}
