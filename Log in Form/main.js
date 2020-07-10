var accounts = [
    {
        username:'harry',
        password:'1234abcd'
    },
    {
        username:'mark',
        password:'1234efgh'
    },
    {
        username:'felix',
        password:'1234ijkl'
    },
    {
        username:'issac',
        password:'1234mnop'
    },
    {
        username:'clinton',
        password:'1234qrst'
    },
    {
        username:'collins',
        password:'1234uvwx'
    }
]
console.log(accounts[0].username)

//Login details
var user_name = document.getElementById('username')
var user_password = document.getElementById('password')
var login_button = document.getElementById('login')

login_button.addEventListener('click',verifyUser)

function verifyUser(e){
    e.preventDefault();

    //getting the values from the input fields
    let v_password = user_password.value
    let v_username = user_name.value

    var secondForm = document.getElementById('form-2')
    //Searching for items in the array
    for (let i = 0; i < accounts.length; i++) {
        if (v_password === accounts[i].password && v_username === accounts[i].username) {
            console.log('Login Succesfull')
            var infodiv = document.createElement('div')
            infodiv.className = 'infoDiv messages'
            infodiv.textContent = 'login succesfull'

            //appending elements
            secondForm.insertBefore(infodiv, secondForm.childNodes[2]);
            break;
        } else {
            console.log('incorrect username or password')
            var failiureDiv = document.createElement('div')
            failiureDiv.className = 'failiureDiv messages danger'
            failiureDiv.textContent = 'incorrect username or password'
            //Append elements
            secondForm.insertBefore(failiureDiv,secondForm.childNodes[2])
            console.log(secondForm.childNodes.item)
        }
    }
    console.log(secondForm.childNodes[2])
}
//Verification variables
var email_click = document.getElementById('email')
var sms_click = document.getElementById('sms')
var sms_conf = document.getElementById('smsconfirmation')
var email_conf = document.getElementById('radioconfirmation')
var verify_button = document.getElementById('verifybutton')

email_click.addEventListener('click',emailClick)
sms_click.addEventListener('click',smsClick)

//Verify button functionality
verify_button.addEventListener('click',verification)
var info_ver = document.getElementById('infover')


function verification(e){
    e.preventDefault()

    var firstForm = document.getElementById('form-1')
    var message = document.getElementById('infover')

    if (e.target.textContent =='Send Email') {        
        message.innerHTML = 'an email has been sent to your email address'
        message.className = 'infoVer messages'

    } else  if (e.target.textContent == 'Send SMS'){
        message.innerHTML = 'an sms has been sent to your phone'
        message.className = 'infoVer messages'

    } else {
        message.innerHTML = 'please select a verification method'
        message.className = 'infoVer messages danger'
    }
    console.log(e.target.textContent)
}

//verifying via Email..function
function emailClick(e){
    email_conf.textContent = 'We will send you a verification code on your Email '
    verify_button.textContent = 'Send Email'
    sms_conf.innerHTML = '';
}

//verifying via sms..function
function smsClick(e){
    sms_conf.textContent = 'We will send a code to your mobile phone that you will enter to verify '
    verify_button.textContent = 'Send SMS'
    email_conf.innerHTML = '';
}

