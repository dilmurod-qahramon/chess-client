import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ONE_MIN, ONE_SEC } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private time$ = new BehaviorSubject<number>(this.currentTime(ONE_MIN));
  private counter = ONE_MIN;
  constructor() {
    this.startClock();
  }

  getTimeObservable() {
    return this.time$.asObservable();
  }

  restartTimer() {
    this.counter = ONE_MIN;
  }

  private startClock() {
    setInterval(() => {
      this.time$.next(this.currentTime(this.counter));
      if (this.counter == 0) {
        this.restartTimer();
      }
      this.counter--;
    }, ONE_SEC);
  }

  private currentTime(ind: number) {
    return ind;
  }
}
