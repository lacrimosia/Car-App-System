import {Component} from 'angular2/core';
import {mainNav} from './navigation.component';

// Root level app

@Component({
    selector: 'my-app',
    directives: [mainNav],
    template: `
    	<mainNav></mainNav>
    `
})
export class AppComponent { }
