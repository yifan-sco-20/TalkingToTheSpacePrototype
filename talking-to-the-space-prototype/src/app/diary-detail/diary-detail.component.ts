import { Component, OnInit, Input } from '@angular/core';
import { Diary } from '../diary';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css']
})
export class DiaryDetailComponent implements OnInit {

  @Input() diary?: Diary;

  constructor(
    private route: ActivatedRoute,
    private diaryService: DiaryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDiary();
  }

  getDiary(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.diaryService.getDiary(id)
      .subscribe(diary => this.diary = diary);
  }
  goBack(): void {
    this.location.back();
  }
}
