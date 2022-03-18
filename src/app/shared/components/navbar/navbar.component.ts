import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user_id:      any = localStorage.getItem('user_id');
  user_id_role: any = localStorage.getItem('user_id_role');

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.user_id == null) {
      alert('No ha iniciado sesión, volviendo a la página de inicio');
      this.router.navigateByUrl('login');
    }
  }

}
