import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    OnDestroy
} from '@angular/core';
import {TrainingService} from '../../training/training.service';
import {AuthService} from './../../auth/auth.service';
import {Subscription} from 'rxjs';
import {Exercise} from '../../training/exercise.model';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
    @Output() closeSidenav = new EventEmitter<void>();
    isAuth = false;
    authSubscription: Subscription;

    ongoingTraining: boolean;

    constructor(
        private trainingService: TrainingService,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.subscribeTraining();
        this.authSubscription = this.authSubscribe();
    }

    private authSubscribe(): Subscription {
        return this.authService.authChange.subscribe((authStatus: boolean) => {
            this.isAuth = authStatus;
        });
    }

    onClose() {
        this.closeSidenav.emit();
    }

    subscribeTraining() {
        this.trainingService.exerciseChanged.subscribe(
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

    onLogout() {
        this.onClose();
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }
}
