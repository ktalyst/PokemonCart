import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    OverlayPanelModule,
    ButtonModule,
    PaginatorModule
  ],
  exports: [ProductListComponent]
})
export class ProductListModule {
}
