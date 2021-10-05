import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiariesComponent } from './diaries/diaries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'diaries', component: DiariesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DiaryDetailComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signupdialog', component: SignUpDialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }