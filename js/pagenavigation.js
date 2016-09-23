/**
 * Created by Vincent on 9/23/2016.
 */
// Not used because we need 4 html pages
function displayHome()
{
    document.getElementById('home').style.display = "block"; // show home div
    document.getElementById('merch').style.display = "none"; // hide merch div
    document.getElementById('tour').style.display = "none"; // hide tour div
    document.getElementById('contact').style.display = "none"; // hide contact div
    document.getElementById('homelink').classList.add('active'); //add active class to link
    document.getElementById('merchlink').classList.remove('active'); //remove active class from link
    document.getElementById('tourlink').classList.remove('active'); //remove active class from link
    document.getElementById('contactlink').classList.remove('active'); //remove active class from link
}
function displayMerch()
{
    document.getElementById('home').style.display = "none"; // hide home div
    document.getElementById('merch').style.display = "block"; // show merch div
    document.getElementById('tour').style.display = "none"; // hide tour div
    document.getElementById('contact').style.display = "none"; //remove active class from link
    document.getElementById('homelink').classList.remove('active'); //add active class to link
    document.getElementById('merchlink').classList.add('active'); //add active class to link
    document.getElementById('tourlink').classList.remove('active'); //remove active class from link
    document.getElementById('contactlink').classList.remove('active'); //remove active class from link
}
function displayTour()
{
    document.getElementById('home').style.display = "none"; // hide home div
    document.getElementById('merch').style.display = "none"; // hide merch div
    document.getElementById('tour').style.display = "block"; // show tour div
    document.getElementById('contact').style.display = "none"; // hide contact div
    document.getElementById('homelink').classList.remove('active'); //remove active class from link
    document.getElementById('merchlink').classList.remove('active'); //remove active class from link
    document.getElementById('tourlink').classList.add('active'); //add active class to link
    document.getElementById('contactlink').classList.remove('active'); //remove active class from link
}
function displayContact()
{
    document.getElementById('home').style.display = "none"; // hide home div
    document.getElementById('merch').style.display = "none"; // hide merch div
    document.getElementById('tour').style.display = "none"; // hide tour div
    document.getElementById('contact').style.display = "block"; // show contact div
    document.getElementById('homelink').classList.remove('active'); //remove active class from link
    document.getElementById('merchlink').classList.remove('active'); //remove active class from link
    document.getElementById('tourlink').classList.remove('active'); //remove active class from link
    document.getElementById('contactlink').classList.add('active'); //add active class to link
}