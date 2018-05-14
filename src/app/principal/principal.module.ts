import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrincipalComponent],
  exports:[PrincipalComponent]
})
export class PrincipalModule { }
