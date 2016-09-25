import { NgModule }           from '@angular/core';
import { RouteAComponent } from './route_a.component';
import { routing }  from './route_a.routing';

@NgModule({
  imports:      [ routing ],
  declarations: [ RouteAComponent ],
  providers:    [ ]
})
export default class RouteAModule { }
