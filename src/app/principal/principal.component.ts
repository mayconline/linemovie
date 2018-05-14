import { Component, OnInit } from '@angular/core';
import { MooviedbService } from '../mooviedb.service';
import { Observable }  from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  
  topfilmes = new Array<any>();
  pagina;

  carros: string[] = ['gol','fiat']
  constructor(private Moviedb:MooviedbService) { }

  ngOnInit() {
     this.Moviedb.getAll().subscribe(
      data => {
          const response = (data as any);
          this.pagina = response.page;
          this.topfilmes = response.results;
          console.log(data)

      },
      error =>{
        console.log(error)
      }
    )
      
  }

}
