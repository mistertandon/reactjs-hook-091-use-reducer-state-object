import {
    CommonModule
} from '@angular/common';

import {
    NgModule
} from '@angular/core';

import {
    ReactiveFormsModule
} from '@angular/forms';

import {
    HeroFormReactiveComponent
} from './hero-form-reactive.component';

@NgModule({

    imports: [ReactiveFormsModule, CommonModule],
    declarations: [HeroFormReactiveComponent],
    exports: [HeroFormReactiveComponent]

})
export class HeroFormReactiveModule {}
