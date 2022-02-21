import { Component, OnInit, Input } from '@angular/core';
import { ScheduleModel } from 'src/app/core/models/schedule.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

  @Input() grade: any;
  schedule: ScheduleModel[] = [];
  
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getSchedule();
  }

  async getSchedule() {
    await this.http.getScheduleGrade(this.grade.id).toPromise().then(data => this.schedule = data);
  }

  getCourseSchedule(id_day: number, id_bloc: number) {
    let courses = this.schedule.filter(x => x.id_day == id_day);
    let course = courses.find(x => x.id_bloc == id_bloc);
    if (course == null) {
      return { id_course: 0, short_name: '', color: 'DFFFB0' };
    }
    else {
      return course;
    }
  }
}
