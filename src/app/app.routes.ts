import { Routes } from '@angular/router';
import { sessionGuardFunctional } from '@core/guards/sessionv2.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then( m => m.authRoutes)
  },
  {
    //path: 'home', //TODO: localhost:4200/home
    path: '', //TODO: localhost:4200/
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.routes').then( m => m.homeRoutes),
    canActivate: [sessionGuardFunctional]
  },
];

