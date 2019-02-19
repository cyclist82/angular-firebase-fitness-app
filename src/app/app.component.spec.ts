import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from './navigation/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './auth/auth.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatToolbarModule,
                BrowserAnimationsModule,
            ],
            declarations: [
                AppComponent, SidenavListComponent, HeaderComponent,
            ],
            providers: [
                AuthService,
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'fitness-app'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('fitness-app');
    });
});
