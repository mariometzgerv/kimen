import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.css']
})
export class PageNewsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
