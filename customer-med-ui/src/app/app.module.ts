import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DrugService } from './services/drug.service';
import { DrugCategoryMenuComponent } from './components/drug-category-menu/drug-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';
import { UserTemplateComponent } from './components/template/user-template/user-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/user/login/login.component';
import { ProductDrugListComponent } from './components/admin/product-drug-list/product-drug-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';




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
    NotFoundComponent,
    UnauthorizedComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    UserListComponent,
    AdminTemplateComponent,
    UserTemplateComponent,
    LoginComponent,
    ProductDrugListComponent,
    LoginStatusComponent,
    TransactionListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    RouterModule.forRoot([]),
  ],
  providers: [DrugService],
  bootstrap: [AppComponent],
})
export class AppModule {}
