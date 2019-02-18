import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from '../../training/training.service';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

    @Output() closeSidenav = new EventEmitter<void>();

    ongoingTraining: boolean;

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit() {
        this.subscribeTraining();
    }

    onClose() {
        this.closeSidenav.emit();
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
