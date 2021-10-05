import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SignUpDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}



