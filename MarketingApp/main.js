var audience = document.getElementById('audience')
var report = document.getElementById('report')
var campaign = document.getElementById('campaign')


audience.addEventListener('click',audienceColorChange)
report.addEventListener('click',reportColorChange)
campaign.addEventListener('click',campaignColorChange)

//audience color change
function audienceColorChange (e){
    e.preventDefault();
    
    e.target.style.mmarginBottom = '25px'
    e.target.style.backgroundColor = 'rgb(145, 96, 236)'
    e.target.style.borderRadius = '25px'
    e.target.style.boxShadow ='0px 2px 12px rgb(145, 96, 236)'
    e.target.style.color = '#fff'

    report.style.backgroundColor = '#fff'
    report.style.color = 'rgb(34, 32, 32)'
    report.style.boxShadow = 'none'

    campaign.style.backgroundColor = '#fff'
    campaign.style.color = 'rgb(34, 32, 32)'
    campaign.style.boxShadow = 'none'
}

// Report color change
function reportColorChange (e){
    e.preventDefault();

    e.target.style.mmarginBottom = '25px'
    e.target.style.backgroundColor = 'rgb(145, 96, 236)'
    e.target.style.borderRadius = '25px'
    e.target.style.boxShadow ='0px 2px 12px rgb(145, 96, 236)'
    e.target.style.color = '#fff'

    audience.style.backgroundColor = '#fff'
    audience.style.color = 'rgb(34, 32, 32)'
    audience.style.boxShadow = 'none'

    campaign.style.backgroundColor = '#fff'
    campaign.style.color = 'rgb(34, 32, 32)'
    campaign.style.boxShadow = 'none'
}


//campaign color change
function campaignColorChange (e){
    e.preventDefault();

    e.target.style.mmarginBottom = '25px'
    e.target.style.backgroundColor = 'rgb(145, 96, 236)'
    e.target.style.borderRadius = '25px'
    e.target.style.boxShadow ='0px 2px 12px rgb(145, 96, 236)'
    e.target.style.color = '#fff'

    audience.style.backgroundColor = '#fff'
    audience.style.color = 'rgb(34, 32, 32)'
    audience.style.boxShadow = 'none'

    report.style.backgroundColor = '#fff'
    report.style.color = 'rgb(34, 32, 32)'
    report.style.boxShadow = 'none'
}

