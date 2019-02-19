import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
    exercises: Exercise[] = [];

    constructor(private trainingService: TrainingService, private router: Router) {
    }

    ngOnInit() {
        this.exercises = this.trainingService.getAvailableExercises();
    }

    onStartTraining(form: NgForm) {
        this.trainingService.startExercise(form.value.exercise);
        this.router.navigate(['/training']);
    }
}
