// main
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let behind = document.getElementById('behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let front = document.getElementById('front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    behind.style.top = value * 0.5 + 'px';
    front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})

// history opne,close
let history1 = document.getElementById('history1');
let portfolio1 = document.getElementById('portfolio1');
let history2 = document.getElementById('history2');
let portfolio2 = document.getElementById('portfolio2');
let history3 = document.getElementById('history3');
let portfolio3 = document.getElementById('portfolio3');
let history4 = document.getElementById('history4');
let portfolio4 = document.getElementById('portfolio4');
let history5 = document.getElementById('history5');
let portfolio5 = document.getElementById('portfolio5');
let history6 = document.getElementById('history6');
let portfolio6 = document.getElementById('portfolio6');
let history7 = document.getElementById('history7');
let portfolio7 = document.getElementById('portfolio7');
let history8 = document.getElementById('history8');
let portfolio8 = document.getElementById('portfolio8');
let history9 = document.getElementById('history9');
let portfolio9 = document.getElementById('portfolio9');

// open
function historyOpen1(){
    history1.style.display = 'block';
    portfolio1.style.marginLeft = '170px';
}
function historyOpen2(){
    history2.style.display = 'block';
    portfolio2.style.marginLeft = '170px';
}
function historyOpen3(){
    history3.style.display = 'block';
    portfolio3.style.marginLeft = '170px';
}
function historyOpen4(){
    history4.style.display = 'block';
    portfolio4.style.marginLeft = '170px';
}
function historyOpen5(){
    history5.style.display = 'block';
    portfolio5.style.marginLeft = '170px';
}
function historyOpen6(){
    history6.style.display = 'block';
    portfolio6.style.marginLeft = '170px';
}
function historyOpen7(){
    history7.style.display = 'block';
    portfolio7.style.marginLeft = '170px';
}
function historyOpen8(){
    history8.style.display = 'block';
    portfolio8.style.marginLeft = '170px';
}
function historyOpen9(){
    history9.style.display = 'block';
    portfolio9.style.marginLeft = '170px';
}

// close
function historyClose1(){
    history1.style.display = 'none';
    portfolio1.style.marginLeft = '-170px';
}
function historyClose2(){
    history2.style.display = 'none';
    portfolio2.style.marginLeft = '-170px';
}
function historyClose3(){
    history3.style.display = 'none';
    portfolio3.style.marginLeft = '-170px';
}
function historyClose4(){
    history4.style.display = 'none';
    portfolio4.style.marginLeft = '-170px';
}
function historyClose5(){
    history5.style.display = 'none';
    portfolio5.style.marginLeft = '-170px';
}
function historyClose6(){
    history6.style.display = 'none';
    portfolio6.style.marginLeft = '-170px';
}
function historyClose7(){
    history7.style.display = 'none';
    portfolio7.style.marginLeft = '-170px';
}
function historyClose8(){
    history8.style.display = 'none';
    portfolio8.style.marginLeft = '-170px';
}
function historyClose9(){
    history9.style.display = 'none';
    portfolio9.style.marginLeft = '-170px';
}