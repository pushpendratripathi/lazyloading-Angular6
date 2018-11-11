import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
{path:'lazy',loadChildren:'./tripti/tripti.module#TriptiModule'},
{path:'lazy',loadChildren:'./pushpendra/pushpendra.module#PushpendraModule'},
{path:'lazy',loadChildren:'./ujjwal/ujjwal.module#UjjwalModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
