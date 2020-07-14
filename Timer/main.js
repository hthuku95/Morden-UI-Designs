var m_default = document.getElementById('mdefault')
var m_dark = document.getElementById('mdark')
var mbody = document.getElementById('mbody')

var days = document.getElementById('days')
var numdays = document.getElementById('num-days')
var worddays = document.getElementById('word-days')

m_default.addEventListener('click',setToDefaultTheme)
m_dark.addEventListener('click',setToDarkTheme)


//Light theme
function setToDefaultTheme(e) {
    e.preventDefault();

    e.target.style.backgroundColor = 'rgb(76, 128, 187)'

    m_dark.style.backgroundColor = '#fff'
    mbody.style.backgroundColor = '#eee'

    days.style.backgroundColor = 'rgb(36, 30, 87)'
    days.style.boxShadow = '0px 1px 6px hsl(246, 49%, 23%)'
    numdays.style.color = '#fff'
    numdays.style.border = 'solid 4px rgb(31, 25, 85)'
    worddays.style.color = '#fff'
}

//Dark theme
function setToDarkTheme(e){
    e.preventDefault();

    e.target.style.backgroundColor = 'rgb(76, 128, 187)'

    m_default.style.backgroundColor = '#fff'
    mbody.style.backgroundColor = 'rgb(31, 25, 85)'
    days.style.backgroundColor = '#fff'
    days.style.boxShadow = '0px 1px 6px #fff'
    numdays.style.color = '#000'
    worddays.style.color = '#000'
    numdays.style.border = 'none'
    numdays.style.boxShadow = '0px 1px 6px hsl(246, 49%, 23%)'
}

