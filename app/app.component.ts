import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {appsComponent} from './apps.component';
import {HomeComponent} from './Home.Component';

// Root level app

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    	<ul>
			<li><a [routerLink]="['/Home']">Home</a></li>
			<li><a [routerLink]="['/Apps']">Apps</a></li>
			<li><a href="#">GPS</a></li>
			<li><a href="#">Settings</a></li>
		</ul>
 <router-outlet></router-outlet>

    `
})

@RouteConfig([
		{ path: '/', component: HomeComponent, as: 'Home' },
		{ path: '/apps', component: appsComponent, as: 'Apps'}
])
export class AppComponent {

 }
