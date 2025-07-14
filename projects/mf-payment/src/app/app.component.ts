import { Component } from '@angular/core';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-root',
  imports: [PaymentComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
