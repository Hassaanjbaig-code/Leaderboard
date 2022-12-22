/* eslint-disable */
import './style.css';

import  getdata  from './module/apireceive';
import  postdata  from './module/apisend';
const Show = document.getElementById('show');
const Refresh = document.getElementById('Refresh');
const submit = document.getElementById('button');
const Name = document.getElementById('Name');
const Score = document.getElementById('Score');


Refresh.addEventListener('click', async () =>{
    const data = await getdata()
    data.forEach(element => {
        Show.innerHTML += `
        <p class="para"> <span class="left"> ${element.name} </span> <span class="right"> ${element.score} </span></p>
        `
    });
} )

submit.addEventListener('click', () => {
    console.log("worki")
    postdata();
    Name.value = '';
    Score.value = '';
})
