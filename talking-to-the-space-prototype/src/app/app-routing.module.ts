import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiariesComponent } from './diaries/diaries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'diaries', component: DiariesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DiaryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }