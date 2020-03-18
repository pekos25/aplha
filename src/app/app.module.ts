import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'myorders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuardService] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuardService] },

  { path: 'admin-products', component: AdminProductsComponent, canActivate: [AuthGuardService] },
  { path: 'admin-orders', component: AdminOrdersComponent, canActivate: [AuthGuardService] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
