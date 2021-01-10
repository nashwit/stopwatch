import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { convertTickToClockTime } from './utilities';
import { StoreState } from './interfaces';
import { isNull } from '@angular/compiler/src/output/output_ast';

const initialState: StoreState = {
    isRuning: false,
    currentClockTime: 0,
    laps: [],
    reset: true
};

@Injectable({
    providedIn: 'root'
})
export class AppStoreService extends ObservableStore<StoreState> {

    constructor() {
        super({ logStateChanges: true, trackStateHistory: true });
        this.initializeState();
    }

    initializeState(): void {
        this.setState(this.getStateFromLocalStorage(), StopwatchStoreActions.InitializeState);
    }

    setStateInLocalStorage(currentClockTime: number): void {
        this.setState({ currentClockTime }, StopwatchStoreActions.GetCurrentClockTime);
        localStorage.setItem('stopwacthState', JSON.stringify(this.getState()));
        if (this.getState().isRuning) {
            localStorage.setItem('closingTime', JSON.stringify(new Date()));
        }
    }

    getStateFromLocalStorage(): StoreState {
        const localState: StoreState = JSON.parse(localStorage.getItem('stopwacthState'));
        this.getTimeDifference(localState);
        return localState ?? initialState;
    }

    startStopwatch(start: boolean): void {
        const isRuning = start;
        this.setState({ isRuning: true, reset: false }, StopwatchStoreActions.StartRuning);
    }

    pauseStopWatch(): void {
        const isRuning = false;
        this.setState({ isRuning }, StopwatchStoreActions.PauseRuning);

    }

    getTimeDifference(localState: StoreState): number {
        if (localState === null) {
            return null;
        }
        const closingTime: Date = JSON.parse(localStorage.getItem('closingTime'));
        localState.currentClockTime += closingTime && localState.isRuning ?
            Math.floor((new Date().getTime() - new Date(closingTime).getTime()) / 10) : 0;
    }


    addLap(currenttime: number): void {
        if (this.getState().isRuning) {
            const newLap = { time: convertTickToClockTime(currenttime), id: this.getState().laps.length };
            let laps = this.getState().laps;
            laps.push(newLap);
            this.setState({ laps }, StopwatchStoreActions.AddLap);
        }
    }
    removeLap(id: number): void {
        const laps = this.getState().laps.filter(lap => lap.id !== id);
        this.setState({ laps }, StopwatchStoreActions.RemoveLap);
    }

    clearAll(): void {
        this.setState(initialState, StopwatchStoreActions.InitializeState);
    }

}

export enum StopwatchStoreActions {
    GetCurrentClockTime = 'GET_CURRENT_CLOKC_TIME',
    InitializeState = 'INITIALIZE_STATE',
    StartRuning = 'START_RUNING',
    PauseRuning = 'PAUSE_RUNING',
    AddLap = 'ADD_LAP',
    RemoveLap = 'REMOVE_LAP',
    ClearAll = 'CLEAR_ALL'
}
