import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  trendingPeople:any[]=[];
  imagePrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getTrending('person').subscribe((response)=>{

      this.trendingPeople =response.results

    })
  }

}
