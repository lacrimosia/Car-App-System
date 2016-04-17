import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {appsComponent} from './apps.component';
import {HomeComponent} from './Home.Component';
import {GPSComponent} from './GPS.component';
import {SettingsComponent} from './Settings.component';

// Root level app

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    	<ul class="nav nav-pills">
			<li><a [routerLink]="['/Home']">Home</a></li>
			<li><a [routerLink]="['/Apps']">Apps</a></li>
			<li><a [routerLink]="['/GPS']">GPS</a></li>
			<li><a [routerLink]="['/Settings']">Settings</a></li>
		</ul>
	</div>
  </div>
 </div>
 <router-outlet></router-outlet>

    `
})

@RouteConfig([
		{ path: '/', component: HomeComponent, as: 'Home' },
		{ path: '/apps', component: appsComponent, as: 'Apps'},
		{ path: '/gps', component: GPSComponent, as: 'GPS' },
		{ path: '/settings/...', component: SettingsComponent, as: 'Settings' }
])
export class AppComponent {

 }
