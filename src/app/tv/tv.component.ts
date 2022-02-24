import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  trendingTv:any[]=[];
   imagePrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getTrending('tv').subscribe((response)=>{

      this.trendingTv =response.results

    })
  }

}
