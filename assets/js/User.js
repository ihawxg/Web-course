class User {

    constructor(){
        this.favourited = [];
        this.cooked = [];
        this.counter = {};
    }

    favourite(recipe){
        if(this.favourited.indexOf(recipe) === -1){
            this.favourited.push(recipe);
        }
    }

    unFavourite(recipe){
        let idx = this.favourited.indexOf(recipe);
        if(idx !== -1){
            this.favourited.splice(idx,1);
        }
    }

    isFavourited(recipe){
        return this.favourited.indexOf(recipe) !== -1;
    }

    cook(recipe){
        if(this.cooked.indexOf(recipe.title) === -1){
            this.cooked.push(recipe.title);
        }
        if(this.counter[recipe.title] === undefined){
            this.counter[recipe.title] = 1;
        } else {
            this.counter[recipe.title]++;
        }
    }
}