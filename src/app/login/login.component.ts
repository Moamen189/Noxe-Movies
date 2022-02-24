import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl ,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }
  error:string = ''; 

  loginForm:FormGroup =new FormGroup({
   
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/[A-Z][a-z]{2,50}[0-9]{1,50}$/)]),
   
  });

  loginSubmit(formInfo:FormGroup){
    this._AuthService.login(formInfo.value).subscribe((response)=>{
      if(response.message == 'success'){

        this._Router.navigate(['/home']);
        localStorage.setItem('usertoken',JSON.stringify(response.token) )

        //go to home page
        this._AuthService.setUserData();


      }else {
        this.error = "Email Or Password Is Wrong"
      }

    });
  }

  ngOnInit(): void {
  }

}
