// const delayedColor = function (delay, color) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             document.body.style.backgroundcolor = color;
//             resolve();
//         }, delay);
//     })

// }

// const color = async function () {
//     await delayedColor(1000, `red`);
//     console.log(`hello  !!`)
// }

// fetch("http swapi.dev/api/planets/1/")
//     .then((res) => {
//         console.log(`Resolved`);
//         return res.json
//     })
//     .then((data) => {
//         console.log(data);
//         fetch("http swapi.dev/api/planets/2/")
//     })
//     .then((res) => {
//         console.log("2nd resolved")
//     })
//     .catch((e) => {
//         console.log(`error` + e)
//     })

//     const starWarPpl=async()=>{
//         const res= await fetch("http swapi.dev/api/planets/1/");
//         const data= await res.json();
//         console.log(data);
//     }
// const getData = async () => {
//     const data = await axios.get(`http swapi.dev/api/planets/1/`)
//     console.log(`success`)
//     console.log(data.data)

// }
let btn = document.querySelector(`button`)
let ul = document.querySelector(`ul`);

const getDadJokes = async () => {
    const config = { headers: { Accept: `application/json` } }
    const res = await axios.get(`https://icanhazdadjoke.com/`, config)
    return res.data.joke;
}


const getJokes = async () => {
    let jokeText = await getDadJokes();
    let newLI = document.createElement(`li`);
    newLI.innerText = jokeText;
    ul.append(newLI)
}


btn.addEventListener(`click`, getJokes);
