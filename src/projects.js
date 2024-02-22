import { clearList, projectTasks } from "./windows"
import { masterTaskList } from "./tasks"
import { projectList } from "./sidebar" 

class Project {

    constructor (title) {
        this.title = title
    }
    taskList = []
}


export function projectForm() {
    let form = document.createElement('form')
    form.id = 'project-form'
    form.classList = "hidden form"

    let projectNameLabel = document.createElement('label')
    projectNameLabel.innerHTML = 'Project Name'
    projectNameLabel.id = 'project-name-label'
    projectNameLabel.setAttribute('for', 'project-name')
    form.append(projectNameLabel)
    let projectName = document.createElement('input')
    projectName.type = 'text'
    projectName.id = 'project-name'
    projectName.classList = 'form'
    projectName.name = 'project-name'
    form.append(projectName)

    let addBtn = document.createElement('button')
    addBtn.innerHTML = 'Add'
    addBtn.id = 'project-add-button'
    addBtn.type = 'submit'
    addBtn.addEventListener('click', function(event){event.preventDefault()})
    addBtn.onclick = makeNewProject
    form.append(addBtn)

    let saveBtn = document.getElementById('sidebar-save')
    sidebar.insertBefore(form, saveBtn)
}

let i = 0;

function makeNewProject() {

        let newProjectName = document.getElementById('project-name')
        if (newProjectName.value !== "") {
        let newProject = newProjectName.value  
        projectList.push(newProject)
    
        let projectDisplay = document.createElement('div')
        projectDisplay.classList = 'project'
        projectDisplay.innerHTML = `
        <p class='proj-name'>${newProject}</p>
        <btn class='delete'>x</btn>
        `
    projectDisplay.id = 'project' + i  
    let projName = projectDisplay.childNodes[1]
    projName.onclick = projectTasks
    let projDelete = projectDisplay.childNodes[3]
    projDelete.onclick = deleteProject

    let projectContainer = document.getElementById('project-container')
    projectContainer.append(projectDisplay)
    newProjectName.value = ""
  
    i++
} else {
        alert("Please enter a project name")
    }
}

export function deleteProject(e) {
    clearList()
    let projName = e.target.parentElement.firstElementChild.textContent
    for (let x = 0; x < projectList.length; x++) {
        if (projName == projectList[x]) {
            projectList.splice(x, 1)
        } 
        }

        for (let z = 0; z < masterTaskList.length; z++) {
            if (projName == masterTaskList[z]['project']) {
                masterTaskList.splice(z, 1)
            } 
            }
    e.target.parentElement.remove()
}

export function storeData() {
    localStorage.setItem("projects", JSON.stringify(projectList))
    console.log(projectList)
    localStorage.setItem("tasks", JSON.stringify(masterTaskList))
    console.log(masterTaskList)
}