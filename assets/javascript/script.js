function nav_fixed(){
    if(scrollY>100){
        document.querySelector('nav').classList.add('nav_fixed');
    }
    else{
        document.querySelector('nav').classList.remove('nav_fixed');
    }
}
window.addEventListener('scroll',nav_fixed);

function aparecerImagem(){
    document.getElementById('texto_banner').classList.add('banner_efeito');
}
function aparecerLi(){
    document.querySelector('.e').classList.add('efeito');
    
}

setTimeout(() => {
    aparecerImagem();
}, 500);
setTimeout(() => {
    aparecerLi();
}, 1000);

function backTop(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    });
}
window.addEventListener('scroll',()=>{
    if(scrollY==0){
        document.querySelector('.topo').style='display:none';
    }
    else{
        document.querySelector('.topo').style='display:flex';
    }
})