import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../model/student.interface';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	//public message: string = "message en provenance du service";

	//Propriétés
	private urlServer: string = 'http://localhost:5000';

	constructor(private http: HttpClient) { }

	//Méthodes

	getStudents(){
		return this.http.get(this.urlServer + '/students/');
	}

}
