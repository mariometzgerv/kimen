import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user_id:      any = localStorage.getItem('user_id');
  user_id_role: any = localStorage.getItem('user_id_role');

  constructor() { }

  ngOnInit(): void {
  }

}
