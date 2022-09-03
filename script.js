document.getElementsByClassName('portfolio')[0].style.display = 'none';
document.getElementsByClassName('qualifications')[0].style.display = 'none';
document.getElementsByClassName('services')[0].style.display = 'none';

function landingActivate()
{
    document.getElementsByClassName('landing')[0].style.display = 'block';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function portfolioActivate() 
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'block';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function qualificationsActivate()
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'block';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function servicesActivate()
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'block';
}