import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.scss'],
})
export class AppProductListComponent {
  products = [...products];

  share() {
    window.alert('Product added');
  }

  onNotify() {
    window.alert('You will be notified');
  }
}
