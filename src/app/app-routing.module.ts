import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./classes/product/product.module').then(m => m.ProductModule),
    data: {
      breadcrumb: 'Products',
    },
  },
  {
    path: 'cart',
    loadChildren: () => import('./classes/cart/cart.module').then(m => m.CartModule),
    data: {
      breadcrumb: 'Cart',
    },
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
