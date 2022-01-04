import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GradeModel } from 'src/app/core/models/grade.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  grades: GradeModel[] = [];

  constructor(public router: Router, private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getGrades().subscribe(data => this.grades = data);
  }
}
