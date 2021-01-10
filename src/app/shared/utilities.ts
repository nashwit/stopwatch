import { ClockTime } from './interfaces';

export const convertTickToClockTime = (tick: number): ClockTime => {
    const ms = tick % 100;
    tick = (tick - ms) / 100;
    const secs = tick % 60;
    tick = (tick - secs) / 60;
    const mins = tick % 60;
    const hrs = (tick - mins) / 60;
    const time: ClockTime = { mm: mins.toString(), ss: secs.toString(), ms: ms.toString() };
    return time;
};
