interface IRecipe {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags:string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

type RecipesResponse = {
    recipes: IRecipe[];
};

let recipesDiv:HTMLDivElement = document.createElement('div');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((recipesObj: RecipesResponse) => {
        let {recipes} = recipesObj;

        for (const recipe of recipes) {
            let recipeConteiner: HTMLDivElement = document.createElement('div');
            recipeConteiner.classList.add('recipe');
            let recipeInfo: HTMLDivElement = document.createElement('div');
            recipeInfo.classList.add('recipe-info');
            recipeInfo.innerText = `
                    Name: ${recipe.name},
                    Prep Time (Minutes): ${recipe.prepTimeMinutes},
                    Cook Time (Minutes): ${recipe.cookTimeMinutes},
                    Servings : ${recipe.servings},
                    Difficulty : ${recipe.difficulty},
                    Cuisine: ${recipe.cuisine},
                    Calories Per Serving: ${recipe.caloriesPerServing},
                    Tags: ${recipe.tags},
                    UserId: ${recipe.userId},
                    Rating: ${recipe.rating},
                    ReviewCount: ${recipe.reviewCount},
                    Meal Type: ${recipe.mealType},
                `
            let ingredientsDiv: HTMLDivElement = document.createElement('div');
            ingredientsDiv.classList.add('ingredients')
            let h3Ingredients:HTMLHeadingElement = document.createElement('h3');
            h3Ingredients.innerText = 'Ingredients'
            let ulIngredients:HTMLUListElement = document.createElement('ul')
            ulIngredients.classList.add('ingredients');
            for (const ingredient of recipe.ingredients) {
                let li: HTMLLIElement = document.createElement('li');
                li.innerText = ingredient;

                ulIngredients.appendChild(li);
            }

            let instructionsDiv: HTMLDivElement = document.createElement('div');
            instructionsDiv.classList.add('instructions');
            let h3Instructions:HTMLHeadingElement = document.createElement('h3');
            h3Instructions.innerText = 'Instructions';
            let ulInstructions:HTMLUListElement = document.createElement('ul')
            ulInstructions.classList.add('instructions');
            for (const instruction of recipe.instructions) {
                let li: HTMLLIElement = document.createElement('li')
                li.innerText = instruction;

                ulInstructions.appendChild(li);
            }

            let img:HTMLImageElement = document.createElement('img')
            img.src = recipe.image;

            instructionsDiv.append(h3Instructions, ulInstructions)
            ingredientsDiv.append(h3Ingredients, ulIngredients);
            recipeConteiner.append(img, recipeInfo, ingredientsDiv, instructionsDiv);
            recipesDiv.appendChild(recipeConteiner);
        }

    });