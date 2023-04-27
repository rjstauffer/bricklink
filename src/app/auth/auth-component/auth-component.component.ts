import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent {
  public buttonClicked!:string;
  private authObservable!: Observable<AuthResponse>;

  constructor(private authService: AuthService, private router:Router) {

  }

  public onSubmit(data: NgForm) {
    console.log("Button Clicked = " + this.buttonClicked);
    console.log(data.value);

    if (this.buttonClicked == 'signup')
    {
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
    }
    if (this.buttonClicked == 'login')
    {
      this.authObservable = this.authService.login(data.value.email, data.value.password);
    }

  
    
    this.authObservable.subscribe(
      (data: AuthResponse) => {
        console.log(data);
        this.router.navigate(['']);
      },
      error => {
        console.log(error.error.error.message);
      }
    );

    data.resetForm();
  }

  

}
