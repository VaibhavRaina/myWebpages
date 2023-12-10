const form = document.querySelector(`#searchForm`);
const input = document.querySelector(`#textInput`);
let body = document.querySelector(`body`)
form.addEventListener(`submit`, async function (e) {
    e.preventDefault();
    const searchTerm = input.value;
    const config = { params: { q: searchTerm }, }
    const res = await axios.get(` https://api.tvmaze.com/search/shows`, config);
    displayImages(res.data);

})

const displayImages = (shows) => {
    for (let i = 0; i <= shows.length; i++) {
        if (shows[i].show.image) {
            let img = document.createElement(`img`);
            img.src = shows[i].show.image.medium;
            body.append(img)
            form.reset();
        }


    }
}

// const displayImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             let img = document.createElement(`img`);
//             img.src = result.show.image.medium;
//             body.append(img)
//             form.reset();
//         }


//     }
// }