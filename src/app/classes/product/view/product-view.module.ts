import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductViewComponent} from './product-view.component';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SpinnerModule} from 'primeng/spinner';
import {KeyFilterModule} from 'primeng/keyfilter';

const routes: Routes = [
  {
    path: '',
    component: ProductViewComponent
  }
];


@NgModule({
  declarations: [ProductViewComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    SpinnerModule,
    ButtonModule,
    KeyFilterModule
  ],
  exports: [ProductViewComponent]
})
export class ProductViewModule {
}
