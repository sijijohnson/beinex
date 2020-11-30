import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { ListviewComponent } from './listview/listview.component';
import { FormComponent } from './form/form.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {path:'landingpage',component:LandingpageComponent,canActivate:[AuthGuard]},
  {path:'listview',component:ListviewComponent,canActivate:[AuthGuard]},
  {path:'form',component:FormComponent,canActivate:[AuthGuard]},
  {
    path:'',loadChildren:()=> import('./authentication/authentication.module').then(m =>m.AuthenticationModule)  //lazy loading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
