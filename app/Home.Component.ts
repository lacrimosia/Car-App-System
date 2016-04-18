import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'home-page',
	template: `

	<div class="container">
	  	<div class="row">
	  		<div class="col-md-12">
	  			<h1>Home Page</h1>
				<img src="assets/images/candy.jpg">
	  		</div>
	  	</div>
	  </div>

	`
})
export class HomeComponent{
	
}