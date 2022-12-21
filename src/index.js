/* eslint-disable */
import { json } from 'body-parser';
import './style.css';
import getdata from './module/apisend';

const name = document.getElementById('Name');
const score = document.getElementById('Score');
const submit = document.getElementById('button');

submit.addEventListener('click', () => {
    getdata();
    name.value = '';
    score.value = '';
})
