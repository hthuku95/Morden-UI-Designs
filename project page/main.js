var icon_avatar = document.getElementsByClassName('icon-avatar')

for (var i =0; i< icon_avatar.length; i++){
    let icon = icon_avatar[i].nextElementSibling.textContent[0]
    icon_avatar[i].innerHTML = "<h1></h1>"
    console.log(icon)
    let x = icon_avatar[i].children[0]
    //console.log(x)
    x.textContent = icon
}