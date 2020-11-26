import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { DformService } from '../dform.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  reactiveForm : FormGroup;
  constructor(private formbuilder:FormBuilder, private _dformService:DformService){ }
  ngOnInit():void{
    this.reactiveForm = this.formbuilder.group({
      name: ['',Validators.required],
      gender:['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactnumber: ['', [ Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['']
    })
  }
onsubmit(){
  console.log(this.reactiveForm.value);
  this._dformService.register(this.reactiveForm.value)
  .subscribe(
    response => console.log('Success!',response),
    error =>console.error('Error!',error)
  )
}
}
