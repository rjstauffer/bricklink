import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() img: string;
  @Input() price: number;
  @Input()description: string;

  constructor(){
    this.img = "";
    this.price = 0;
    this.description = "Missing Description";
  }
}
