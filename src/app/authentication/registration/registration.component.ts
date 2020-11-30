import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
regForm:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['', [Validators.required, Validators.minLength(5)]]
      })
  }

}
