import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewTrainingComponent} from './new-training.component';
import {MatCardModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

describe('NewTrainingComponent', () => {
    let component: NewTrainingComponent;
    let fixture: ComponentFixture<NewTrainingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatCardModule,
                MatOptionModule,
                MatSelectModule,
                BrowserAnimationsModule,
            ],
            declarations: [NewTrainingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewTrainingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
