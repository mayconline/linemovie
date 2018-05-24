import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class MooviedbService {
  Path = "https://api.themoviedb.org/3"
  Key ="?api_key=b97cd718edadcc15d6e0c2b1582baa58&language=pt-BR"
 
  urlTop =  `${this.Path}/movie/top_rated${this.Key}  ` 
  urlTopSeries = `${this.Path}/tv/top_rated${this.Key}   `

  constructor(private _http:Http) { }




  getTopRated() {
   return  this._http.get(this.urlTop)
  }

  getTopSeries(){
    return this._http.get(this.urlTopSeries)
  }

  
}
