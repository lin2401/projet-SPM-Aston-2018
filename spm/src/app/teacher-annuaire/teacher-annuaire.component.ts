import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Student } from '../../model/student.interface';

@Component({
	selector: 'app-teacher-annuaire',
	templateUrl: './teacher-annuaire.component.html',
	styleUrls: ['./teacher-annuaire.component.css']
})
export class TeacherAnnuaireComponent implements OnInit {

	private students: Student[] = [];

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService
			.getStudents()
			.subscribe((res: Student[]) => {
				this.students = res;
				console.log(this.students);
			});
	}
}
