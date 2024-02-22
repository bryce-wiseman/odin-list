import { clearList } from "./windows"
export { masterTaskList }

class Task {

    constructor (name, details, due, priority, project) {
        this.name = name
        this.details = details
        this.due = due
        this.priority = priority
        this.project = project
    }
}

export function taskForm() {
    clearList()
    let form = document.createElement('form')
    form.id = 'task-form'
    form.classList = "form"
    form.innerHTML = `
    <label class='task-label' for='task-name'>Task Name <em>(required)</em></label>
    <input type='text' id='task-name' name='task-name' class='form'></input>
    <br>
    <label class='task-label' for='task-details'>Task Details:</label>
    <input type='text' id='task-details' name='task-details' class='form'></input>
    <br>
    <label class='task-label' for='task-due-date'>Due Date <em>(required)</em></label>
    <input type='date' id='task-due-date' name='task-due-date' class='form'></input>
    <br>
    <label class='task-label' for='task-priority'>Priority</label>
    <select id='task-priority' name='task-priority' class='form'>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
    </select>
    <br>
    <label class='task-label' for='task-project'>Project <em>(required)</em></label>
    `

    let taskProject = document.createElement('select')
    taskProject.id = 'task-project'
    taskProject.name = 'task-project'
    taskProject.classList = 'form'
    let defaultOpt = document.createElement('option')
    defaultOpt.value = 'select one'
    defaultOpt.innerHTML = 'select one'
    taskProject.append(defaultOpt)
    taskProject.addEventListener('focus', enableTasks)
    form.append(taskProject)

    let spacer = document.createElement('br')
    form.append(spacer)

    let addBtn = document.createElement('button')
    addBtn.innerHTML = 'Add'
    addBtn.id = 'task-add-button'
    addBtn.type = 'submit'
    addBtn.addEventListener('click', function(event){event.preventDefault()})
    addBtn.onclick = makeNewTask
    form.append(addBtn)

    let list = document.getElementById('list')
    list.append(form)
}

let startingMasterTaskList = [];
let masterTaskList = localStorage.getItem("tasks")
masterTaskList = JSON.parse(masterTaskList || JSON.stringify(startingMasterTaskList))
masterTaskList.id = "masterTasks"

function makeNewTask() {
    let nameField = document.getElementById('task-name')
    let detailsField = document.getElementById('task-details')
    let dateField = document.getElementById('task-due-date')
    let priorityField = document.getElementById('task-priority')
    let projectField = document.getElementById('task-project')

    if(nameField.value == '' || dateField.value == '' || projectField.value == 'select one') {
        alert('Please fill out all required fields')
    } else {
        // determine what project
        // add to project's task list

        let newTask = new Task(nameField.value, detailsField.value, dateField.value, priorityField.value, projectField.value)

        masterTaskList.push(newTask)

        taskForm()
    }    
}


export function enableTasks() {
    let projList = document.querySelectorAll('.project')
    
    for(let i = 0; i < projList.length; i++) {
        let opt = document.createElement('option')
        opt.value = projList[i].firstElementChild.textContent
        opt.innerHTML = projList[i].firstElementChild.textContent
        let options = document.getElementById('task-project')
        options.append(opt)
        options.removeEventListener('focus', enableTasks)
    }
}

export function deleteTask(e) {
    clearList()
    let taskName = e.target.parentElement.firstElementChild.textContent
    for (let x = 0; x < masterTaskList.length; x++) {
        if (taskName == ("Title: " + masterTaskList[x]["name"])) {
            masterTaskList.splice(x, 1)
        } 
        }

    e.target.parentElement.remove()
}