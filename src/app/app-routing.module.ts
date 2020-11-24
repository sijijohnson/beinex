import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { ListviewComponent } from './listview/listview.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'listview',component:ListviewComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
