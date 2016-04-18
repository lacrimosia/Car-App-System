import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {UIComponent} from './UI.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
	selector: 'settings',
	template: `
	  <div class="container">
	  	<div class="row">
	  		<div class="col-md-12">
	  			<h1>Settings Page</h1>
	  		</div>
	  	</div>
	  </div>
		
	`
})
export class SettingsComponent {

}