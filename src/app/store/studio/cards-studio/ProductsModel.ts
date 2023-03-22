export class ProductsModel {
    img: string;
    creation: number;
    description: string;
    moc: string;
    username: string;

    constructor(img:string, creation:number, description:string, moc:string, username:string) {
        this.img = img;
        this.creation = creation;
        this.description = description;
        this.moc = moc;
        this.username = username;

    }
}
