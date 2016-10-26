import {BUSY, BUSY_COMPLETED} from './CommonActionTypes';

export function busy() {
    return {
        type: BUSY
    };
}

export function busyCompleted() {
    return {
        type: BUSY_COMPLETED
    };
}