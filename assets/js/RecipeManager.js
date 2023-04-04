class RecipeManager {

    constructor() {
        this.recipes = [];
    }

    add(recipe){
        if(this.recipes.indexOf(recipe) === -1){
            this.recipes.push(recipe);
        }
    }

    filter(text){
        let filtered =[];

        for (let i=0;i<this.recipes.length;i++){
            let recipe = this.recipes[i];
            if (recipe.title.toLowerCase().includes(text)){
                filtered.push(recipe);
            }
        }

        return filtered;
    }

createRecipe(title, ingredients, href, thumbnail) {

    const recipe = {
        title: title,
        ingredients: ingredients,
        href: href,
        thumbnail: thumbnail
    };
    if(this.recipes.indexOf(recipe) === -1){
            this.recipes.unshift(recipe);
        }
    return recipe;
}

}