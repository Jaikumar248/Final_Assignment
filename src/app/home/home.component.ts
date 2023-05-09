import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser:any;
  firstLetter:any;
  lastLetter:any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedIn');
      this.loggedInUser = JSON.parse(this.loggedInUser);
      this.firstLetter = this.loggedInUser.firstName.charAt(0);
      this.lastLetter = this.loggedInUser.lastName.charAt(0);
  }

  logoutButton: boolean = false;
  nameIcon: boolean = true;

  showLogout() {
    this.logoutButton = true;
    this.nameIcon = false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
