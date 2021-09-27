import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';
import { DIARIES } from '../mock-diaries';



@Component({
  selector: 'app-diaries',
  templateUrl: './diaries.component.html',
  styleUrls: ['./diaries.component.css']
})
export class DiariesComponent implements OnInit {


  selectedDiary?: Diary;
  diaries:Diary[]=[];

  constructor(private diaryService: DiaryService) { }

  ngOnInit(): void {
    this.getDiaries();
  }

  getDiaries():void{
    this.diaryService.getDiaries().subscribe(diaries => this.diaries = diaries); 
  }

}


