import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/shared/app-store.service';
import { StopWatchService } from 'src/app/shared/stopwatch.service';
import { faStopwatch, faTrashAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  faStopwatch = faStopwatch;
  faTrash = faTrashAlt;
  faPlay = faPlay;
  faPause = faPause;

  isRuning: boolean = false;
  constructor(private appStoreService: AppStoreService, private stopWatchService: StopWatchService) { }

  ngOnInit(): void {
    this.appStoreService.stateChanged.subscribe(state => {
      if (state) {
        this.isRuning = state.isRuning;
      }
    });
  } 

  startStopWatch(): void {
    this.appStoreService.startStopwatch(true);
  }

  pauseStopWatch(): void {
    this.appStoreService.pauseStopWatch();
  }

  addLap(): void {
    this.stopWatchService.getLap();
  }

  clearAll(): void {
    this.appStoreService.clearAll();
  }
}
