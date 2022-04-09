

document.querySelector("button").addEventListener('click',getDrink)


function getDrink(){
   let drink =  document.querySelector('input').value



fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res=> res.json()) 
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector("h2").innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector("h3").innerText = data.drinks[0].strInstructions
        document.querySelector(".ingredient1").innerText = data.drinks[0].strIngredient1 
        document.querySelector(".ingredient2").innerText = data.drinks[0].strIngredient2
        document.querySelector(".ingredient3").innerText = data.drinks[0].strIngredient3
        document.querySelector(".ingredient4").innerText = data.drinks[0].strIngredient4
        document.querySelector(".ingredient5").innerText = data.drinks[0].strIngredient5
        document.querySelector(".ingredient6").innerText = data.drinks[0].strIngredient6
        document.querySelector(".ingredient7").innerText = data.drinks[0].strIngredient7
        document.querySelector(".ingredient8").innerText = data.drinks[0].strIngredient8
        document.querySelector(".ingredient9").innerText = data.drinks[0].strIngredient9
        document.querySelector(".ingredient10").innerText = data.drinks[0].strIngredient10
        document.querySelector(".ingredient11").innerText = data.drinks[0].strIngredient11
        document.querySelector(".ingredient12").innerText = data.drinks[0].strIngredient12
        document.querySelector(".ingredient13").innerText = data.drinks[0].strIngredient13
        document.querySelector(".ingredient14").innerText = data.drinks[0].strIngredient14
        document.querySelector(".ingredient15").innerText = data.drinks[0].strIngredient15
       })
    .catch(err => {
        console.log(`error ${err}`)
    })

}