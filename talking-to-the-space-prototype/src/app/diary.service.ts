import { Injectable } from '@angular/core';
import { Diary } from './diary';
import { DIARIES } from './mock-diaries';
import { Observable, of } from 'rxjs';
import { ActionService } from './action.service';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private actionService: ActionService) { }


  getDiaries(): Observable<Diary[]> {
    const diaries = of(DIARIES);
    this.actionService.add('ActionService: fetched diaries');
    return diaries;
  }

  getDiary(id: number): Observable<Diary> {
    const diary = DIARIES.find(d => d.id === id)!;
    this.actionService.add(`ActionService: fetched hero id=${id}`);
    return of(diary);
  }
}
