import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from './layouts/footer/footer.component';
import {MenuComponent} from './layouts/menu/menu.component';
import {TopbarComponent} from './layouts/topbar/topbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {LoaderInterceptor} from './services/interceptors/loader.interceptor';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessageService, SharedModule} from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule} from '@angular/forms';
import {CartReducer} from './store/cart.reducer';
import {LoaderReducer} from './store/loader.reducer';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {KeyFilterModule} from 'primeng/keyfilter';
import {SpinnerModule} from 'primeng/spinner';

/*export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}*/

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    /* TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps: [HttpClient]
       }
     }),*/
    StoreModule.forRoot({cart: CartReducer, loader: LoaderReducer}),
    PanelMenuModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    OverlayPanelModule,
    BreadcrumbModule,
    ProgressBarModule,
    SharedModule,
    AutoCompleteModule,
    FormsModule,
    ToastModule,
    TableModule,
    KeyFilterModule,
    SpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
