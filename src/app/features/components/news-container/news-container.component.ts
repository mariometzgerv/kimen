import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/core/models/news.interface';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {

  user_id:      any = localStorage.getItem('user_id');
  user_id_role: any = localStorage.getItem('user_id_role');

  news: NewsModel[] = [];
  new_news: NewsModel[] = [];
  old_news: NewsModel[] = [];

  constructor(public router: Router, private http: HttpService) { }

  ngOnInit(): void {
    this.getNews();
  }

  async getNews() {
    await this.http.getNewsUser(this.user_id).toPromise().then(data => this.news = data);
    this.new_news = this.news.filter(x => x.was_read == false);
    this.old_news = this.news.filter(x => x.was_read == true);
  }

}
