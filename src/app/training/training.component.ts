import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
    ongoingTraining = false;

    constructor(
        private traingingService: TrainingService,
        private router: Router
    ) {}

    ngOnInit() {
        this.traingingService.ongoingTraining$.subscribe(
            ongoing => {
                this.ongoingTraining = ongoing;
                if (ongoing) {
                    this.router.navigate(['/training']);
                } else {
                    this.router.navigate(['/training/newTraining']);
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    exitTraining() {
        this.traingingService.ongoingTraining$.next(false);
    }
}
