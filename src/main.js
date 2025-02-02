document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const popularIngredients = Array.from(document.getElementsByName("popular-ingredient"));
    const ingredientsList = document.getElementsByClassName("ingredients-list");
    const resultOut = document.getElementsByClassName("result-out");
    const controlButton = document.getElementsByClassName("control-btn");
    let ingredients = [];
    
    searchButton.addEventListener("click", () => {
        ingredients.push(searchBar.value);
        searchBar.value = "";
        displayElements();
    });

    popularIngredients.forEach(ingredient => {
        ingredient.addEventListener("click", (e) => {
            const value = e.target.value;
            e.target.checked ? ingredients.push(value) : ingredients = ingredients.filter(ingredient => ingredient !== value);
            displayElements();
        });
    });

    Array.from(controlButton).forEach(button => {
        button.addEventListener("click", (e) => {
            if (e.target.textContent == "Clear") {
                ingredients = [];
                popularIngredients.forEach(ingredient => {
                    ingredient.checked = false;
                });
            } if (e.target.textContent == "Random") {
                pass;
            }
            displayElements();
        });
    });

    function displayElements() {
        ingredientsList[0].innerHTML = "";
        ingredientsList[0].classList.add("horizontal-list");
        resultOut[0].style.opacity = ingredients.length > 0 ? 1 : 0;
        ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
            ingredientsList[0].appendChild(li);
        });
    };
});