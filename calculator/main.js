//buttons
var buttons = document.getElementsByClassName('btn')
var clear_button = document.getElementById('clear-button')
var compute_button = document.getElementById('compute-button')

//Screen
var question_screen = document.getElementById('question')
var answer_screen = document.getElementById('answer')

//Getting the values from the buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',getButtonInput)
}


function getButtonInput(e){
    e.preventDefault();

    var button_value = e.target.textContent
    console.log(button_value)

    //Adding the values to the screen

    question_screen.innerHTML = button_value
}

//clearing items on the screen 
clear_button.addEventListener('click',clearScreenItems)

function clearScreenItems(e){
    e.preventDefault();

    question_screen.innerHTML = '';
    answer_screen.innerHTML = '';
}

//print answer on the screen
compute_button.addEventListener('click',printAnswer)

function printAnswer(e){
    e.preventDefault();

    var ans = question_screen.textContent

    answer_screen.innerHTML = ans
}