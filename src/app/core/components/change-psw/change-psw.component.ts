import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css']
})
export class ChangePswComponent implements OnInit {

  user:         any;
  user_id:      any = localStorage.getItem('user_id');
  user_id_role: any = localStorage.getItem('user_id_role');
  user_rut:     any = localStorage.getItem('user_rut');
  
  async changePsw(psw_old: string, psw_new: string, psw_confirm: string) {
    await this.http.validateUser(this.user_rut, psw_old).toPromise().then(data => this.user = data[0]);
    
    if (this.user == null) {
      alert('Error al cambiar la contraseña, la contraseña antigua es incorrecta');
    }
    else {
      if (psw_new == psw_confirm && psw_new.length >= 8) {
        if (confirm('¿Esta seguro que desea confirmar su contraseña?')) {
          await this.http.updateUserPsw(this.user_rut, psw_new).toPromise();
          alert('Contraseña cambiada correctamente');
          this.router.navigateByUrl('horario');
        }
      }
      else if(psw_new.length < 8)     alert('Error, la contraseña nueva tiene menos de 8 caracteres');
      else if(psw_new != psw_confirm) alert('Error, las contraseñas no coinciden');
    }
  }

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
    if (this.user_id == null) {
      alert('No ha iniciado sesión, volviendo a la página de inicio');
      this.router.navigateByUrl('login');
    }
  }

}
