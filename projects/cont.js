

function func() {
    var elem = document.getElementsByClassName("education-list")[0];
    if (elem.style.display == 'block') {
        elem.style.display = "none";
        document.querySelector('.education').style.background = "aqua url(./assets/down.svg) no-repeat " + (window.innerWidth <= 640 ? 30 : 15) + "% " + "42%";
    }
    else {
        document.querySelector('.education').style.backgroundImage = "none";
        elem.style.display = 'block';
    }
}

var but = document.getElementsByClassName("block");

function slide() {
    if (but[0].style.display !== 'none') {
        but[0].style.display = "none"
        but[1].style.display = "block";
    }
    else {
        but[1].style.display = "none"
        but[0].style.display = "block";
    }
}
function m() {
    if (window.innerWidth <= 640) {
        if (but[0].style.display !== 'none') el = document.querySelectorAll(".slider .block ul")[0]
        else el = document.querySelectorAll(".slider .block ul")[1];
        if (el.style.display == 'block') el.style.display = "none";
        else {
            el.style.display = 'block';
        }
    }
}

function back() {
    document.location.href = "../../index.html";
}

function mob() {
    if (document.getElementsByTagName('meta')['viewport'].content != 'width=375') {
        document.getElementsByTagName('meta')['viewport'].setAttribute('content', 'width=375');
        document.querySelector('.button1').innerText = "Desktop";
    } else {
        document.getElementsByTagName('meta')['viewport'].setAttribute('content', 'width=1440');
        document.querySelector('.button1').innerText = "Mobile";
    }
}

