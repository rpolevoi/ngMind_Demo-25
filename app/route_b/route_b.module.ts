import { NgModule }           from '@angular/core';
import { RouteBComponent } from './route_b.component';
import { routing }  from './route_b.routing';

@NgModule({
  imports:      [ routing ],
  declarations: [ RouteBComponent ],
  providers:    [ ]
})
export default class RouteBModule { }
