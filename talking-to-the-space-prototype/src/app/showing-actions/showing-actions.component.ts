import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-showing-actions',
  templateUrl: './showing-actions.component.html',
  styleUrls: ['./showing-actions.component.css']
})
export class ShowingActionsComponent implements OnInit {

  constructor(public actionService: ActionService) { }

  ngOnInit(): void {
  }

}
