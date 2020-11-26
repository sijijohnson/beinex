import { Component, OnInit } from '@angular/core';
import { DformService } from '../dform.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  users: any
  constructor(private _dformService:DformService){}



  ngOnInit() {
this._dformService.getlist().subscribe(data=>{
  this.users=data
})
}
}
