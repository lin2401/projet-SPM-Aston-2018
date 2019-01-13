import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.interface';
import { ApiService } from '../_services/api.service';
import { catchError } from 'rxjs/operators';


@Component({
	selector: 'app-teacher-classe-creation',
	templateUrl: './teacher-classe-creation.component.html',
	styleUrls: ['./teacher-classe-creation.component.css']
})
export class TeacherClasseCreationComponent implements OnInit {

	students: Student[] = [];

	constructor(private ApiService: ApiService) { }

	ngOnInit() {
		this.ApiService
			.getStudents()
			.subscribe((res: Student[]) => {
				this.students = res;
			});
	}

}
