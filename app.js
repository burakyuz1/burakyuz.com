window.onload = (function (e) {

    $('.main-page').addClass('animate-content');
    $('#main-page').css("color", "#04b4e0");
})

$('#main-page').click(function (e) {

    $('.main-page').css("display", "block").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.main-page').addClass('animate-content');
    $('#main-page').css("color", "#04b4e0");
    $('#resume').css("color", "#ccc");
    $('#contact').css("color", "#ccc");
    $('#about-me').css("color", "#ccc");

    e.preventDefault();
})

$('#resume').click(function (e) {

    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "block").removeClass('animate-content');
    $('.resume').addClass('animate-content');
    $('#resume').css("color", "#04b4e0");
    $('#main-page').css("color", "#ccc");
    $('#contact').css("color", "#ccc");
    $('#about-me').css("color", "#ccc");

    e.preventDefault();
})


$('#contact').click(function (e) {
    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "block").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.contact').addClass('animate-content');
    $('#contact').css("color", "#04b4e0");
    $('#resume').css("color", "#ccc");
    $('#main-page').css("color", "#ccc");
    $('#about-me').css("color", "#ccc");

    e.preventDefault();
})

$('#about-me').click(function (e) {
    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "block").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.about-me').addClass('animate-content');
    $('#about-me').css("color", "#04b4e0");
    $('#resume').css("color", "#ccc");
    $('#contact').css("color", "#ccc");
    $('#main-page').css("color", "#ccc");


    e.preventDefault();
})


/*MOBILE */

$('#main-page-mobile').click(function (e) {

    $('.main-page').css("display", "block").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.main-page').addClass('animate-content');
    $('#main-page-mobile').css("color", "#04b4e0");
    $('#resume-mobile').css("color", "#ccc");
    $('#contact-mobile').css("color", "#ccc");
    $('#about-me-mobile').css("color", "#ccc");

    e.preventDefault();
})

$('#resume-mobile').click(function (e) {

    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "block").removeClass('animate-content');
    $('.resume').addClass('animate-content');
    $('#resume-mobile').css("color", "#04b4e0");
    $('#main-page-mobile').css("color", "#ccc");
    $('#contact-mobile').css("color", "#ccc");
    $('#about-me-mobile').css("color", "#ccc");

    e.preventDefault();
})


$('#contact-mobile').click(function (e) {
    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "block").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.contact').addClass('animate-content');
    $('#contact-mobile').css("color", "#04b4e0");
    $('#resume-mobile').css("color", "#ccc");
    $('#main-page-mobile').css("color", "#ccc");
    $('#about-me-mobile').css("color", "#ccc");

    e.preventDefault();
})

$('#about-me-mobile').click(function (e) {
    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "block").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.about-me').addClass('animate-content');
    $('#about-me-mobile').css("color", "#04b4e0");
    $('#resume-mobile').css("color", "#ccc");
    $('#contact-mobile').css("color", "#ccc");
    $('#main-page-mobile').css("color", "#ccc");


    e.preventDefault();
})




/*MOBILE  END*/





const allElements = document.getElementsByClassName('content');
const allRightNavItems = $('.right-nav-icons');
let arr = Array.prototype.slice.call(allElements);
let arrNavItems = Array.prototype.slice.call(allRightNavItems);


$('#left-arrow').click(function (e) {

    let element;
    for (let i = 0; i < allElements.length; i++)
        if (allElements[i].className.includes('animate-content'))
            element = allElements[i];
    let index = arr.indexOf(element);
    element.style.display = "none";
    element.classList.remove("animate-content");

    arrNavItems[index].style.color = "#ccc";
    if (index == 0)
        index = arr.length;

    arr[index - 1].style.display = "block";
    arr[index - 1].className += " animate-content";
    arrNavItems[index - 1].style.color = "#04b4e0";


    e.preventDefault();
})

$('#right-arrow').click(function (e) {

    let element;
    for (let i = 0; i < allElements.length; i++)
        if (allElements[i].className.includes('animate-content'))
            element = allElements[i];


    let index = arr.indexOf(element);


    element.style.display = "none";
    element.classList.remove("animate-content");
    arrNavItems[index].style.color = "#ccc";

    if (index == 3)
        index = -1;
    arr[index + 1].style.display = "block";
    arr[index + 1].className += " animate-content";


    arrNavItems[index + 1].style.color = "#04b4e0";

    e.preventDefault();

})



$('.contact-control').focus(function (e) {
    e.target.nextElementSibling.style.left = "3px";
    e.target.nextElementSibling.style.top = "-22px";
    e.target.nextElementSibling.style.color = "#04b4e0";
})

$('.contact-control').focusout(function (e) {
    if (e.target.value.trim() === "") {
        e.target.nextElementSibling.style.left = "14px";
        e.target.nextElementSibling.style.top = "11px";
        e.target.nextElementSibling.style.color = "#a5a6a7";
    }
})

$('.menu-toggle').click(function (e) {

    if ($('.menu-toggle').children().eq(1).css('opacity') == 1) {
        $('.menu-toggle').addClass(' open-toggle');
        $('.mobile-right-panel').css({
            "visibility": "visible",
            "opacity": "1",
          
        });

    }
    else {

        $('.menu-toggle').removeClass(' open-toggle');
        $('.mobile-right-panel').css({

            "opacity": "0",
            "visibility": "hidden",
          


        });

    




    }

})