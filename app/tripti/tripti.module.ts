import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriptiComponent } from './tripti.component';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes=[
{path:'load-me', component:TriptiComponent},

];

@NgModule({
  declarations: [TriptiComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TriptiModule {
  
 }
