import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  captcha = '';
  loginForm:boolean = true;
  registration:boolean = false;

  ngOnInit(): void {
    this.generateCaptcha()
  }

  generateCaptcha(){
    for(let i=0; i<6; i++){
      let index = Math.floor(Math.random()*this.chars.length);
      this.captcha = this.captcha + this.chars[index];
      console.log(this.captcha);
    }
  }

  registrationForm(){
    this.registration = true;
    this.loginForm = false;
  }

  login(){
    this.registration = false;
    this.loginForm = true;
  }

}
