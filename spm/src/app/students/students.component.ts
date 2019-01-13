import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Student } from '../../model/student.interface';
import { ApiService } from '../_services/api.service';

@Component({
  	selector: 'app-students',
  	templateUrl: './students.component.html',
  	styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

	@Input('data') student = {
		id: 0,
		picture: '',
		birth_date: 0,
		firstname: '',
		lastname: '',
		email: '',
		registered: 0
	};

	constructor(private ApiService: ApiService) { }

	ngOnInit() {
	}

}

