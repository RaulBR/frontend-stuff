import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
;

export class ShopingListService{
    ingridientSelected = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getShopingList(){
        return this.ingredients.slice();
    }
    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingridientSelected.emit(this.ingredients.slice());
      }
}