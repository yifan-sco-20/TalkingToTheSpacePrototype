import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login-in-dialog',
  templateUrl: './login-in-dialog.component.html',
  styleUrls: ['./login-in-dialog.component.css']
})
export class LoginInDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
