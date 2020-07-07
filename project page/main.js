var icon_avatar = document.getElementsByClassName('icon-avatar')

var inputFormField = document.getElementById('projectform')
var addProject = document.getElementById('projectbutton')
addProject.addEventListener('click',submitProject)
 
function submitProject(e){
    e.preventDefault()

    //get the value of the form field
    var newProject = inputFormField.value

    //creating The new Elements
    var list = document.createElement('li')
    var parentDiv = document.createElement('div')
    var childDiv = document.createElement('div')
    var projectTitle = document.createElement('p')
    var container = document.getElementById('container')
    var projectList = document.getElementById('project-list')
    //Assigning class Names
    childDiv.className = "iconAvatar"
    projectTitle.className = "projectTitle"

    //Asigning the project title to the Element
    list.textContent = newProject
    projectTitle.textContent = newProject
    parentDiv.appendChild(childDiv)
    parentDiv.appendChild(projectTitle)
    container.appendChild(parentDiv)
    projectList.appendChild(list)

    let icon = newProject[0]
    childDiv.innerHTML = '<h1>'+icon+'</h1>'
}



for (var i =0; i< icon_avatar.length; i++){
    let icon = icon_avatar[i].nextElementSibling.textContent[0]
    icon_avatar[i].innerHTML = "<h1>"+icon+"</h1>"
    console.log(icon)
}

