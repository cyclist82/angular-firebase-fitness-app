import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TrainingRoutingModule} from './training/training-routing.module';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'welcome'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
