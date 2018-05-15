import { Component, OnInit } from '@angular/core';
import { MooviedbService } from '../mooviedb.service';
import { Observable }  from 'rxjs';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  
  topfilmes = new Array<any>();
  pagina;

  img_Path = 'https://image.tmdb.org/t/p/w500/'


  constructor(private Moviedb:MooviedbService) { }

  ngOnInit() {
    this.topRated()

  }

  //Filmes top Rated //
  topRated(){
    this.Moviedb.getTopRated().subscribe(
      data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body)
          
          this.pagina = objeto_retorno.pagina;
         this.topfilmes = objeto_retorno.results;
         

      },
      error =>{
        console.log(error)
      }
          )
  };



}
