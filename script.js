function landingActivate()
{
    if(getStyle() == 'style.css')
    {
        showNoSections();
        activateSection('landing');
    }
}

function portfolioActivate()
{
    if(getStyle() == 'style.css')
    {
        showNoSections();
        activateSection('portfolio');
    }
}

function qualificationsActivate()
{
    if(getStyle() == 'style.css')
    {
        showNoSections();
        activateSection('qualifications');
    }
}

function servicesActivate()
{
    if(getStyle() == 'style.css')
    {
        showNoSections();
        activateSection('services');
    }
}

function showAllSections()
{
    document.getElementsByClassName('landing')[0].style.display = 'flex';
    document.getElementsByClassName('portfolio')[0].style.display = 'flex';
    document.getElementsByClassName('qualifications')[0].style.display = 'flex';
    document.getElementsByClassName('services')[0].style.display = 'flex';
}

function showNoSections()
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function activateSection(section)
{
    document.getElementsByClassName(section)[0].style.display = 'block';
    console.log("scrolling");
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
        showAllSections();
    }
    else
    {
        css.setAttribute('href', 'style.css');
        localStorage.setItem('currentStyle', 'style.css');
        landingActivate();  
    }
}

function recoverStyle()
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
            showAllSections();
        }
    }
    else
    {
        document.getElementById('stylesheet').setAttribute('href', 'style.css');
        landingActivate();
    }
}

window.onload = function()
{
    recoverStyle();
}