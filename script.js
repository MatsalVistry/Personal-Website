function landingActivate()
{
    document.getElementsByClassName('landing')[0].style.removeProperty('display');;
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function portfolioActivate() 
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.removeProperty('display');
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function qualificationsActivate()
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.removeProperty('display');
    document.getElementsByClassName('services')[0].style.display = 'none';
}

function servicesActivate()
{
    document.getElementsByClassName('landing')[0].style.display = 'none';
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.removeProperty('display');
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
        showHome();  
    }
}

function showAll()
{
    document.getElementsByClassName('landing')[0].style.removeProperty('display');
    document.getElementsByClassName('portfolio')[0].style.removeProperty('display');
    document.getElementsByClassName('qualifications')[0].removeProperty('display');
    document.getElementsByClassName('services')[0].style.removeProperty('display');
}

function showHome()
{
    document.getElementsByClassName('landing')[0].style.removeProperty('display');;
    document.getElementsByClassName('portfolio')[0].style.display = 'none';
    document.getElementsByClassName('qualifications')[0].style.display = 'none';
    document.getElementsByClassName('services')[0].style.display = 'none';
}

window.onload = function()
{
    // showHome();
    // var currentStyle = localStorage.getItem('currentStyle');
    // if (currentStyle)
    // {
    //     document.getElementById('stylesheet').setAttribute('href', currentStyle);
    //     if(currentStyle == 'style.css')
    //     {
    //         showHome();
    //     }
    //     else
    //     {
    //         showAll();
    //     }
    // }
    // else
    // {
    //     document.getElementById('stylesheet').setAttribute('href', 'style.css');
    //     showHome();
    // }
    // document.getElementById('stylesheet').setAttribute('href', 'style2.css');
    showAll();
}