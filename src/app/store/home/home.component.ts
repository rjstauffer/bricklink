import { Component, OnInit } from '@angular/core';
import { mock_list } from 'src/app/cards/mock_list';
import { ProductModel } from 'src/app/cards/ProductModel';
import { ProductsService } from 'src/app/products.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: ProductModel [] = [];

  constructor(private productsService:ProductsService) {
    
  }
  
    ngOnInit(): void {
      this.productsService.getProducts().subscribe((data: ProductModel []) => {
        console.log("Fetching data");
        for (var product of data) {
          console.log(product);
          this.products.push(product);
        }
      });
    }
  }