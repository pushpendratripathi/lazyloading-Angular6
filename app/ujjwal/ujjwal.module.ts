import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UjjwalComponent } from './ujjwal.component';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes=[
{path:'loadm', component:UjjwalComponent},

];

@NgModule({
  declarations: [UjjwalComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UjjwalModule {
  
 }
