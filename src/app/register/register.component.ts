import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl ,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }
  error:string = ''; 

  registerForm:FormGroup =new FormGroup({
    first_name : new FormControl(null , [Validators.required , Validators.minLength(3), Validators.maxLength(8)]),
    last_name : new FormControl(null , [Validators.required , Validators.minLength(3), Validators.maxLength(8)]),
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/[A-Z][a-z]{2,50}[0-9]{1,50}$/)]),
    age : new FormControl(null , [Validators.required , Validators.min(18) , Validators.max(80)])
  });

  registerSubmit(formInfo:FormGroup){
    this._AuthService.register(formInfo.value).subscribe((response)=>{
      if(response.message == 'success'){

        //go to login page

        this._Router.navigate(['/login'])

      }else {
        this.error = "Email Is already Registered"
      }

    });
  }

  ngOnInit(): void {
  }

}
