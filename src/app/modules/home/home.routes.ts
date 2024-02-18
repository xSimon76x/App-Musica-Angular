import { Routes } from '@angular/router';
import { currentUser } from '@core/utils/getCurrentUser';

//Parametros -> dashboard/:iduser 

export const homeRoutes: Routes = [
  {
    // path:'dashboard', //TODO: localhost:4200/home/dashboard
    // component: HomePageComponent
    // path: 'tracks/:category',
    path: 'tracks',
    resolve: {
      currentUser,
    },
    loadChildren: () => import('@modules/tracks/tracks.routes').then( m => m.tracksRoutes)
  },
  {
    path: 'tracks/:category',
    resolve: {
      currentUser,
    },
    loadChildren: () => import('@modules/tracks/tracks.routes').then( m => m.tracksRoutes)
  },
  {
    path: 'favorites',
    resolve: {
      currentUser,
    },
    loadChildren: () => import('@modules/favorites/favorites.routes').then( m => m.favoritesRoutes)
  },
  {
    path: 'history',
    resolve: {
      currentUser,
    },
    loadChildren: () => import('@modules/history/history.routes').then( m => m.historyRoutes)
  },
  {
    path: '**',
    resolve: {
      currentUser,
    },
    redirectTo: '/tracks'
  },
];
