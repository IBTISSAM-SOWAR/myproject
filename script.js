document.getElementById('dashboard').addEventListener('click', showDashboard);
document.getElementById('recipes').addEventListener('click', showRecipes);

function showDashboard(event) {
    event.preventDefault();
    document.getElementById('content').innerHTML = "<h1>Hello World</h1>";
}
function showRecipes(event) {
    event.preventDefault();
    const recipes = [
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },
        { title: 'lorem ipsum', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi', image: 'images/immg.jpg' },

       ];

    let recipeHTML = '<div class="recipe-list">';
    recipes.forEach(recipe => {
        recipeHTML += `
            <div class="recipe-item">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            </div>
        `;
    });
    recipeHTML += '</div>';

    document.getElementById('content').innerHTML = recipeHTML;
}
