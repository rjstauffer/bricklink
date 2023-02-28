import { Component } from '@angular/core';
import { mock_list } from 'src/app/cards/mock_list';
import { ProductModel } from 'src/app/cards/ProductModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: ProductModel [] = [];

  constructor() {
    for (var item of mock_list) {
      console.log(item)
      this.products.push(item);
    }
  }
}
