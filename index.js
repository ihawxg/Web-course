

let allRecipes = document.getElementById("allRecipes");
let favouriteRecipes = document.getElementById("favouriteRecipes");
let createRecipe = document.getElementById("createRecipe");
let myPage = document.getElementById("myPage");
let errorPage = document.getElementById("errorPage");
let searchBar = document.getElementById("search-bar");
let currentProfileName = document.getElementById("currentProfileName");
let currentProfileAge = document.getElementById("currentProfileAge");
let currentProfileAdress = document.getElementById("currentProfileAdress");

function hashHandle() {

    let hash = location.hash.slice(1);

    switch (hash) {
        case "allRecipes":
            allRecipes.style.display = "flex";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "none";
            myPage.style.display = "none";
            errorPage.style.display = "none";
            searchBar.style.display = "flex";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            printRecipes(manager.recipes, allRecipes);
            break;
        case "favouriteRecipes":
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "flex";
            createRecipe.style.display = "none";
            myPage.style.display = "none";
            errorPage.style.display = "none";
            searchBar.style.display = "flex";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            printRecipes(user.favourited, favouriteRecipes);
            break;
        case "createRecipe":
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "flex";
            myPage.style.display = "none";
            errorPage.style.display = "none";
            searchBar.style.display = "none";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            break;

        case "myPage":
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "none";
            myPage.style.display = "flex";
            errorPage.style.display = "none";
            searchBar.style.display = "none";
            currentProfileName.style.display = "block";
            currentProfileAge.style.display = "block";
            currentProfileAdress.style.display = "block";
            printCook(user.cooked, myPageTable);
            break;

        default:
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "none";
            myPage.style.display = "none";
            errorPage.style.display = "flex";
            searchBar.style.display = "none";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            // printRecipes(manager.recipes, favouriteRecipes);
            break;
    }

}

window.addEventListener("load", hashHandle);
window.addEventListener("hashchange", hashHandle);

let user = new User();
let manager = new RecipeManager();

for (let i = 0; i < recipes.length; i++) {

    let obj = recipes[i];

    let recipe = new Recipe(
        obj.title,
        obj.href,
        obj.ingredients,
        obj.thumbnail,
    );

    manager.add(recipe);
}



createProfile();

createTable(myPage);

printRecipes(manager.recipes, allRecipes);

createRecipes(createRecipe);

printCook(user.cooked, myPageTable);


function createTable(container) {

    let div = document.createElement("div");
 
    div.setAttribute("id", "myPageTable");

    container.append(div);
    
}

function createProfile() {

    currentProfileName.innerHTML = "Current Profile Name: Guest";
    currentProfileAge.innerHTML = "Current Profile Age: Guest";
    currentProfileAdress.innerHTML = "Current Profile Adress: Guest";

    myPage.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.innerHTML = "РЕДАКТИРАЙ ПРОФИЛ";

    let form = document.createElement("div");
    form.setAttribute("id", "myPageContainer");

    let personName = document.createElement("input");
    personName.placeholder = "Въведи име";
    personName.setAttribute("id", "personName");

    let age = document.createElement("input");
    age.placeholder = "Въведи години";
    age.setAttribute("id", "personAge");

    let adress = document.createElement("input");
    adress.placeholder = "Въведи адрес";
    adress.setAttribute("id", "personAdress")

    let profileImage = document.createElement("input");
    profileImage.placeholder = "Въведи линк на профилна снимка";
    profileImage.setAttribute("id", "personImage");

    let button = document.createElement("button");
    button.innerText = "Редактирай";
    button.setAttribute("id", "buttonCreateProfile");



    form.append(h1, personName, age, adress, profileImage, button);

    myPage.append(form);

    button.addEventListener("click", function () {

        if ((personName.value.length == 0) && (age.value.length == 0) && (adress.value.length == 0) && (profileImage.value.length == 0)) {

            alert("Полетата не може да бъдат празни");

        } else {
            currentProfileName.innerHTML = "Current Profile Name: " + personName.value;
            currentProfileAge.innerHTML = "Current Profile Age: " + age.value;
            currentProfileAdress.innerHTML = "Current Profile Adress: " + adress.value;
            document.getElementById("profilePicture").src = profileImage.value;
        }

    })

}


function createRecipes(container) {

    container.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.innerHTML = "СЪЗДАЙ РЕЦЕПТА";

    let form = document.createElement("div");
    form.setAttribute("id", "formContainer");

    let recipeName = document.createElement("input");
    recipeName.placeholder = "Въведи име на рецепта";
    recipeName.setAttribute("id", "recipeName");

    let ingredients = document.createElement("textarea");
    ingredients.placeholder = "Въведи стъставки";
    ingredients.setAttribute("id", "ingredients");

    let linkToRecipe = document.createElement("input");
    linkToRecipe.placeholder = "Въведи линк към подробна рецепта";
    linkToRecipe.setAttribute("id", "linkToRecipe")

    let image = document.createElement("input");
    image.placeholder = "Въведи линк на снимка";
    image.setAttribute("id", "image");

    let button = document.createElement("button");
    button.innerText = "Създай рецепта";
    button.setAttribute("id", "buttonCreateRecipe");

    form.append(h1, recipeName, ingredients, linkToRecipe, image, button);

    container.append(form);

    button.addEventListener("mouseenter", function () {

        if ((image.value.length === 0)) {
            image.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
            image.classList.add("placeholder");
        }
        if ((linkToRecipe.value.length === 0)) {
            linkToRecipe.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
            linkToRecipe.classList.add("placeholder");
        }
        if ((ingredients.value.length === 0)) {
            ingredients.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
            ingredients.classList.add("placeholder");
        }
        if ((recipeName.value.length === 0)) {
            recipeName.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
            recipeName.classList.add("placeholder");
        }



    })

    button.addEventListener("mouseleave", function () {
        image.placeholder = "Въведи линк на снимка"
        image.classList.remove("placeholder");

        linkToRecipe.placeholder = "Въведи линк към подробна рецепта"
        linkToRecipe.classList.remove("placeholder");

        ingredients.placeholder = "Въведи стъставки";
        ingredients.classList.remove("placeholder");

        recipeName.placeholder = "Въведи име на рецепта";
        recipeName.classList.remove("placeholder");

    })


    button.addEventListener("click", function () {

        if ((image.value.length > 0) && (linkToRecipe.value.length > 0) && (ingredients.value.length > 0) && (recipeName.value.length > 0)) {
            manager.createRecipe(recipeName.value, ingredients.value, linkToRecipe.value, image.value);
            image.value = "";
            linkToRecipe.value = "";
            ingredients.value = "";
            recipeName.value = "";
            alert("Рецептата е създадена успешно");
        } else {
            alert("Моля въвдете всички полета");
        }


    })

}

function printCook(cooks, container) {

    container.innerHTML = "";

    let hr = document.createElement("hr");
    
    let title = document.createElement("p");
    title.innerHTML="СГОТВЕНИ ЯСТИЯ";
    container.append(title,hr);

    for (let i = 0; i < cooks.length; i++) {
        let cook = cooks[i];
        let h1 = document.createElement("h1");
        h1.innerHTML = "- "+ cook+" - "+user.counter[cook] + " броя";
        container.append(h1);
    }


}

function printRecipes(recipes, container) {

    container.innerHTML = "";

    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];

        let div = document.createElement("div");
        div.classList.add("card");

        let img = document.createElement("img");
        img.src = recipe.thumbnail;
        img.alt = "recipe";

        let a = document.createElement("a");
        a.href = recipe.href;
        a.target = "_blank";

        a.append(img);

        let h1 = document.createElement("h1");
        h1.innerHTML = recipe.title;

        let h3 = document.createElement("h3");
        h3.innerHTML = recipe.ingredients;

        let favourite = document.createElement("button");

        if (user.isFavourited(recipe)) {
            favourite.innerText = "Премахни от любими";
            favourite.addEventListener("click", function () {
                user.unFavourite(recipe);
                hashHandle();
            });
        }
        else {
            favourite.innerText = "Добави в любими";
            favourite.addEventListener("click", function () {
                user.favourite(recipe);
                hashHandle();
            });
        }



        let cook = document.createElement("button");
        cook.innerText = "Сготви";
        cook.addEventListener("click", function () {
            user.cook(recipe);
            console.log(user.cooked);
        })

        div.append(a, h1, h3, favourite, cook);

        container.append(div);

    }

    let searchBar = document.getElementById("search-bar");


    searchBar.addEventListener("keyup", function (event) {

        let text = event.target.value;
        text = text.toLowerCase();

        let filtered = manager.filter(text);
        printRecipes(filtered, allRecipes);
        printRecipes(filtered, favouriteRecipes);

    })

};



