import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  captcha = '';
  result: any;
  loginForm: boolean = true;
  registration: boolean = false;
  operators: any = ['+', '-', '*'];
  number: any;
  number1: any;
  index: any;
  operator: any;
  todayDate = new Date();
  userExists: any;

  constructor(private router: Router, private userService: UserServiceService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.generateCaptcha();
  }

  loginSubmit(data: any) {
    this.userService.loginUser(data).subscribe((result) => {
      this.userExists = result;
      if (this.userExists.mobileNumber === data.mobileNumber && this.result == data.captcha) {
        localStorage.setItem('loggedIn', JSON.stringify(this.userExists));
        this.router.navigate(['/home']);
      }
      else {
        this.generateCaptcha();
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Enter Correct Mobile Number and Captcha' });
      }
    });
  }

  // Generating the Captcha Here...
  generateCaptcha() {
    this.number = Math.floor(Math.random() * 10);
    this.number1 = Math.floor(Math.random() * 10) + 1;
    this.index = Math.floor((Math.random() * 10) / 4);
    this.operator = this.operators[this.index];
    if (this.index == 0) {
      this.result = this.number + this.number1;
    }
    else if (this.index == 1) {
      this.result = this.number - this.number1;
    }
    else if (this.index == 2) {
      this.result = this.number * this.number1;
    }
  }

  registrationForm() {
    this.registration = true;
    this.loginForm = false;
  }

  login() {
    this.registration = false;
    this.loginForm = true;
  }

  registerUserSubmit(data: any) {
    console.log(data.dateOfBirth);
    let pipe = new DatePipe('en-US');
    const now = Date.now();
    data.dateOfBirth = pipe.transform(data.dateOfBirth, "dd/MM/yyyy");
    this.userService.registerUser(data).subscribe((result) => {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Register Successfully Please Login' });
      this.registration = false;
      this.loginForm = true;
    });

  }

}
