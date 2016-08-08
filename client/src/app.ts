import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, Location, RouterLink, AsyncRoute} from 'angular2/router';
import {Widgets} from './widgets/widgets';
import {About} from './about/about.component';
import {Git} from './git/git.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES, RouterLink]
})
@RouteConfig([
  {path: '/widgets', name: 'Widgets', component: Widgets, useAsDefault: true},
  {path: '/about'  , name: 'About'  , component: About},
  {path: '/git'   , name: 'Git'   , component: Git},
])
export class App {
    constructor(public router: Router) {
  }
}
