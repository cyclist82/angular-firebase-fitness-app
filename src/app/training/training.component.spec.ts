import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainingComponent} from './training.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatProgressSpinnerModule, MatTabsModule} from '@angular/material';
import {CurrentTrainingComponent} from './current-training/current-training.component';
import {RouterModule} from '@angular/router';

describe('TrainingComponent', () => {
    let component: TrainingComponent;
    let fixture: ComponentFixture<TrainingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                RouterModule,
                MatTabsModule,
                MatProgressSpinnerModule,
            ],
            declarations: [
                TrainingComponent,
                CurrentTrainingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TrainingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
