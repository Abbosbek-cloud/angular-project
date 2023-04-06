import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(params.get('productId'));

    this.product = products.find((item) => item.id === productIdFromRoute);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} added to cart!`);
  }
}
