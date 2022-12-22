/* eslint-disable */
import './style.css';

import  getdata  from './module/apireceive';
import  postdata  from './module/apisend';
const show = document.getElementById('show');
const refresh = document.getElementById('Refresh');
const submit = document.getElementById('button');
const name = document.getElementById('Name');
const score = document.getElementById('Score');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NlvX6MvUBPuR3j2CIhZm/scores/';


const display = (data) => {
    show.innerHTML = '';
    if(data.length> 0) {
        data.forEach(element => {
            show.innerHTML += `
            <p class="para"> <span class="left"> ${element.user} </span> <span class="right"> ${element.score} </span></p>
            `
        });
    } else {
        show.innerHTML = `<p class="nodata">There is no data to show! Please add a data</p>`;
    }
}


refresh.addEventListener('click', async () =>{
    const data = await getdata(url)
    display(data)
} )

submit.addEventListener('click', () => {
    postdata(url,{user: name.value, score: score.value});
    name.value = '';
    score.value = '';
})

window.onload = async() => {
    const data = await getdata(url);
    display(data)
}
