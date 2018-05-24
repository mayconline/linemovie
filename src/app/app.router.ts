import { Routes, RouterModule } from '@angular/router'
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { SeriesComponent } from './series/series.component';
const routes: Routes = [
    
    {
        path: '',
        component: PrincipalComponent
    },
    {
        path: 'series',
        component: SeriesComponent
    }
   
];


@NgModule({

    imports: [RouterModule.forRoot(routes)],
   
    exports: [RouterModule]
   
   })
   
   export class AppRoutingModule { }