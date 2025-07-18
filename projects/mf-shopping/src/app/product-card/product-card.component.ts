import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { CommonsLibService } from '@commons-lib';
import { CommonsLibService } from '../../../../commons-lib/src/public-api';
import { IProductCard } from '../models/product-card.interface';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product?: IProductCard;

  constructor(private _commonsLibService: CommonsLibService) {}

  clickCard(): void {
    this._commonsLibService.sendData({
      name: this.product!.name,
      price: this.product!.price,
    });
  }
}
