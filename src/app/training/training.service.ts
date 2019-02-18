import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrainingService {

    ongoingTraining$ = new BehaviorSubject<boolean>(false);

    constructor() {
    }
}
