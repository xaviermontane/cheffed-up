document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const ingredientsList = document.getElementsByClassName("ingredients-list");
    const resultOut = document.getElementsByClassName("result-out");
    let ingredients = [];
    
    searchButton.addEventListener("click", () => {
        ingredients.push(searchBar.value);
        if (ingredientsList.length > 0) {
            resultOut[0].style.opacity = 1;
            ingredientsList[0].textContent = ingredients.map(ingredient => ingredient.charAt(0).toUpperCase() + ingredient.slice(1)).join(", \n");
        }
        searchBar.value = "";
    });
});