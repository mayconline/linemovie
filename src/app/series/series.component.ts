import { Component, OnInit } from '@angular/core';
import { MooviedbService } from '../mooviedb.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  topseries = new Array<any>();
  pagina;

  img_Path = 'https://image.tmdb.org/t/p/w500/'

  constructor(private Moviedb:MooviedbService) { }


  //Series top Rated //
  topSeries(){
    this.Moviedb.getTopSeries().subscribe(
      data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body)
          
          this.pagina = objeto_retorno.pagina;
         this.topseries= objeto_retorno.results;
         

      },
      error =>{
        console.log(error)
      }
          )
  };
//


  ngOnInit() {
    this.topSeries();
  }

}
