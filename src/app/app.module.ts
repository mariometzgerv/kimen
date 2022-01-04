import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './core/components/login/login.component';
import { NewsContainerComponent } from './features/components/news-container/news-container.component';
import { PageNewsComponent } from './features/pages/page-news/page-news.component';
import { NewsItemComponent } from './features/components/news-item/news-item.component';
import { NewsSidebarComponent } from './features/components/news-sidebar/news-sidebar.component';
import { AdminSidebarComponent } from './features/components/admin-sidebar/admin-sidebar.component';
import { PageAdminComponent } from './features/pages/page-admin/page-admin.component';
import { StudentItemComponent } from './features/components/student-item/student-item.component';
import { StudentContainerComponent } from './features/components/student-container/student-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NewsContainerComponent,
    PageNewsComponent,
    NewsItemComponent,
    NewsSidebarComponent,
    AdminSidebarComponent,
    PageAdminComponent,
    StudentItemComponent,
    StudentContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
