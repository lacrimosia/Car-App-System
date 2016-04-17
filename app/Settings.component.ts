import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {UIComponent} from './UI.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';

@Component({
	selector: 'settings',
	directives: [ROUTER_DIRECTIVES],
	template: `<h1>Settings Page</h1>
       <ul class="nav nav-stacked">
			<li><a [routerLink]="['/settings','/UI']">Desktop UI</a></li>
		</ul>
		<router-outlet></router-outlet>
	`
})

@RouteConfig([
		{ path: '/ui', component: UIComponent, as: 'UI'}
])
export class SettingsComponent {

}