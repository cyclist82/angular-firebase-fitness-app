import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from '../training.service';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit() {
    }

    onStartTraining() {
        this.trainingService.ongoingTraining$.next(true);
    }
}
