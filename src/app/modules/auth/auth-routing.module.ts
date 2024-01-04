import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// Rutas a usar a partir de /auth
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: LoginPageComponent
  },
  // Para rutas que no existen se usa el **
  // Y luego hacia que ruta redireccionar
  {
    path: '**', 
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
