let BANNER = document.getElementById('banner')
let NAV = document.getElementById('nav')
let BUTTON = document.getElementById('send')
let TEXTAREA = document.getElementById('message')
let LINK = document.getElementById('link')
let MENU = document.getElementById('menu')

let NAVBTNS = document.getElementsByClassName('navbtn')

TEXTAREA.oninput = () => {
    LINK.href = 'mailto:shelost.off@gmail.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here'
    console.log('yo')
}

MENU.onclick = () => NAV.classList.add('active')


for (let i=0; i<NAVBTNS.length; i++){
    let navbtn = NAVBTNS[i]

    navbtn.onclick = () => {
        NAV.classList.remove('active')
    }
}

let loop = () => {

    if (window.innerWidth<800){

    }

    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)