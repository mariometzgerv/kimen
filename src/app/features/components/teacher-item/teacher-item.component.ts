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
  b_courses:  CourseTeacherModel[]  = [];
  b_grades:   GradeTeacherModel[]   = [];
  courses:    CourseTeacherModel[]  = [];
  grades:     GradeTeacherModel[]   = [];
  visible:    boolean               = false;

  showDetail() {
    this.courses   = this.b_courses;
    this.grades   = this.b_grades;
    this.visible  = !this.visible;
  }

  checkedChange(event: any, array: any) {
    let current = event.currentTarget;
    array[current.id].is_teacher = current.checked;
    array[current.id].name = "asdadasd";
  }

  saveTeacher() {
    let str = '';

    this.courses.forEach(c => {
      str += c.is_teacher + ', ';
    });

    alert(str);
  }

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getCoursesTeacher(this.teacher.id).subscribe(data => this.b_courses = data);
    this.http.getGradesTeacher(this.teacher.id).subscribe(data => this.b_grades = data);
  }

}
