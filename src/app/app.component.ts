import { Component } from '@angular/core';
import { mock_list } from './cards/mock_list';
import { ProductModel } from './cards/ProductModel';
//import { mock_list } from './cards/mock_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bricklink';
  products: ProductModel [] = [];

  constructor() {
    for (var item of mock_list) {
      console.log(item)
      this.products.push(item);
    }
  }
}
