import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Hamburger',
      'Very tasty hamburger!',
      'https://i2.pickpik.com/photos/734/452/849/burger-food-junk-hamburger-preview.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ]),
    new Recipe(
      'French Fries',
      'French fries with yummy ketchup made from cherry tomatoes!',
      'https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-5-1076x1536.jpg',
      [
        new Ingredient('Potato', 2),
        new Ingredient('Cherry Tomato', 10)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
