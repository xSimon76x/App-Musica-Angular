import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// Rutas a usar a partir de /auth
export const authRoutes: Routes = [
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

