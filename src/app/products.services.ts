import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./cards/ProductModel";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class ProductsService {
    

    constructor(private db: AngularFireDatabase) {
        
    }

    getProducts(){
        return this.db.list<ProductModel>("products").valueChanges();
    }

    addProduct(product:ProductModel) {
       // this.db.list<ProductModel>("products").set(product);
       const productsRef = this.db.list<ProductModel>('products');
        productsRef.push(product);
    }
}