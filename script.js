function landingActivate() // navbar link for home
{
    if(getStyle() == 'style.css')
    {
        setAllNone();
        activateSection('landing');
    }
}

function portfolioActivate() // navbar link for portfolio
{
    if(getStyle() == 'style.css')
    {
        setAllNone();
        activateSection('portfolio');
    }
}

function qualificationsActivate() // navbar link for qualifications
{
    if(getStyle() == 'style.css')
    {
        setAllNone();
        activateSection('qualifications');
    }
}

function servicesActivate() // navbar link for services
{
    if(getStyle() == 'style.css')
    {
        setAllNone();
        activateSection('services');
    }
}

function showAll() // shows all of the sections
{
    document.getElementsByClassName('landing')[0].style.display = 'flex';
    document.getElementsByClassName('portfolio')[0].style.display = 'flex';
    document.getElementsByClassName('qualifications')[0].style.display = 'flex';
    document.getElementsByClassName('services')[0].style.display = 'flex';
}

function setAllNone() // shows none of the sections
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function activateSection(section) // shows the specified section
{
    document.getElementsByClassName(section)[0].style.display = 'block';
}

function getStyle()
{
    var css = document.getElementById('stylesheet');
    return css.getAttribute('href');
}

function themeSwap()
{
    var css = document.getElementById('stylesheet');
    currentstyle = css.getAttribute('href');

    if(currentstyle == 'style.css')
    {
        css.setAttribute('href', 'style2.css');
        localStorage.setItem('currentStyle', 'style2.css');
        showAll();
    }
    else
    {
        css.setAttribute('href', 'style.css');
        localStorage.setItem('currentStyle', 'style.css');
        landingActivate();  
    }
}

window.onload = function()
{
    var currentStyle = localStorage.getItem('currentStyle');
    if (currentStyle)
    {
        console.log(currentStyle);
        document.getElementById('stylesheet').setAttribute('href', currentStyle);
        if(currentStyle == 'style.css')
        {
            landingActivate();
        }
        else
        {
            showAll();
        }
    }
    else
    {
        document.getElementById('stylesheet').setAttribute('href', 'style.css');
        landingActivate();
    }
}