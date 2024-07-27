document.addEventListener(`DOMContentLoaded`,()=>{
    const form=document.getElementById('to-do-list');
    const taskInput=document.getElementById("task-input");
    const taskList=document.getElementById("task-list")
})

form.addEventListener(`submit`,(e)=>{
    e.preventDefault();
    addtask(taskInput.value);
    taskInput.value='';
})