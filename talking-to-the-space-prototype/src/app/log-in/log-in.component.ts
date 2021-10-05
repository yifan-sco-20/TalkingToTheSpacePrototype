import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SignUpDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}
