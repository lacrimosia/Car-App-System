import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {mainNav} from './navigation.component';
import {routeService} from './routeService';

bootstrap(AppComponent, [routeService]);
