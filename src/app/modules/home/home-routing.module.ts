import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

//Parametros -> dashboard/:iduser 

const routes: Routes = [
  {
    // path:'dashboard', //TODO: localhost:4200/home/dashboard
    // component: HomePageComponent
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then( m => m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then( m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then( m => m.HistoryModule)
  },
  {
    path: 'home',
    loadChildren: () => import('@modules/home/home.module').then( m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
