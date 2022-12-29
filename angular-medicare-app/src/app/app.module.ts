import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DrugService } from './services/drug.service';
import { Routes, RouterModule} from '@angular/router';
import { DrugCategoryMenuComponent } from './components/drug-category-menu/drug-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},

  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'drugs/:id', component: DrugDetailsComponent},
  {path: 'search/:keyword', component: DrugListComponent},
  {path: 'category/:id', component: DrugListComponent},
  {path: 'category', component: DrugListComponent},
  {path: 'drugs', component: DrugListComponent},
  {path: '', redirectTo: '/drugs', pathMatch: 'full'},
  {path: '**', redirectTo: '/drugs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DrugListComponent,
    DrugCategoryMenuComponent,
    SearchComponent,
    DrugDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent
     ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [DrugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
