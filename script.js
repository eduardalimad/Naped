'use strict'

const attr1 = document.currentScript.getAttribute('data-attr1');
const attr2 = document.currentScript.getAttribute('data-attr2');
const attr3 = document.currentScript.getAttribute('data-attr3');
const attr4 = document.currentScript.getAttribute('data-attr4');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#attr1').innerHTML = attr1;
    document.querySelector('#attr2').innerHTML = attr2;
    document.querySelector('#attr3').innerHTML = attr3;
    document.querySelector('#attr4').innerHTML = attr4;
});

