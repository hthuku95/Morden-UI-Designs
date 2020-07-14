var btn_one = document.getElementById('btnOne')
var btn_two = document.getElementById('btnTwo')
var starter = document.getElementById('pricingStart')
var pro = document.getElementById('pricingPro')

var plan = document.getElementsByClassName('plan')

btn_one.addEventListener('click',monthlyBill)

btn_two.addEventListener('click',anualBill)


for(var i = 0; i < plan.length; i++){
    plan[i].addEventListener('click',setPlan)
}

var header = document.createElement('h3')
var pricing = document.createElement('h1')

//monthly bill
function monthlyBill(e){
    e.preventDefault();

    e.target.style.backgroundColor =' #fff'
    e.target.style.boxShadow = '0px 1px 4px #fff'
    btn_two.style.backgroundColor = 'rgb(224, 86, 86)'
    btn_two.style.boxShadow = 'none'

    starter.textContent = '$19/month'
    pro.textContent = '$99/month'
}



//annual bill
function anualBill(e){
    e.preventDefault();

    e.target.style.backgroundColor =' #fff'
    e.target.style.boxShadow = '0px 1px 4px #fff'
    btn_one.style.backgroundColor = 'rgb(224, 86, 86)'
    btn_one.style.boxShadow = 'none'

    starter.textContent = '$199/month'
    pro.textContent = '$999/month'

}

//Set plan

function setPlan(e) {
    e.preventDefault()
    e.target.style.border = 'none'
    e.target.style.backgroundColor = 'rgb(224, 86, 86)'
    e.target.style.boxShadow = '0px 1px 4px rgb(224, 86, 86)'
}