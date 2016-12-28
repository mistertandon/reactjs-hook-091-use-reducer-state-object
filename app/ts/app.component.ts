import {
    Component
} from '@angular/core';

export class Hero {

    id: number;
    name: string;
}

const HEROS: Hero[] = [{
    id: 11,
    name: 'Mr. Nice'
}, {
    id: 12,
    name: 'Narco'
}, {
    id: 13,
    name: 'Bombasto'
}, {
    id: 14,
    name: 'Celeritas'
}, {
    id: 15,
    name: 'Magneta'
}, {
    id: 16,
    name: 'RubberMan'
}, {
    id: 17,
    name: 'Dynama'
}, {
    id: 18,
    name: 'Dr IQ'
}, {
    id: 19,
    name: 'Magma'
}, {
    id: 20,
    name: 'Tornado'
}];

@Component({
    selector: 'my-app',
    template: `
		<h1>{{title}}</h1>
		<div class="row">
		<li *ngFor="let heroTemp of heroPComp">
			<span>{{heroTemp.id}}</span>{{heroTemp.name}}
		</li>
<!--			<label>For {{heroPComp.name}}</label>
			<input [(ngModel)]="heroPComp.name" placeholder="name">-->
		</div>
		`,
})
export class AppComponent {

    title = 'Tour of Heros';
    heroPComp: Hero[] = HEROS;
}
