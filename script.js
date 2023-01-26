'use strict';

const box = document.querySelectorAll('.box');
const close = document.querySelectorAll('.close');
const btn = document.querySelectorAll('.btn');
console.log(btn);



for (let i = 0; i < btn.length; i++) 
btn[i].addEventListener('click', function(){
    box[i].classList.remove('hidden');
})

// btn[1].addEventListener('click', function(){
//     console.log('Button clicked');
//     box2.classList.remove('hidden');
// })

// btn[2].addEventListener('click', function(){
//     box3.classList.remove('hidden');
// })

for (let i = 0; i < close.length; i++) 
close[i].addEventListener('click', function(){
    box[i].classList.add('hidden');
})

// close[1].addEventListener('click', function(){
//     box2.classList.add('hidden');
// })

// close[2].addEventListener('click', function(){
//     box3.classList.add('hidden');
// })