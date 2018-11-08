import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shopinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  ];

  constructor(private shopingListService:ShopingListService) { }

  ngOnInit() {
    this.ingredients = this.shopingListService.getShopingList();
    this.shopingListService.ingridientSelected.subscribe(
      (ingredients:Ingredient[] )=>{
          this.ingredients = ingredients;
      }
    )
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.shopingListService.onIngredientAdded(ingredient);
  // }
}
