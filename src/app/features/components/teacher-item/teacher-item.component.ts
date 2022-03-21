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
  courses:    CourseTeacherModel[]  = [];
  grades:     GradeTeacherModel[]   = [];
  visible:    boolean               = false;

  showDetail() {
    this.visible  = !this.visible;
  }

  checkedChange(event: any, array: any) {
    let current = event.currentTarget;
    array[current.id].is_teacher = current.checked ? 1 : 0;
  }

  saveTeacher() {
    if (confirm('¿Esta seguro que desea guardar los cambios realizados?')) {
      
      for (let i = 0; i < this.courses.length; i++) {
        this.http.updateCoursesTeacher(this.teacher.id, this.courses[i].id, this.courses[i].is_teacher).subscribe();
      }

      for (let i = 0; i < this.grades.length; i++) {
        this.http.updateGradesTeacher(this.teacher.id, this.grades[i].id, this.grades[i].is_teacher).subscribe();
      }
      
      alert('Los datos se han guardado correctamente')
      window.location.reload();
    }
  }

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getCoursesTeacher(this.teacher.id).subscribe(data => this.courses = data);
    this.http.getGradesTeacher(this.teacher.id).subscribe(data => this.grades = data);
  }

}
