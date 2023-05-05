import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  captcha = '';
  result:any;
  loginForm:boolean = true;
  registration:boolean = false;
  operators:any = ['+', '-', '*'];
  number:any;
  number1:any;
  index:any;
  operator:any;
  todayDate = new Date();

  constructor( private router:Router){}
  ngOnInit(): void {
    this.generateCaptcha();
  }

  loginSubmit(data:any){
    if(this.result == data.captcha){
      this.router.navigate(['/home']);
    }
    else{ 
      this.generateCaptcha();
    }
  }

  generateCaptcha(){
    this.number = Math.floor(Math.random()*10);
    this.number1 = Math.floor(Math.random()*10)+1;
    this.index = Math.floor((Math.random()*10)/4);
    this.operator = this.operators[this.index];
    if (this.index == 0){
      this.result = this.number + this.number1;
    }
    else if (this.index == 1){
      this.result = this.number - this.number1;
    }
    else if(this.index == 2){
      this.result = this.number * this.number1;
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
  
  date(){
    
  }

}
