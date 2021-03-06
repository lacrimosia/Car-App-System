import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {SettingsComponent} from './Settings.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, { useValue: '/' }),
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
