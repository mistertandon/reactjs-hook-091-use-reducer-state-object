import {
    NgModule
} from '@angular/core';

import {
    RouterModule,
    Routes
} from '@angular/router';

import {
    HerosMasterComponent
} from './heros-master.component';

import {
    HeroDetailComponent
} from './hero-detail.component';

import {
    DashboardComponent
} from './dashboard.component';

const ROUTES_CONF: Routes = [{
    path: 'heros',
    component: HerosMasterComponent
}, {
    path: 'dashboardheroes',
    component: DashboardComponent
}, {
    path: 'herodetail/:id',
    component:  HeroDetailComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES_CONF)],
    exports: [RouterModule]

})
export class AppRoutingModule {}
