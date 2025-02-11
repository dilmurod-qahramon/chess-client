import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private time$ = new BehaviorSubject<string>(this.currentTime(0));
  constructor() {
    this.startClock();
  }

  getTimeObservable() {
    return this.time$.asObservable();
  }

  private startClock() {
    let ind = 59;
    setInterval(() => {
      this.time$.next(this.currentTime(ind));
      ind--;
    }, 1000);
  }

  private currentTime(ind: number) {
    if (ind < 10) {
      return `00:0${ind}`;
    }
    return `00:${ind}`;
  }
}
