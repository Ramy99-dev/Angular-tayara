import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {NotFoundComponent} from './not-found/not-found.component'
const routes: Routes = [{
  component:AcceuilComponent,
  path:''
},
{
  component:NotFoundComponent,
  path:'**'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
