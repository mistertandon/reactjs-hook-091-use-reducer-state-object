import {
    NgModule
} from '@angular/core';

import {
    BrowserModule
} from '@angular/platform-browser';

import {
    RouterModule
} from '@angular/router';

import {
    FormsModule
} from '@angular/forms';

import {
    HeroService
} from './hero.service';

import {
    AppComponent
} from './app.component';

import {
    HerosMasterComponent
} from './heros-master.component';

import {
    HeroDetailComponent
} from './hero-detail.component';

import {
    DashboardComponent
} from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([{
            path: 'heros',
            component: HerosMasterComponent
        }, {
            path:  'dashboardheroes',
            component: DashboardComponent
        }])
    ],
    declarations: [
        AppComponent,
        HerosMasterComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule {}
