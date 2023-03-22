import { Component } from '@angular/core';
import { mock_list2 } from './cards-studio/mock_list2';
import { ProductsModel } from './cards-studio/ProductsModel';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent {

  product: ProductsModel [] = [];

  constructor() {
    

  for (var items of mock_list2) {
    console.log(items)
    this.product.push(items);
  }
}
}
