import { projectForm, storeData, deleteProject } from './projects.js'
import { allTasks, dailyTasks, weeklyTasks, priorityTasks, projectTasks } from './windows.js'
export { projectList}

let projectStartList = [];
let projectList = localStorage.getItem("projects")
projectList = JSON.parse(projectList || JSON.stringify(projectStartList))
projectList.id = 'project-list'

export function sidebarContent() {
    let sidebar = document.getElementById('sidebar')
    let all = document.createElement('div')
    all.className = "sidebar-content"
    all.id = "sidebar-all"
    let allTitle = document.createElement('p')
    allTitle.innerHTML = 'All Tasks'
    allTitle.id = 'all-title'
    all.onclick =  allTasks; 
    all.append(allTitle)

    sidebar.append(all)
    
    let week = document.createElement('div')
    week.className = "sidebar-content"
    week.id = "sidebar-week"
    let weekTitle = document.createElement('p')
    weekTitle.innerHTML = 'This Week'
    weekTitle.id = 'week-title'
    week.onclick =  weeklyTasks;
    week.append(weekTitle)

    sidebar.append(week)

    let today = document.createElement('div')
    today.className = "sidebar-content"
    today.id = "sidebar-today"
    let dayTitle = document.createElement('p')
    dayTitle.innerHTML = 'Today'
    dayTitle.id = 'day-title'
    today.onclick =  dailyTasks;
    today.append(dayTitle)
    

    sidebar.append(today)

    let starred = document.createElement('div')
    starred.className = "sidebar-content"
    starred.id = "sidebar-starred"
    let starredTitle = document.createElement('p')
    starredTitle.innerHTML = 'Important'
    starredTitle.id = 'starred-title'
    starred.onclick =  priorityTasks;
    starred.append(starredTitle)

    sidebar.append(starred)


    let line = document.createElement('hr')
    line.style.borderTop = "2px solid"
    line.style.borderBottom = "none"
    line.style.borderColor = "#eee"

    sidebar.append(line)

    let groups = document.createElement('div')
    groups.id = "sidebar-groups"
    let groupsTitle = document.createElement('p')
    groupsTitle.innerHTML = 'Project Groups'
    groupsTitle.id = 'groups-title'
    groups.append(groupsTitle)

    sidebar.append(groups)

    let line2 = document.createElement('hr')
    line2.style.borderTop = "1px solid"
    line2.style.borderBottom = "none"
    line2.style.borderColor = "#188555"

    sidebar.append(line2)

    let line3 = document.createElement('hr')
    line3.style.borderTop = "1px solid"
    line3.style.borderBottom = "none"
    line3.style.borderColor = "#188555"
    line3.id = 'last-line'

    sidebar.append(line3)

    let addProject = document.createElement('div')
    addProject.className = "sidebar-content"
    addProject.id = "sidebar-add-project"
    let addProjectTitle = document.createElement('p')
    addProjectTitle.innerHTML = 'Add Project'
    addProjectTitle.id = 'add-project-title'
    addProject.onclick = formVisibility
    addProject.append(addProjectTitle)

    sidebar.append(addProject)

    let saveData = document.createElement('div')
    saveData.className = "sidebar-content"
    saveData.id = "sidebar-save"
    let saveDataTitle = document.createElement('p')
    saveDataTitle.innerHTML = 'Save Data'
    saveDataTitle.id = 'save-data-title'
    saveData.onclick = storeData
    saveData.append(saveDataTitle)
    sidebar.append(saveData)

    projectForm()
    checkForProjects()
    }

    function formVisibility() {
        let form = document.getElementById('project-form')

        form.classList.toggle('hidden')
    }

    function checkForProjects() {
        let sidebar = document.getElementById('sidebar')
        let projectContainer = document.createElement('div')
        projectContainer.id = 'project-container'
        let bottomLine = document.getElementById('last-line')
        sidebar.insertBefore(projectContainer, bottomLine)

        if (projectList.length !== 0) {
            for (let x = 0; x < projectList.length; x++) {
                let projectDisplay = document.createElement('div')
                projectDisplay.classList = 'project'
                projectDisplay.innerHTML = `
                <p class='proj-name'>${projectList[x]}</p>
                <btn class='delete'>x</btn>`
                projectContainer.append(projectDisplay)
                let projName = projectDisplay.childNodes[1]
                projName.onclick = projectTasks
                let projDelete = projectDisplay.childNodes[3]
                projDelete.onclick = deleteProject
            }
        }
    }