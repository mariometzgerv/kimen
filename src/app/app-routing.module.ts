import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { PageAdminComponent } from './features/pages/page-admin/page-admin.component';
import { PageNewsComponent } from './features/pages/page-news/page-news.component';
import { PageScheduleComponent } from './features/pages/page-schedule/page-schedule.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'horario', component: PageScheduleComponent },
//  { path: 'calendario', component: CalendarPageComponent },
  { path: 'comunicados',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'todos', },
      { path: 'todos', component: PageNewsComponent, },
      { path: 'noleidos', component: PageNewsComponent, },
      { path: 'leidos', component: PageNewsComponent, },
      { path: 'nuevo', component: PageNewsComponent, },
      { path: 'borradores', component: PageNewsComponent, }
    ]
  },
  { path: 'administracion',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'alumnos', },
      { path: 'alumnos', component: PageAdminComponent, },
      { path: 'profesores', component: PageAdminComponent, },
      { path: 'cursos', component: PageAdminComponent, },
      { path: 'asignaturas', component: PageAdminComponent, },
      { path: 'cobranza', component: PageAdminComponent, }
    ]
  },
//  { path: '404', component: E404Component },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
