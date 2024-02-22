import { deleteTask, taskForm } from "./tasks"
import { masterTaskList } from "./tasks"

export function clearList() {
    let list = document.getElementById('list')
    while(list.hasChildNodes()) {
        list.removeChild(list.firstChild)
    }
}

export function allTasks() {
    clearList()
    let list = document.getElementById('list')

    masterTaskList.forEach(({ details, due, name, priority, project}) => {
        let taskDisplay = document.createElement('div')
                    taskDisplay.classList = 'task'
                    taskDisplay.innerHTML += `
                <p><strong>Title:</strong> ${name}</p>
                <p><strong>Due Date:</strong> ${due}</p>
                <p><strong>Description:</strong> ${details}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>Project:</strong> ${project}</p>
                <btn class='delete'>x</btn>
              `
              list.append(taskDisplay)
                let taskDelete = taskDisplay.childNodes[11]
                taskDelete.onclick = deleteTask
              console.log(taskDisplay.childNodes)
    })

        // 'add task' btn
        let taskBtn = document.createElement('button')
        taskBtn.type = 'submit'
        taskBtn.classList = 'task-btn'
        taskBtn.innerHTML = 'Add Task'
        taskBtn.onclick = taskForm
        list.append(taskBtn)
}

export function weeklyTasks() {
    clearList()
    let list = document.getElementById('list')
    let current = new Date()
    let today = current.getDate()
    let nextWeek = today + 7

            masterTaskList.forEach(({ details, due, name, priority, project}) => {
                let checkDate = new Date(`${due}`).getDate() + 1
                if ((today <= checkDate) && (checkDate <= nextWeek)) {
                    let taskDisplay = document.createElement('div')
                    taskDisplay.classList = 'task'
                    taskDisplay.innerHTML += `
                <p><strong>Title:</strong> ${name}</p>
                <p><strong>Due Date:</strong> ${due}</p>
                <p><strong>Description:</strong> ${details}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>Project:</strong> ${project}</p>
                <btn class='delete'>x</btn>
              `
              list.append(taskDisplay)
                let taskDelete = taskDisplay.childNodes[11]
                taskDelete.onclick = deleteTask
              console.log(taskDisplay.childNodes)
                    }
                })

    // 'add task' btn
    let taskBtn = document.createElement('button')
    taskBtn.type = 'submit'
    taskBtn.classList = 'task-btn'
    taskBtn.innerHTML = 'Add Task'
    taskBtn.onclick = taskForm
    list.append(taskBtn)
}

export function dailyTasks() {
    clearList()
    let list = document.getElementById('list')
    let current = new Date()
    let today = current.getDate()
    
            masterTaskList.forEach(({ details, due, name, priority, project}) => {
                let checkDate = new Date(`${due}`).getDate() + 1
                if (today == checkDate) {
                    let taskDisplay = document.createElement('div')
                    taskDisplay.classList = 'task'
                    taskDisplay.innerHTML += `
                <p><strong>Title:</strong> ${name}</p>
                <p><strong>Due Date:</strong> ${due}</p>
                <p><strong>Description:</strong> ${details}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>Project:</strong> ${project}</p>
                <btn class='delete'>x</btn>
              `
              list.append(taskDisplay)
                let taskDelete = taskDisplay.childNodes[11]
                taskDelete.onclick = deleteTask
              console.log(taskDisplay.childNodes)
                    }
                })

    // 'add task' btn
    let taskBtn = document.createElement('button')
    taskBtn.type = 'submit'
    taskBtn.classList = 'task-btn'
    taskBtn.innerHTML = 'Add Task'
    taskBtn.onclick = taskForm
    list.append(taskBtn)
}

export function priorityTasks() {
    clearList()
    let list = document.getElementById('list')
    let important = "High"
    
            masterTaskList.forEach(({ details, due, name, priority, project}) => {
                if (`${priority}` == important) {
                    let taskDisplay = document.createElement('div')
                    taskDisplay.classList = 'task'
                    taskDisplay.innerHTML += `
                <p><strong>Title:</strong> ${name}</p>
                <p><strong>Due Date:</strong> ${due}</p>
                <p><strong>Description:</strong> ${details}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>Project:</strong> ${project}</p>
                <btn class='delete'>x</btn>
              `
              list.append(taskDisplay)
                let taskDelete = taskDisplay.childNodes[11]
                taskDelete.onclick = deleteTask
              console.log(taskDisplay.childNodes)
                    }
                })

    // 'add task' btn
    let taskBtn = document.createElement('button')
    taskBtn.type = 'submit'
    taskBtn.classList = 'task-btn'
    taskBtn.innerHTML = 'Add Task'
    taskBtn.onclick = taskForm
    list.append(taskBtn)
}

export function projectTasks(e) {
    clearList()
    let list = document.getElementById('list')
    let projName = e.target.parentElement.firstElementChild.textContent

            masterTaskList.forEach(({ details, due, name, priority, project}) => {
                if (projName == `${project}`) {
                    let taskDisplay = document.createElement('div')
                    taskDisplay.classList = 'task'
                    taskDisplay.innerHTML += `
                <p><strong>Title:</strong> ${name}</p>
                <p><strong>Due Date:</strong> ${due}</p>
                <p><strong>Description:</strong> ${details}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>Project:</strong> ${project}</p>
                <btn class='delete'>x</btn>
              `
              list.append(taskDisplay)
                let taskDelete = taskDisplay.childNodes[11]
                taskDelete.onclick = deleteTask
              console.log(taskDisplay.childNodes)
                }
            })

    // 'add task' btn
    let taskBtn = document.createElement('button')
    taskBtn.type = 'submit'
    taskBtn.classList = 'task-btn'
    taskBtn.innerHTML = 'Add Task'
    taskBtn.onclick = taskForm
    list.append(taskBtn)
}