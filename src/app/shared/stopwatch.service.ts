import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, from, interval, of, Subject, Subscription } from 'rxjs';
import { filter, map, scan, startWith, switchMap } from 'rxjs/operators';
import { AppStoreService } from './app-store.service';


@Injectable({
  providedIn: 'root'
})
export class StopWatchService implements OnDestroy {

  latestTime: number = this.appStoreService.getStateFromLocalStorage().currentClockTime;
  currentClock$ = new BehaviorSubject<number>(this.latestTime);

  stateHistory = null;
  isHistoryVisible = false;
  subs = new Subscription();
  tenthSecond$ = interval(10);
  isReset = new Subject<boolean>();
  isRuning = new Subject<boolean>();


  constructor(private appStoreService: AppStoreService) {
    this.subs.add(
      this.appStoreService.stateChanged.subscribe(state => {
        if (state) {
          this.isReset.next(state.reset);
          this.isRuning.next(state.isRuning);
        }
      }));

    window.onbeforeunload = () => {
      this.setLatestTimeinLocalStorgae();
    };
  }

  stopwatch$ =
    from(this.isRuning)
      .pipe(
        startWith(false),
        switchMap(val =>
          (val ? this.tenthSecond$ : of(this.latestTime))
        ),
        scan((acc, curr) =>
          (curr === 0 || curr === acc ? this.latestTime : this.latestTime + 1), 0)
      ,
      )
      .subscribe((val: any) => {
        const newtick = val;
        this.latestTime = newtick;
        this.currentClock$.next(newtick);
      }
      );

  reset$ =
    from(this.isReset)
      .pipe(
        startWith(false),
        filter(val => val)
      ).subscribe(() => {
        this.latestTime = 0;
      });


  calcTimer(acc: number, curr: number): number {
    // if (this.isReset) {
    //   return 0;
    // }

    return curr === 0 || curr === acc ? this.latestTime : this.latestTime + 1;
  }

  getLap(): void {
    this.appStoreService.addLap(this.latestTime);
  }


  viewStateHistory(): void {
    this.isHistoryVisible = !this.isHistoryVisible;
    this.stateHistory = this.appStoreService.stateHistory;
  }


  ngOnDestroy(): void {
    this.stopwatch$.unsubscribe();
    this.subs.unsubscribe();
  }

  setLatestTimeinLocalStorgae(): void {
    this.appStoreService.setStateInLocalStorage(this.latestTime - 1);
  }


}
