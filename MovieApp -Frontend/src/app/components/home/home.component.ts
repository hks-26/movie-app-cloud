import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private backendService:BackendService,private router:Router){}

  ngOnInit(): void {
    if (this.backendService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
   }
  }


}
