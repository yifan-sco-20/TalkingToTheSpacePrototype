import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiariesComponent } from './diaries/diaries.component';

import { FormsModule } from '@angular/forms';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { ShowingActionsComponent } from './showing-actions/showing-actions.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule} from '@angular/material/menu';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { LogInComponent } from './log-in/log-in.component';
import { LoginInDialogComponent } from './login-in-dialog/login-in-dialog.component';





@NgModule({
  
  declarations: [
    AppComponent,
    DiariesComponent,
    DiaryDetailComponent,
    ShowingActionsComponent,
    DashboardComponent,
    MainNavComponent,
    SignUpComponent,
    SignUpDialogComponent,
    LogInComponent,
    LoginInDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


