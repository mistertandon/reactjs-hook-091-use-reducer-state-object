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
    AppComponent
} from './app.component';

import {
    HerosMasterComponent
} from './heros-master.component';

import {
    HeroDetailComponent
} from './hero-detail.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HerosMasterComponent, HeroDetailComponent],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule {}
