import {Component} from 'angular2/core';
import {routeService} from './routeService';

@Component({
	selector: 'power-menu',
	template: `
	<div class="col-md-12">
		<ul class="nav nav-pills">
			<li role="presentation"><a href="#"><i class="fa fa-power-off"></i> Turn Off</a></li>
			<li role="presentation"><a href="#"><i class="fa fa-cog"></i> Sleep </a></li>
			<li role="presentation"><a href="#"><i class="fa fa-refresh"></i> Restart</a></li>
		</ul>
	</div>
	`
})

export class powerMenu{


}