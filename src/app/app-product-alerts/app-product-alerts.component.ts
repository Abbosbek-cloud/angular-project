import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-app-product-alerts',
  templateUrl: './app-product-alerts.component.html',
  styleUrls: ['./app-product-alerts.component.scss'],
})
export class AppProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
