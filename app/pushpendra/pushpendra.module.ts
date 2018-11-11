import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushpendraComponent } from './pushpendra.component';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes=[
{path:'loadme', component:PushpendraComponent},
];

@NgModule({
  declarations: [PushpendraComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PushpendraModule {

constructor()
{
  console.log('pushpendra');
}

 }
