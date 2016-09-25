
import { Routes,
         RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'routeA', loadChildren: 'app/route_a/route_a.module' },
  { path: 'routeB', loadChildren: 'app/route_b/route_b.module' }
];


export const routing = RouterModule.forRoot(routes);
