
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
var r = document.querySelector(':root');

var gotop=document.getElementById('go-top');
gotop.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        gotop.style.display = "block";
    } else {
        gotop.style.display = "none";
    }
}

const themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
        r.style.setProperty('--scroll', '#e6e6e6');
        
    }else{
        document.body.classList.remove('active');
        r.style.setProperty('--scroll', '#333');
    }
}
var typeWriterElement=document.getElementById('typewriter');
const textArray=["$Hey, I'm a Full Stack Developer.","$I love to develop large scale applications."];
function delWriter(text,i,cb){
    if(i>=0){
        typeWriterElement.innerHTML=text.substring(0,i--);
        var rndBack=10+Math.random()*100;
        setTimeout(function(){
            delWriter(text,i,cb);
        },rndBack);}
    else if(typeof cb=='function'){
        setTimeout(cb,500);
    }
};
function typeWriter(text,i,cb){
    if(i<text.length+1){
        typeWriterElement.innerHTML=text.substring(0,i++);
        var rndTyping=250-Math.random()*100;
        setTimeout(function(){
            typeWriter(text,i++,cb)
        },rndTyping);
    }
    else if(i===text.length+1){
        setTimeout(function()
        {delWriter(text,i,cb)},500);
    }
};
function StartWriter(i){
    if(typeof textArray[i]=="undefined"){
        setTimeout(function()
        {StartWriter(0)
        },500);
    }else if(i<textArray[i].length+1){
        typeWriter(textArray[i],0,function() {
            StartWriter(i+1);
        });
    }
};
setTimeout(function(){
    StartWriter(0);
},500);
