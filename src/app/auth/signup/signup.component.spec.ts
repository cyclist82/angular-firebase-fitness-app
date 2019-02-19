import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignupComponent} from './signup.component';
import {
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SignupComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatFormFieldModule,
                ReactiveFormsModule,
                FormsModule,
                MatDatepickerModule,
                MatCheckboxModule,
                MatNativeDateModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatToolbarModule,
            ],
            declarations: [
                SignupComponent,
            ],
            providers: [
                AuthService,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
