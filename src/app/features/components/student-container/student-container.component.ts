import { Component, OnInit, Input } from '@angular/core';
import { StudentModel } from 'src/app/core/models/student.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent implements OnInit {

  @Input() grade: any;
  students: StudentModel[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getStudents().subscribe(data => this.students = data);
  }

}
