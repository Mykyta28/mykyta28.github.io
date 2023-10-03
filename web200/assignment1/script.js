// here I made the modal window with my info

'use strict'

const modalWindow = document.querySelector('.modal-window');// this is my modal window
const overlay = document.querySelector('.overlay');// this is my background when you ope the modal window its active
const btnClose = document.querySelector('.close-modal-window');// this is close modal window btn
const btnShow = document.querySelector('.show-modal-window');// this is show modal btn

// I broke it down into the functions

// here the function that close the modal window
const closeModalWindow = () => {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

// here the function that shows the modal window
const showModalWindow = () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// here is the all events 
btnShow.addEventListener('click', showModalWindow);

btnClose.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

// here I'm produce closing by clicking Esc
document.addEventListener('keydown', (e) => {
    if(e.key === "Escape" && !modalWindow.classList.contains('hidden')){
        closeModalWindow();
    }
})

// here my another 3 outputs

// document.write("Mykyta Semenii WEB 200 Assignment 1");
// console.log("Mykyta Semenii WEB 200 Assignment 1");
// alert("Mykyta Semenii WEB 200 Assignment 1");