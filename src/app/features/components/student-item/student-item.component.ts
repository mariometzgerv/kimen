import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  @Input() student: any;

  viewStudent() {
    this.router.navigateByUrl('administracion/alumno/' + this.student.id);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
