/* eslint-disable */

const gameId = 'j8HGYB2wqKAEI3hfuECt'
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
const name = document.getElementById('Name');
const score = document.getElementById('Score');
const submit = document.getElementById('button');

const getdata = async () => {
    const respone = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: name.value,
            score: score.value,
          }),
    })
    const get = await respone.JSON()
}

export default getdata()
