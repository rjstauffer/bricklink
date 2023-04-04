import { Component, OnInit } from '@angular/core';
import { mock_list } from './cards/mock_list';
import { ProductModel } from './cards/ProductModel';
import { mock_list2 } from './store/studio/cards-studio/mock_list2';
import { ProductsModel } from './store/studio/cards-studio/ProductsModel';
import { ProductsService } from './products.services';
//import { mock_list } from './cards/mock_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'bricklink';
  products: ProductModel [] = [];
  product: ProductsModel [] = [];

  constructor(private productsService:ProductsService) {
    
}

  
}
