import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  credentials={
    userName:'',
    password:''
  }

  ngOnInit():void{
    if (this.backendService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
   }
  }
  constructor(private backendService:BackendService,private router:Router){}

  onSubmit(){

    console.log("form is submitted");
    if((this.credentials.userName!='' && this.credentials.password!='')&&this.credentials.userName!=null && this.credentials.password!=null)
    {
      console.log("we have to submit the form to the server",this.credentials);
      // token generate
      this.backendService.generateToken(this.credentials).subscribe(
        (response:unknown)=>{
          console.log(response);
          this.backendService.loginUser(response);
          window.location.href="/dashboard";
          // this.router.navigate(['/dashboard']);
        },
        error=>{
          console.log(error);
        }

      )


    }else{
      console.log("fields are empty");
    }
  
  
  
  
  
  }


}
