import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';
import './css/styles.css';
import './css/contact.css';
// import './css/loader.css';
import './parallax/parallax.js';
import './parallax/parallax.css';

//  Nav Bar scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    } else {
    document.getElementById("navbar").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
}

//Cursor

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`  
});

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    });
})