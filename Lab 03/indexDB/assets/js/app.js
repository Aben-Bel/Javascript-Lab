// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const flip = document.querySelector('#order');

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

//DB variable 
let DB;

// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {  
    let TasksDB = indexedDB.open('tasks', 1);

    TasksDB.onerror = function() {
            console.log('There was an error');
        }

    TasksDB.onsuccess = function() {
        console.log('Database Ready');
        DB = TasksDB.result;
        displayTaskList();
    }
    TasksDB.onupgradeneeded = function(e) {
        let db = e.target.result;

        let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

        objectStore.createIndex('taskname', 'taskname', { unique: false });
        objectStore.createIndex('date', 'date',{unique:false});

        console.log('Database ready and fields created!');
    }

});

form.addEventListener("click", addNewTask);

function addNewTask(e) {
    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return;
    }
  let newTask = {
      taskname: taskInput.value,
      date:new Date()
  }
  let transaction = DB.transaction(['tasks'], 'readwrite');
  let objectStore = transaction.objectStore('tasks');

  let request = objectStore.add(newTask);
  request.onsuccess = () => {
      form.reset();
  }
  transaction.oncomplete = () => {
      console.log('New Task added');
      displayTaskList();
  }
  transaction.onerror = () => { console.log('There was an error, try again!'); }
}

function displayTaskList() {
    // clear the previous task list
    while (taskList.firstChild) {   taskList.removeChild(taskList.firstChild);}

    // create the object store
    let objectStore = DB.transaction('tasks').objectStore('tasks');

    objectStore.openCursor().onsuccess = function(e) {
        // assign the current cursor
        let cursor = e.target.result;

        if (cursor) {
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.setAttribute('data-task-id', cursor.value.id);
            li.date = cursor.value.date;

            const link = document.createElement('a');
            // Add class and the x marker for a 
            link.className = 'delete-item secondary-content';
            link.innerHTML = `
             <i class="fa fa-remove"></i>
            &nbsp;<a href="./edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i> </a>
            `;
            li.appendChild(link);
            li.appendChild(document.createTextNode(cursor.value.taskname));
            taskList.appendChild(li);
            cursor.continue();
        }
    }
}


clearBtn.addEventListener('click', clearAllTasks);
function clearAllTasks() {

    let transaction = DB.transaction("tasks", "readwrite"); 
    let tasks = transaction.objectStore("tasks");


    tasks.clear(); 

    displayTaskList();

    console.log("Tasks Cleared !!!");
}


taskList.addEventListener('click', removeTask);

function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));

            let transaction = DB.transaction(['tasks'], 'readwrite');
            let objectStore = transaction.objectStore('tasks');
            objectStore.delete(taskID);

            transaction.oncomplete = () => {
                e.target.parentElement.parentElement.remove();
            }

        }
    }
}

flip.addEventListener('change', sortDisplay);

function sortDisplay(e){
    while (taskList.firstChild) {  taskList.removeChild(taskList.firstChild);}
    
    let objectStore = DB.transaction('tasks').objectStore('tasks');
    console.log(e.target);
        // sorting by date when getting data "index('date').openCursor(null, next)"
        objectStore.index('date').openCursor(null, 'next').onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;
    
            if (cursor) {
                const li = document.createElement('li');
                li.className = 'collection-item';
                li.setAttribute('data-task-id', cursor.value.id);
                li.date = cursor.value.date;
    
                const link = document.createElement('a');
                // Add class and the x marker for a 
                link.className = 'delete-item secondary-content';
                // edit button
                link.innerHTML = `
                 <i class="fa fa-remove"></i>
                &nbsp;<a href="./edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i> </a>
                `;
                li.appendChild(link);
                li.appendChild(document.createTextNode(cursor.value.taskname));
                
                // appending sorted by date list from bottom or from top. 
                if(e.target.value == "Ascendning"){
                    taskList.appendChild(li);
                }else{
                    taskList.prepend(li);
                }
                cursor.continue();
            }
        }

    
}







