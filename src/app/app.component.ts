import { Component } from '@angular/core';
import { CookService } from './cook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Cookbook";
  
  todos: any[];
  
  constructor(private cookService: CookService) {
    this.todos = this.cookService.todos;
  }
  
  remove(todo) {
    let index = this.todos.indexOf(todo);
    if(index > -1) {
      this.todos.splice(index,1);
    }
  }
  
  add(dish,ingredients,recipe) { 
    this.todos.push({dish:dish.value,ingredients:ingredients.value,recipe:recipe.value, isVisible : false, details: "Details"});
    dish.value = "";
    ingredients.value = "";
    recipe.value = "";
  }
  
  edit(editDish,editIngridients,editRecipe,todo) {
    let prevDish;
    let prevIngredients;
    let prevRecipe;
    let index = this.todos.indexOf(todo);
    prevDish = this.todos[index].dish;
    prevIngredients = this.todos[index].ingredients;
    prevRecipe = this.todos[index].recipe;
    if(editDish.value === "") {
      editDish.value = prevDish;
    }
    if(editIngridients.value === "") {
      editIngridients.value = prevIngredients;
    }
    if (editRecipe.value === "") {
      editRecipe.value = prevRecipe;
    }
    if(index > -1) {
      this.todos.splice(index,1,{dish:editDish.value,ingredients:editIngridients.value, recipe:editRecipe.value, isVisible: false, details: "Details" });
      
    }
  }
  
  changeCustoms(todo) { 
    let index = this.todos.indexOf(todo);
    this.todos[index].isVisible = !this.todos[index].isVisible;
    if(this.todos[index].isVisible === true) {
      this.todos[index].details = "Roll up";
    } else {
      this.todos[index].details = "Details";
    }
  }
}

