import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('mfShopping/ProductsComponent').then((m) => m.ProductsComponent),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('mfPayment/PaymentComponent').then((m) => m.PaymentComponent),
  },
];
