import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppStoreService } from 'src/app/shared/app-store.service';
import { Lap } from '../../shared/interfaces';

@Component({
  selector: 'app-laps',
  templateUrl: './laps.component.html',
  styleUrls: ['./laps.component.scss']
})
export class LapsComponent implements OnInit, OnDestroy {
  laps: Lap[] | Observable<Lap[]>;
  stateHistory = null;
  isHistoryVisible = false;
  subs = new Subscription();

  constructor(private appStoreService: AppStoreService) { }

  ngOnInit(): void {
    this.subs.add(this.appStoreService.stateChanged.subscribe(state => {
      if (state) {
        this.laps = state.laps;
      }
    }));
  }

  removeLap(lap: number): void {
    this.appStoreService.removeLap(lap);
  }

  viewStateHistory(): void {
    this.isHistoryVisible = !this.isHistoryVisible;
    this.stateHistory = this.appStoreService.stateHistory;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
