export interface StoreState {
    isRuning: boolean;
    currentClockTime: number;
    laps: Lap[];
    reset: boolean;
}

export interface ClockTime {
    mm: string;
    ss: string;
    ms: string;
}

export interface Lap {
    time: ClockTime;
    id: number; 
}

