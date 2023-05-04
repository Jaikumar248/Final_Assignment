import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

  logoutButton:boolean = false;
  nameIcon:boolean = true;

  showLogout(){
    this.logoutButton = true;
    this.nameIcon = false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
 
}
