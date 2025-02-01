document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const ingredientsList = document.getElementsByClassName("ingredients-list");
    const resultOut = document.getElementsByClassName("result-out");
    let ingredients = [];
    
    searchButton.addEventListener("click", () => {
        ingredients.push(searchBar.value);
        resultOut[0].style.opacity = 1;
        searchBar.value = "";
        displayElements();
    });

    function displayElements() {
        ingredientsList[0].innerHTML = "";
        ingredientsList[0].classList.add("horizontal-list");
        ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
            ingredientsList[0].appendChild(li);
        });
    };
});