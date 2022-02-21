import { Component, OnInit } from '@angular/core';
import { GradeModel } from 'src/app/core/models/grade.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-page-schedule',
  templateUrl: './page-schedule.component.html',
  styleUrls: ['./page-schedule.component.css']
})
export class PageScheduleComponent implements OnInit {

  user_id:      any = localStorage.getItem('user_id');
  user_id_role: any = localStorage.getItem('user_id_role');

  current_grade: number = 1;
  grades: GradeModel[] = [];

  changeGrade(id: any) {
    this.current_grade = id.value;
  }

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    switch(this.user_id_role) { 
      case '1': {
        this.http.getGrades().subscribe(data => this.grades = data);
        break;
      }
      case '4': {
        this.http.getStudentGrade(this.user_id).subscribe(data => this.grades = data);
        break;
      }
   } 
    
  }

}
