import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private time$ = new BehaviorSubject<number>(this.currentTime(0));
  constructor() {
    this.startClock();
  }

  getTimeObservable() {
    return this.time$.asObservable();
  }

  private startClock() {
    let ind = 1;
    setInterval(() => {
      this.time$.next(this.currentTime(ind));
      ind++;
    }, 1000);
  }

  private currentTime(ind: number) {
    return ind;
  }
}
