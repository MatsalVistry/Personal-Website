document.getElementsByClassName('portfolio')[0].style.display = 'none';

function portfolioActivate() 
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'block';
}

function landingActivate()
{
    document.getElementsByClassName('landing')[0].style.display = 'block';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
}