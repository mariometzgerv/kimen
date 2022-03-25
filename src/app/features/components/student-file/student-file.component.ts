import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-file',
  templateUrl: './student-file.component.html',
  styleUrls: ['./student-file.component.css']
})
export class StudentFileComponent implements OnInit {

  student_id:     number = 0;
  student:        any;
  diagnostics:    any;
  blood_type:     any;
  medic_info:     any;
  students_size:  any;
  visible_d:      boolean = false;

  constructor(private router: Router, private router_params: ActivatedRoute, private http: HttpService) { }

  btnReturn(){
    if (confirm('¿Está seguro que desea regresar a la pantalla anterior sin guardar los cambios, perderá todo lo que no se haya guardado?'))
      this.router.navigateByUrl('administracion/alumnos');
  }

  checkedChangeHasDiagnostic(event: any) {
    let current = event.currentTarget;
    this.visible_d = current.checked;
  }

  checkedChange(event: any, array: any) {
    let current = event.currentTarget;
  }

  ngOnInit(): void {
    this.router_params.params.subscribe(params => { this.student_id = params['id'] });
    this.http.getStudent(this.student_id).subscribe(data => this.student = data);
    this.http.getSize().subscribe(data => this.students_size = data);
    this.http.getDiagnostic().subscribe(data => this.diagnostics = data);
    this.http.getBloodType().subscribe(data => this.blood_type = data);
    this.http.getMedicInfo().subscribe(data => this.medic_info = data);
  }

}
