import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  imagePrefix:string = 'https://image.tmdb.org/t/p/w500';


  id:string= ''
  moviedetail:any = {};


  constructor( private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
    this.id = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._MoviesService.getMovieDetail(this.id).subscribe((response)=>{

      this.moviedetail = response;

    })

    
  }
  
  
 



}
