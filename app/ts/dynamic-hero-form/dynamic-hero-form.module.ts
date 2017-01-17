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
    DynamicHeroFormComponent
} from './dynamic-hero-form.component';

import {
    DynamicHeroFormQuestionComponent
} from './dynamic-hero-form-question.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [DynamicHeroFormComponent, DynamicHeroFormQuestionComponent],
    exports: [DynamicHeroFormComponent, DynamicHeroFormQuestionComponent]

})
export class DynamicHeroFormModule {}
