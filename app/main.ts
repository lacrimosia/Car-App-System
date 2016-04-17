import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {mainNav} from './navigation.component';
import {settings} from './setting.component';
import {routeService} from './routeService';
import {powerMenu} from './powerMenu.component';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [routeService, ROUTER_PROVIDERS]);
