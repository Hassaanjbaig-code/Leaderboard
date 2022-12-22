/* eslint-disable */

const Name = document.getElementById('Name');
const Score = document.getElementById('Score');


const postdata = async () => {
    console.log('button working');
    try{
    const respone = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/j8HGYB2wqKAEI3hfuECt/scores',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            user: Name.value,
            score: Score.value,
          },
    })
    const get = await respone.JSON();
    if(!get.ok){
        throw Error(get.statusText)
    }
    console.log(get)
    return get
} catch (error) {
    console.log(error)
    return error
}
}

export default postdata

