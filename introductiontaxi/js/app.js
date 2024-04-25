let menuBtn = document.querySelector('#menu');
let sideBar = document.querySelector('.header .sidebar');

menuBtn.onclick = () => {
     sideBar.classList.toggle('active');
}

let formBtn = document.querySelector('#sign');
let formModal = document.querySelector('.form');

formBtn.onclick = () => {
     formModal.classList.toggle('active');
}

let dealBtn = document.querySelector('#deal');
let dealModal = document.querySelector('.form');

dealBtn.onclick = () => {
     dealModal.classList.toggle('active');
}

let closeBtn = document.querySelector('#close');
let closeModal = document.querySelector('.form');

closeBtn.onclick = () => {
     closeModal.classList.toggle('active');
}