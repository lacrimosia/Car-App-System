import {Component} from 'angular2/core';
import {mainNav} from './navigation.component';
import {powerMenu} from './powerMenu.component';


// Root level app

@Component({
    selector: 'my-app',
    directives: [mainNav, powerMenu],
    template: `
    	<mainNav></mainNav>
    	<power-menu></power-menu>
    `
})

export class AppComponent { }
