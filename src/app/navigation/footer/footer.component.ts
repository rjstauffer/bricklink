import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { footer } from './user-info-mode';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myInfo: footer | undefined;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    console.log("Sending a get request to the server");
    this.getUserInfo();
    console.log("Registering showUserInfo as a subscriber");
    this.showUserInfo(); 
  }

  getUserInfo() {
    return this.http.get<footer>('https://bricklink-app-default-rtdb.firebaseio.com/my-info.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: footer )=> {
      console.log(data);
      this.myInfo = data;
    })
  }

}

