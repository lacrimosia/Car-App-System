import {Component} from 'angular2/core';
import {routeService} from './routeService';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {apps} from './apps.component';

@Component({
	selector: 'mainNav',
	template: `
	<div class="col-md-12">
		<ul class="nav nav-pills">
			<li role="presentation"><a href="#"><i class="fa fa-home"></i> Home</a></li>
			<li role="presentation"><a [routerLink]="['apps']"><i class="fa fa-desktop"></i> Apps</a></li>
			<li role="presentation"><a href="#"><i class="fa fa-location-arrow"></i> GPS</a></li>
			<li role="presentation"><a href="#"><i class="fa fa-cog"></i> Settings</a></li>
		</ul>
	</div>
		<!-- <p>Enter a candle</p>
		<input type="text" [(ngModel)]="candles">
		<button (click)="getCandle(candles)">Add Candle</button>

		<p *ngFor="#c of routeService.candle">{{ c }}</p>-->
	`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/apps', name: 'apps', component: apps }
])

export class mainNav{
 	// inject service
 	// creates service instance
 	constructor(public routeService: routeService){
		//s  console.log(routeService);
 	}

	  public Candle = this.routeService.candle;

 	getCandle(value){
		  this.routeService.candle.push(value);
		  console.log(this.routeService.candle);
 	}

 }