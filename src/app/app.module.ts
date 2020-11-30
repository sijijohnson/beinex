import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListviewComponent } from './listview/listview.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {ChartsModule} from 'ng2-charts';
import { AuthenticationModule } from './authentication/authentication.module';
import {AuthGuard} from './auth.guard'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListviewComponent,
    LandingpageComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    Ng2OrderModule,
    ChartsModule,
    AuthenticationModule
  
  ],
  providers: [AuthGuard],
  exports:[
    AppComponent,
    FormComponent,
    ListviewComponent,
    LandingpageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
