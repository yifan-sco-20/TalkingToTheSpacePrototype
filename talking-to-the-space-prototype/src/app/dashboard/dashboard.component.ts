import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../diary.service';
import { Diary } from '../diary';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private diaryService: DiaryService) { }

  diaries:Diary[]=[];
  ngOnInit(): void {
  }

  getDiaries(): void {
    this.diaryService.getDiaries()
      .subscribe(diaries => this.diaries = diaries.slice(1, 5));
  }

}
