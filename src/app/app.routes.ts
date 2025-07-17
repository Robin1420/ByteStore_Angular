import { Routes } from '@angular/router';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: Products,
    pathMatch: 'full'
  },
  // Add a catch-all route to redirect to the products page
  { path: '**', redirectTo: '' }
];
