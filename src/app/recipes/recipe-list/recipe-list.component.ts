import { Component } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
	recipes: Recipe[]= [];
	recipe =  new Recipe("Dummy", "Description", "http://www.dummymag.com//media/img/dummy-logo.png");

	ngOnInit(){}
}
