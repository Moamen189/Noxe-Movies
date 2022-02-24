import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=03dc62f8445e5b6945c6607df86565ec&language=en-US&page=1`)
  }

  getMovieDetail(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=03dc62f8445e5b6945c6607df86565ec&language=en-US&page=1`)
  }
}
