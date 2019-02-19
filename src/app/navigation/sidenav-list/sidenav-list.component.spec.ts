import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidenavListComponent} from './sidenav-list.component';
import {AuthService} from '../../auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';

describe('SidenavListComponent', () => {
    let component: SidenavListComponent;
    let fixture: ComponentFixture<SidenavListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatIconModule,
                MatListModule,
                MatButtonModule,
            ],
            declarations: [SidenavListComponent],
            providers: [
                AuthService,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidenavListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
