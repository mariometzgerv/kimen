import { Component, OnInit, Input } from '@angular/core';
import { CourseTeacherModel } from 'src/app/core/models/course.interface';
import { GradeTeacherModel } from 'src/app/core/models/grade.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.css']
})
export class TeacherItemComponent implements OnInit {

  @Input() teacher: any;
  courses:  CourseTeacherModel[] = [];
  grades:   GradeTeacherModel[] = [];
  visible:  boolean = false;

  showDetail() {
    this.visible = !this.visible;
  }

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getCoursesTeacher(this.teacher.id).subscribe(data => this.courses = data);
    this.http.getGradesTeacher(this.teacher.id).subscribe(data => this.grades = data);
  }

}
