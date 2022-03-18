import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  
  async signIn(rut: string, psw: string) {
    await this.http.validateUser(rut, psw).toPromise().then(data => this.user = data[0]);
    
    if (this.user == null) {
      alert('Error al inciar sesión, usuario o contraseña incorrectos');
    }
    else {
      localStorage.setItem('user_id'      , this.user.id);
      localStorage.setItem('user_id_role' , this.user.id_role);
      localStorage.setItem('user_rut'     , this.user.rut);

      if (psw == "kimen123") {
        alert('Al ser su primer inicio de sesión se le pedira que cambie su contraseña');
        this.router.navigateByUrl('cambiar-psw');
      }
      else this.router.navigateByUrl('horario');
    }
  }

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_id_role');
    localStorage.removeItem('user_rut');
  }

}
