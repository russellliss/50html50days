 
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers : {
            'Accept': 'application/json'
        }
    }

    const resp = await fetch('https://icanhazdadjoke.com', config);

    const data = await resp.json();

    jokeEl.innerHTML = data.joke;


}

// function generateJoke() {
//     const config = {
//         headers : {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((resp) => resp.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke;
//         });

// }

