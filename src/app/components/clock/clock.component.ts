import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClockTime } from '../../shared/interfaces';
import { StopWatchService } from '../../shared/stopwatch.service';
import { convertTickToClockTime } from '../../shared/utilities';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  clock: ClockTime = { mm: '00', ss: '00', ms: '00' };
  isRuning: boolean = false;
  subs = new Subscription();

  constructor(private stopWatchService: StopWatchService) {
    this.subs.add(this.stopWatchService.currentClock$.subscribe(clock => {
      this.clock =  convertTickToClockTime(clock);
    }));
    this.subs.add(this.stopWatchService.isRuning.subscribe(isRuning => {
      this.isRuning = isRuning;
    }));
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
