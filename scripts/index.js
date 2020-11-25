const header = document.querySelector('.header');
const burger = document.querySelector('.btn-burger');
const body = document.querySelector('body');
const blackout = document.querySelector('.blackout');

burger.addEventListener('click', () =>{
    openCloseMenu() 
})

blackout.addEventListener('click', () =>{
    openCloseMenu()
})

function openCloseMenu(){
    header.classList.toggle('header--active') 
    body.classList.toggle('locked') 
    blackout.classList.toggle('blackout--active')  
}