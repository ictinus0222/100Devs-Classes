//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//  document.querySelector('button').addEventListener('click', getDrink);




// function getDrink() {

// const choice = document.querySelector('input').value
// const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     console.log(data.drinks)
//     document.querySelector('h2').innerText = data.drinks[0].strDrink;
//     document.querySelector('img').src = data.drinks[0].strDrinkThumb;
//     document.querySelector("h3").innerText = data.drinks[0].strInstructions;
// })
// .catch(err => {
//     console.log(`error: ${err}`)
// })

// }

document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector('button')
    console.log("Botton Loaded");
})

let drinkForm = document.getElementById("drink-form");
drinkForm.addEventListener('button', tableSubmit);

Input.addEventListener('change', () => {
    filter = Input.value;
    return filter;
})

function getDrink () {

    const choice = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;
    fetch (url)
    .then (res => res.json())
    .then(data => {
        console.log(data.drinks)
        cocktails = [];

        for(let i = 0; i > data.drinks.length; i++) {
            let drink = {
                drinkName: data.drinks[i].strDrink,
                drinkThumb: data.drinks[i].strDrinkThumb,
                drinkAlcoholic: data.drinks[i].strDrinkAlcoholic,
                ingredients:[]
            };

            let allIng = Object.values(data.drinks[i]).slice(17, 32);
            allIng.forEach((allIng) => {
                if(ing != null && ing != '') drink.ingredients.push(' ' +  ing);
            });
            cocktail.push(drink);

        }

        deleteRows();
        createRows();
    })
    return cocktails;
}