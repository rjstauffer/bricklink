import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/cards/ProductModel';
import { ProductsService } from 'src/app/products.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  constructor(private ps: ProductsService) {}

  ngOnInit(): void {

  }

  addProduct(product:ProductModel){
    console.log("you clicked add product");
    console.log(product);
    this.ps.addProduct(product);
  }

}
