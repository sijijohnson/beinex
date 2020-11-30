import { Component, OnInit } from '@angular/core';
import { DformService } from '../dform.service';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
   public pieChartLabels=['male','female'];
   public pieChartData :any=[{
     data:[]
   }];
   public pieChartType ='pie'
   pieChartColors=[{
     backgroundColor:['grey','blue']
   }]
  users: any
  userss:any
  Female=0
  Male=0
  constructor(private _dformService:DformService){}
  ngOnInit() {
this._dformService.getlist().subscribe(data=>{
  this.userss=data
  this.userss.forEach((item,i)=>{                                    //for iteration in table value
    item.no=i+1;
  });
  this.userss.forEach((item,i)=>{                                    //setting female and male count
    if(item.gender=="Female"){
      this.Female=this.Female +1
    }
    if(item.gender=="Male"){
      this.Male=this.Male +1
    }
  })
  this.users=this.userss
  
  this.pieChartData=[this.Female,this.Male]
  console.log(this.Female)
})
}
key :string='no';
reverse:boolean=false;
sort(key){                                                             //sorting function
  this.key=key;
  this.reverse=!this.reverse;
}
}
