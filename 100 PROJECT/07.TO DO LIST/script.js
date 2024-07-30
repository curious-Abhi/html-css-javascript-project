document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("to-do-list");
  const textInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTask(textInput.value)
    textInput.value="";
})


  function addTask(task){ if(task.trim()===''){
        return;
    }
    const li=document.createElement('li');
    li.textContent=task;

    const actions=document.createElement('div')
    actions.classList.add('actions')

    const editButton=document.createElement('button')
        editButton.textContent="Edit"
        editButton.addEventListener("click",()=>{
            const newTask=prompt('Edit task:',task)
            if(newTask){
                li.firstChild.textContent=newTask;
            }
        })
        

    const deleteButton=document.createElement('button')
    deleteButton.textContent="Delete"
    deleteButton.addEventListener("click",()=>{
        taskList.removeChild(li);

        })  
        actions.appendChild(editButton)
        actions.appendChild(deleteButton)
        li.appendChild(actions)
    
        taskList.appendChild(li);

    }
})
