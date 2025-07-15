import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.remotes.mfShopping,
        exposedModule: './ProductsComponent',
      }).then((m) => m.ProductsComponent),
  },
  {
    path: 'payment',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.remotes.mfPayment,
        exposedModule: './PaymentComponent',
      }).then((m) => m.PaymentComponent),
  },
];
