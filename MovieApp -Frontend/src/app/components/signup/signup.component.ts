import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from '../../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  user={
    firstName:"",
    lastName:"",
    email:"",
    userName:"",
    password:"",
    confirmPassword:""
  }

  constructor(private backendService:BackendService,private snack:MatSnackBar,private router:Router){}

  ngOnInit(): void {
    if (this.backendService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
   }
  }

  
doRegister(){

  console.log("try to add user");
  console.log("USER",this.user);

  if(this.user.firstName=='' || this.user.lastName=='' || this.user.email=='' || this.user.userName==''|| this.user.password==''|| this.user.confirmPassword==''){
    this.snack.open("Fields cannot be Empty !!!", "Ok")
    return;
  }

  this.backendService.doRegister(this.user).subscribe({
    next: (v) => {console.log(v)},
    error: (e) =>{ 
      console.error(e),
      this.snack.open("The User could not be Registered ","Ok")
    } ,
    complete: () => {
      console.info('complete'),
      this.snack.open("The User has been Registered Successfully","Ok")
     }
})

}
  


}
