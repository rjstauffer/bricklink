import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./cards/ProductModel";

@Injectable(
    {providedIn: 'root'}
)

export class ProductsService {
    private baseURL:string = "https://bricklink-app-default-rtdb.firebaseio.com/";
    private productsEndPoint:string = "products.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductModel []>(this.baseURL + this.productsEndPoint);
    }
}