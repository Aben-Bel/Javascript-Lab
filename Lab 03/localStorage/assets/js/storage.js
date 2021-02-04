function addToDatabase(newTask){
    let listOfTasks;
    if(localStorage.getItem('tasks')==null) {
        listOfTasks = [];
    }else{
        listOfTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    listOfTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(listOfTasks));
}

function loadFromDB(){
    let listOfTasks;
    if(localStorage.getItem('tasks') == null){
        listOfTasks = [];
    }else{
        listOfTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return listOfTasks;
}

function loadTasksFromDB() {
    let listofTasks = loadFromDB();
    if (listofTasks.length != 0) {

        listofTasks.forEach(function(eachTask) {

          const li = document.createElement('li');    
          li.className = 'collection-item';                          
          li.appendChild(document.createTextNode(eachTask));         
          const link = document.createElement('a');                        
          link.className = 'delete-item secondary-content';          
          link.innerHTML = '<i class="fa fa-remove"> </i>';
          li.appendChild(link);                                                    
          taskList.appendChild(li);                                            
        });
    }
}
 
document.addEventListener('DOMContentLoaded', loadTasksFromDB);

function clearAllTasksFromDB(){
    localStorage.clear();
}

function removeFromDB(taskItem) {
    let listofTasks;
    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    } else {
     listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    listofTasks.forEach(function(task, index) {
        if (taskItem.textContent.trim() === task.trim())
            listofTasks.splice(index, 1);
    });
    localStorage.setItem('tasks', JSON.stringify(listofTasks));
}
