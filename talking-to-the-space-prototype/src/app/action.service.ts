import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ActionService {

  actions: string[] = [];

  add(action: string) {
    this.actions.push(action);
  }

  clear() {
    this.actions = [];
  }
}
