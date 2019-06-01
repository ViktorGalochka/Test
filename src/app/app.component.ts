import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cook-list';
  todos: any[];
  
  constructor() {
    this.todos = [
      {
        recipe: `1. HOMEMADE PIZZA. Ingredients: 100g Self Raising Flour; 60ml Milk; 1 tbsp Olive Oil; 1 tin of Chopped Tomatoes; Sprinkle of Mixed Herbs; Any Toppings you like! (Pepperoni, ham, peppers, onions, mushrooms, chicken, pineapple etc); Cheese, grated
        Method: 1) Preheat Oven to 200℃/ Fan 180℃/ Gas Mark 6. 2) Prepare your toppings (e.g. Cut up the ham, grate the cheese). 3) In a large bowl or mixing bowl, add the self raising flour, milk and oil. Mix with your hands to form the dough. 4) Tip the dough onto a lightly floured surface and roll into a circle. Roll to the thickness of roughly two pound coins. Place on a baking tray. 5) Spoon on your chopped tomatoes and spread near the edges of the dough. Sprinkle your mixed herbs on top. 6) Add your toppings and cheese. 7) Bake on top shelf for 20 minutes. 8) Serve.`,
        isVisible : false 
      },
      {
        recipe: `2.ROAST SAUSAGES AND VEGETABLES. Ingridients: Pack of large Sausages; 500g Sweet Potatoes, chopped; One Broccoli head; 2 Red Onions, sliced; 3 Mixed Peppers, chopped; 1-2 Tbsp Olive Oil; Sprinkle of mixed herbs
        Method: 1) Preheat oven to 200℃/ Fan 180℃/ Gas Mark 6. 2) Pour 1 tbsp of olive oil in a roasting or baking tray and place in oven for 5 minutes. 3) Meanwhile, chop the sweet potatoes and mixed peppers. Place the sausages, sweet potatoes and peppers in the baking tray. Toss in the oil and roast for 15 minutes. 4) Add the sliced red onions to the tray with a sprinkle of mixed herbs. Toss with the sausages and veg and roast for a further 10-15 minutes. 5) Meanwhile, cook the broccoli in a pan of boiling water for 5 minutes. Drain and serve with the sausages and veg.`,
        isVisible : false
      },
      {
        recipe: `3. CLASSIC LASAGNE. Ingridients: 1 Onion, diced; 450g Beef Mince; 2 tins of Chopped Tomatoes; Sprinkle of mixed herbs; 4 Lasagne Sheets; Cheese, grated (optional); Salad bag (optional)
        Method: 1) Preheat oven to 180℃. 2) Fry the onions in 1 tbsp of olive oil in a hot frying pan until soft. 3) Add in mince and break up into small bits with a spatula or spoon that you’re using to stir. 4) Once the mince is brown all over, add in the chopped tomatoes and mixed herbs and stir thoroughly. 5) Boil and simmer for 15-20 minutes, stirring occasionally so the mince doesn’t stick to the bottom of the pan. 6) Serve with salad and cheese.`,
        isVisible : false
      }
    ]
  }
  
  remove(todo) {
    let index = this.todos.indexOf(todo);
    if(index > -1) {
      this.todos.splice(index,1);
    }
  }
  
  add(q) {
    
    this.todos.push({recipe:q.value});
    q.value = "";
  }
  
  edit(change,todo) {
    let index = this.todos.indexOf(todo);
    if(index > -1) {
      this.todos.splice(index,1,{recipe:change.value});
    }
  }
  
  changeCustoms(todo) { 
    let index = this.todos.indexOf(todo);
    this.todos[index].isVisible = !this.todos[index].isVisible;
  }
}

