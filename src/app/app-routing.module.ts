import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'newsapp', component:NavbarComponent},
  {path: 'healthnews',component:HealthnewsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
