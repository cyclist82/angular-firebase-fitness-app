import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    OnDestroy
} from '@angular/core';
import {TrainingService} from '../../training/training.service';
import {AuthService} from 'src/app/auth/auth.service';
import {Subscription} from 'rxjs';
import {Exercise} from '../../training/exercise.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() sidenavToggle = new EventEmitter<void>();
    isAuth = false;
    authSubscription: Subscription;

    ongoingTraining = false;

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

    onToggleSidenav() {
        this.sidenavToggle.emit();
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
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }
}
