import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-studio',
  templateUrl: './cards-studio.component.html',
  styleUrls: ['./cards-studio.component.css']
})
export class CardsStudioComponent {
  @Input() img: string;
  @Input() creation: number;
  @Input() description: string;
  @Input() moc: string;
  @Input() username: string;

  constructor(){
    this.img = "";
    this.creation = 0;
    this.description = "Missing Description";
    this.moc = "";
    this.username = "Boba Fett";
  }

}
