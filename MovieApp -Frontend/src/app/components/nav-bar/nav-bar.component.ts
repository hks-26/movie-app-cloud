import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  public loggedIn=false;
  userName:unknown;

  constructor(private backendService:BackendService) {
    
    this.userName=localStorage.getItem("userName");
  }
  ngOnInit():void{
    this.loggedIn= this.backendService.isLoggedIn();
  }

  logoutUser (){
    this.backendService.logout();
    // location.reload();
    window.location.href="/login"
    // routerLink="login";
  }

}
