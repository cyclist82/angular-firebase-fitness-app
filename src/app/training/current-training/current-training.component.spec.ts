import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrentTrainingComponent} from './current-training.component';
import {MatCardModule, MatDialogModule, MatProgressSpinnerModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('CurrentTrainingComponent', () => {
    let component: CurrentTrainingComponent;
    let fixture: ComponentFixture<CurrentTrainingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatProgressSpinnerModule,
                MatDialogModule,
            ],
            declarations: [CurrentTrainingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrentTrainingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
