'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

};

function closeModal () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
    // console.log("Button clicked");
};



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);