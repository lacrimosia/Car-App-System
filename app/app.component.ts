import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink, RouterOutlet} from 'angular2/router';
import {apps} from './apps.component';

// Root level app

@Component({
    selector: 'my-app',
    directives: [RouterOutlet, RouterLink, ROUTER_DIRECTIVES],
    template: `
    	<ul>
			<li><a href="#">Home</a></li>
			<li><a [router-link]="['/apps']">Apps</a></li>
			<li><a href="#">GPS</a></li>
			<li><a href="#">Settings</a></li>
		</ul>

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<router-outlet></router-outlet>
				</div>
			</div>
		</div>
    `
})

@RouteConfig([
		{ path: '/apps', as: 'apps', component: apps}
])
export class AppComponent { }
