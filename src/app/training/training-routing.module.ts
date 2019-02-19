import {TrainingComponent} from './training.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewTrainingComponent} from './new-training/new-training.component';
import {PastTrainingComponent} from './past-training/past-training.component';
import {AuthGuard} from './../auth/auth.guard';
import {CommonModule} from '@angular/common';

const trainingRoutes: Routes = [
    {
        path: 'training',
        component: TrainingComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'newTraining', component: NewTrainingComponent},
            {path: 'pastTraining', component: PastTrainingComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(trainingRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class TrainingRoutingModule {
}
