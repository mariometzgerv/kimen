import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GradeModel } from '../models/grade.interface';
import { StudentModel } from '../models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private host = 'http://localhost/kimen_backend/';

  constructor(private http: HttpClient) { }

  getGrades(): Observable<GradeModel[]> {
    let url = '?cursos';
    return this.http.get<GradeModel[]>(this.host + url);
  }

  getStudents(): Observable<StudentModel[]> {
    let url = '?alumnos';
    return this.http.get<StudentModel[]>(this.host + url);
  }
}
