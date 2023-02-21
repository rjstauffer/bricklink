export class ProductModel {
    img: string;
    price: number;
    description: string;

    constructor(img:string, price:number, description:string) {
        this.img = img;
        this.price = price;
        this.description = description;

    }
}
