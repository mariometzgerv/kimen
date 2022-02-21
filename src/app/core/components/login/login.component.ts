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
    await this.http.validateUser(rut, psw).toPromise().then(data => this.user = data[0])

    if (this.user == null) {
      alert('Error al inciar sesión, usuario o contraseña incorrectos');
    }
    else {
      localStorage.setItem('user_id', this.user.id);
      localStorage.setItem('user_id_role', this.user.id_role);
      this.router.navigateByUrl('horario');
    }
  }

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
  }

}
