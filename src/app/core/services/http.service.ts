import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.interface';
import { GradeModel, GradeTeacherModel } from '../models/grade.interface';
import { StudentModel } from '../models/student.interface';
import { TeacherModel } from '../models/teacher.interface';
import { CourseModel, CourseTeacherModel } from '../models/course.interface';
import { ScheduleModel } from '../models/schedule.interface';
import { NewsModel } from '../models/news.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private host = 'https://kimen-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  updateUserPsw(rut: string, psw: string): Observable<UserModel[]> {
    let url = 'usuario_actualizar_psw.php?rut=' + rut + '&psw=' + psw;
    return this.http.get<UserModel[]>(this.host + url);
  }
  validateUser(rut: string, psw: string) {
    let url = 'usuario_verificar.php?rut=' + rut + '&psw=' + psw;
    return this.http.get<UserModel[]>(this.host + url);
  }

  getGrades(): Observable<GradeModel[]> {
    let url = 'curso.php?info';
    return this.http.get<GradeModel[]>(this.host + url);
  }

  getGradesTeacher(id: number): Observable<GradeTeacherModel[]> {
    let url = 'curso.php?profesor=' + id;
    return this.http.get<GradeTeacherModel[]>(this.host + url);
  }

  getStudents(): Observable<StudentModel[]> {
    let url = 'curso.php?estudiantes';
    return this.http.get<StudentModel[]>(this.host + url);
  }

  getStudentGrade(id: number): Observable<GradeModel[]> {
    let url = 'curso.php?estudiante=' + id;
    return this.http.get<GradeModel[]>(this.host + url);
  }

  getTeachers(): Observable<TeacherModel[]> {
    let url = 'curso.php?profesores';
    return this.http.get<TeacherModel[]>(this.host + url);
  }

  getCourses(): Observable<CourseModel[]> {
    let url = 'asignatura.php?info';
    return this.http.get<CourseModel[]>(this.host + url);
  }

  getCoursesTeacher(id: number): Observable<CourseTeacherModel[]> {
    let url = 'asignatura.php?profesor=' + id;
    return this.http.get<CourseTeacherModel[]>(this.host + url);
  }

  getScheduleGrade(id: number): Observable<ScheduleModel[]> {
    let url = 'horario.php?curso=' + id;
    return this.http.get<ScheduleModel[]>(this.host + url);
  }

  getNewsUser(id: number): Observable<NewsModel[]> {
    let url = 'comunicado.php?usuario=' + id;
    return this.http.get<NewsModel[]>(this.host + url);
  }
}
