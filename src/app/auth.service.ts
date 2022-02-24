import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 

   if(localStorage.getItem('usertoken') != null)
   {
     this.setUserData();
   }
  }
  userData= new BehaviorSubject (null);
  


setUserData():void {
  let encodedToken = JSON.stringify(localStorage.getItem('usertoken'));
  let decodedToken:any = jwtDecode(encodedToken);
  this.userData.next(decodedToken) ;
}

  register(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',userData)
  }

  login(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',userData)
  }

  logout():void{
    localStorage.removeItem('usertoken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
