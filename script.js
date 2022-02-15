let BANNER = document.getElementById('banner')
let NAV = document.getElementById('nav')
let BUTTON = document.getElementById('send')
let TEXTAREA = document.getElementById('message')
let LINK = document.getElementById('link')

TEXTAREA.oninput = () => {
    LINK.href = 'mailto:shelost.off@gmail.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here'
    console.log('yo')
}