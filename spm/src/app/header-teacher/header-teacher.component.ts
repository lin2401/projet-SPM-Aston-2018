import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-teacher',
  templateUrl: './header-teacher.component.html',
  styleUrls: ['./header-teacher.component.css']
})
export class HeaderTeacherComponent implements OnInit {
  name = 'christian collignon';

  constructor() { }

  ngOnInit() {
  }

}
