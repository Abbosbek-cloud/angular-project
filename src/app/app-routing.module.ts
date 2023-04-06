import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: AppProductListComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
