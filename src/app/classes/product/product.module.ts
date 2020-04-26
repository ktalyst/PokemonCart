import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./view/product-view.module').then(m => m.ProductViewModule),
    data: {
      breadcrumb: '',
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ]
})
export class ProductModule {
}
