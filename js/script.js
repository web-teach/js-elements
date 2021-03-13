'use strict';

const box = document.getElementById('box'),
   btns = document.getElementsByTagName('button'),
   circles = document.getElementsByClassName('circle'),
   wrapper = document.querySelector('.wrapper'),
   hearts = wrapper.querySelectorAll('.heart'),
   oneHeart = wrapper.querySelector('.heart');
/* --------------------------------------- */
console.dir(box);
box.style.backgroundColor = 'orange';
box.style.width = '500px';
box.style.borderRadius = '20px';

box.style.cssText = `box-shadow: #00000080 8px 10px 20px;
   height: 200px;
   width: 400px`;


btns[1].style.width='200px';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(heart => {
   heart.style.backgroundColor = 'black';
});
 