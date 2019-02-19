import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SidenavListComponent} from '../../navigation/sidenav-list/sidenav-list.component';
import {AuthService} from '../auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                ReactiveFormsModule,
                FormsModule,
                MatFormFieldModule,
                MatDatepickerModule,
                MatButtonModule,
                FlexLayoutModule,
                MatListModule,
                MatIconModule,
                MatInputModule,
                BrowserAnimationsModule,
            ],
            declarations: [
                LoginComponent,
                SidenavListComponent,
            ],
            providers: [
                AuthService,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.ngOnInit();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.loginForm.valid).toBeFalsy();
    });


    it('form valid when filled with email and password minlength (8)', () => {
        component.loginForm.setValue({
            email: 'leif@gmail.com',
            password: 'testtest',
        });
        expect(component.loginForm.valid).toBeTruthy();
    });

    it('form invalid when filled with incorrect email and password minlength (8)', () => {
        component.loginForm.setValue({
            email: 'leifgmail.com',
            password: 'testtest',
        });
        expect(component.loginForm.valid).toBeFalsy();
    });

});
