import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  email:string;
  password:string;
  constructor(private formbuilder:FormBuilder,private router:Router,public authservice:AuthService) { }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
      })

}
log(){
  if(this.email == "user@gmail.com" && this.password == "user@123"){
    this.router.navigateByUrl('landingpage')
    this.authservice.setLoggedIn(true)
  }
  else{
    alert("Please enter valid details")
  }
}
}