import { Routes } from '@angular/router';

//Parametros -> dashboard/:iduser 

export const homeRoutes: Routes = [
  {
    // path:'dashboard', //TODO: localhost:4200/home/dashboard
    // component: HomePageComponent
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.routes').then( m => m.tracksRoutes)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.routes').then( m => m.favoritesRoutes)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.routes').then( m => m.historyRoutes)
  },
  {
    path: 'home',
    loadChildren: () => import('@modules/home/home.routes').then( m => m.homeRoutes)
  },
  {
    path: '**',
    redirectTo: '/tracks'
  },
];
