/* eslint-disable */

const gameId = 'j8HGYB2wqKAEI3hfuECt'
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const recive = async () => {
    try {
        const response = await fetch(url);
         const data = await response.json();
         console.log(data);
       } catch(error) {
          console.log(error)
         } 
    }

export default recive