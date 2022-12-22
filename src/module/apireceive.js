/* eslint-disable */
// {
//     "result": "Game with ID: YxqQ1a8VJ6UXsMwlOqrv added."
//   }

const gameId = 'j8HGYB2wqKAEI3hfuECt'
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/j8HGYB2wqKAEI3hfuECt/score`;

const getdata = async () =>{
    try {
        const respone = await fetch(url);
        if (!respone.ok) {
            throw Error(respone.statusText)
        }
        const data = await respone.json();
        console.log(data);
        return data.result;

    } catch (error) {
        console.log(error);
        return error
    }
}

export default getdata