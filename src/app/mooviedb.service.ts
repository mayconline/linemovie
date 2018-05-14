import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class MooviedbService {
  Path = "https://api.themoviedb.org/3"
  Key ="?api_key=b97cd718edadcc15d6e0c2b1582baa58&language=pt-BR"
  url =  `${this.Path}/movie/top_rated${this.Key}  ` 


  constructor(private _http:Http) { }


 /* getFilmesTop(){
    return   `${this.Path}/movie/top_rated${this.Key}  ` 
  }*/
  

  getAll() {

    

    return  this._http.get(this.url)
  }


  
}
