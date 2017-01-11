import {
    NgModule
} from '@angular/core';

import {
    BrowserModule
} from '@angular/platform-browser';

import {
    FormsModule
} from '@angular/forms';

import {
    HeroService
} from './hero.service';

import {
    AppRoutingModule
} from './app-routing.module';

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

import {
    HeroFormComponent
} from './hero-form.component';

import {
    HeroFormReactiveComponent
} from './hero-form-reactive/hero-form-reactive.component';

import {
    HeroFormReactiveModule
} from './hero-form-reactive/hero-form-reactive.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HeroFormReactiveModule
    ],
    declarations: [
        AppComponent,
        HerosMasterComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroFormComponent,
    ],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule {}
