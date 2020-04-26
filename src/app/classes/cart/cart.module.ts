import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {RouterModule, Routes} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {StepsModule} from 'primeng/steps';
import {MessageService} from 'primeng/api';

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }];

@NgModule({
  declarations: [CartComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ButtonModule,
    TableModule,
    StepsModule
  ],
  exports: [CartComponent],
  providers: [MessageService]
})
export class CartModule {
}
