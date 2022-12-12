const burmenu = document.querySelector('.mobile__active');
const burclose = document.querySelector('.mobile__close');
const menuska = document.querySelector('#mobileVers');
const kairat = document.querySelector('.kairat');
const kairat1 = document.querySelector('.kairat1');
const kairat2 = document.querySelector('.kairat2');
const kairat3 = document.querySelector('.kairat3');
const kairat4 = document.querySelector('.kairat4');
burmenu.addEventListener('click', function(el)
{
    el.preventDefault();
    burmenu.classList.toggle('hide');
    burclose.classList.toggle('hide');
    menuska.classList.toggle('dont__show');
});
burclose.addEventListener('click', (el) =>
{
    el.preventDefault();
    burmenu.classList.toggle('hide');
    burclose.classList.toggle('hide');
    menuska.classList.toggle('dont__show');
});
kairat.addEventListener('click', () =>
{
    burmenu.classList.toggle('hide');
    burclose.classList.toggle('hide');
    menuska.classList.toggle('dont__show');
})
kairat1.addEventListener('click', () =>
{
    burmenu.classList.toggle('hide');
    burclose.classList.toggle('hide');
    menuska.classList.toggle('dont__show');
})
kairat2.addEventListener('click', () =>
{
    burmenu.classList.toggle('hide');
    burclose.classList.toggle('hide');
    menuska.classList.toggle('dont__show');
})
kairat3.addEventListener('click', () =>
{
    burmenu.classList.toggle('hide');
    burclose.classList.toggle('hide');
    menuska.classList.toggle('dont__show');
})
kairat4.addEventListener('click', () =>
{
    burmenu.classList.toggle('hide');
    burclose.classList.toggle('hide');
    menuska.classList.toggle('dont__show');
})

// fixed
window.onscroll = function showHeader()
{
    var header = document.querySelector('#headerJs');
    var introH = document.getElementById('introJs').clientHeight;
    if (window.pageYOffset > introH) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

// muzic

const press = document.querySelector('.music');
const radio = document.querySelector('#audio');
var a = 1;
press.addEventListener('click', (el) =>
{
    a++;
    el.preventDefault();
    if (a % 2 == 0) {
        radio.play();
        radi.pause();
        radioto.pause();
    }
    else {
        radio.pause();
    }

});
const pres = document.querySelector('.tom');
const radi = document.querySelector('#audio1');
var b = 1;
pres.addEventListener('click', (el) =>
{
    b++;
    el.preventDefault();
    if (b % 2 == 0) {
        radi.play();
        radio.pause();
        radioto.pause();
    }
    else {
        radi.pause();
    }

});
const presser = document.querySelector('.attention');
const radioto = document.querySelector('#audio2');
var c = 1;
presser.addEventListener('click', (el) =>
{
    c++;
    el.preventDefault();
    if (c % 2 == 0) {
        radioto.play();
        radio.pause();
        radi.pause();
    }
    else {
        radioto.pause();
    }

});

// scroll

$("[data-scroll]").on("click", function (event)
{
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset -90
    }, 900)
})

