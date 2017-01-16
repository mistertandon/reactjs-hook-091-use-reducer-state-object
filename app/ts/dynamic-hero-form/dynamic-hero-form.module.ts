import {
    CommonModule
} from '@angular/common';

import {
    NgModule
} from '@angular/core';

import {
    DynamicHeroFormComponent
} from './dynamic-hero-form.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DynamicHeroFormComponent],
    exports: [DynamicHeroFormComponent]

})
export class DynamicHeroFormModule {}
