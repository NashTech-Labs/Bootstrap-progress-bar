import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 skill=[];
  constructor() {}
  title = 'DemoProject';

  ngOnInit() {
  this.skill=[{
  "skillName":"JAVA",
  "totalMember":10,
  "high":5,
  "mid":3,
  "low":2
  },
  {
  "skillName":"Angular",
  "totalMember":50,
  "high":1,
  "mid":25,
  "low":24
  },
  {
  "skillName":"CSS",
  "totalMember":100,
  "high":50,
  "mid":3,
  "low":47
  },
  {
  "skillName":"PLSQL",
  "totalMember":30,
  "high":10,
  "mid":10,
  "low":10
  },
  {
  "skillName":"React",
  "totalMember":50,
  "high":35,
  "mid":5,
  "low":10
  }
  ]
  }
}
