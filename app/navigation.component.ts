import {Component} from 'angular2/core';
import {routeService} from './routeService';

@Component({
	selector: 'mainNav',
	template: `
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Apps</a></li>
			<li><a href="#">GPS</a></li>
			<li><a href="#">Settings</a></li>
		</ul>

		<p>Enter a candle</p>
		<input type="text" [(ngModel)]="candles">
		<button (click)="getCandle(candles)">Add Candle</button>

		<p *ngFor="#c of routeService.candle">{{ c }}</p>
		
	`
})
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