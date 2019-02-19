import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {TrainingService} from './training.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Exercise} from './exercise.model';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {

    ongoingTraining = false;
    exerciseSubscription: Subscription;

    constructor(
        private trainingService: TrainingService
    ) {
    }

    ngOnInit() {
        this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
            (exercise: Exercise) => {
                if (exercise) {
                    this.ongoingTraining = true;
                } else {
                    this.ongoingTraining = false;
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    ngOnDestroy(): void {
        this.exerciseSubscription.unsubscribe();
    }


}
