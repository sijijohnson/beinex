import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  users: any
  constructor() {
    this.users = [{
      "no": 1,
      "name": "John doe",
      "gender": "Male",
      "email": "johndoe@gmail.com",
      "number": 9123456789,
      "message": "Lorem ipsum is sim"
    }, {
      "no": 2,
      "name": "Richard A",
      "gender": "Male",
      "email": "michard@gmail.com",
      "number": 8456987854,
      "message": "Lorem ipsum is sim"
    }, {
      "no": 3,
      "name": "Michelle",
      "gender": "Female",
      "email": "michelle@gmail.com",
      "number": 7546985423,
      "message": "Lorem ipsum is sim"
    }, {
      "no": 4,
      "name": "Linda F",
      "gender": "Female",
      "email": "lindaf@gmail.com",
      "number": 9312456987,
      "message": "Lorem ipsum is sim"
    }, {
      "no": 5,
      "name": "Lisa",
      "gender": "Female",
      "email": "lisa@gmail.com",
      "number": 9123456789,
      "message": "Lorem ipsum is sim"
    },
    ]
  }

  ngOnInit(): void {
  }

}
