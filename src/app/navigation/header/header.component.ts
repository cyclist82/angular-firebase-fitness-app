import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from '../../training/training.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() sidenavToggle = new EventEmitter<void>();

    ongoingTraining = false;

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit() {
        this.subscribeTraining();
    }

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }

    subscribeTraining() {
        this.trainingService.ongoingTraining$
            .subscribe((ongoing: boolean) => {
                this.ongoingTraining = ongoing;
            }, error => {
                console.log(error);
            });
    }
}
