import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { SproductComponent } from './components/sproduct/sproduct.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { FeatureComponent } from './components/home/feature/feature.component';
import { Product1Component } from './components/home/product1/product1.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { SmBannerComponent } from './components/home/sm-banner/sm-banner.component';
import { Banner3Component } from './components/home/banner3/banner3.component';
import { NewsletterComponent } from './components/home/newsletter/newsletter.component';
import { Product2Component } from './components/home/product2/product2.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';

import { AddToCartComponent } from './components/user/add-to-cart/add-to-cart.component';
import { AddReclamationComponent } from './components/user/add-reclamation/add-reclamation.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { ProductManagementComponent } from './components/admin/product-management/product-management.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { ComplaintManagementComponent } from './components/admin/complaint-management/complaint-management.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    BlogComponent,
    CartComponent,
    ContactComponent,
    ShopComponent,
    SproductComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    FeatureComponent,
    Product1Component,
    BannerComponent,
    SmBannerComponent,
    Banner3Component,
    NewsletterComponent,
    Product2Component,
    FooterComponent,
    UnauthorizedComponent,
    EditProfileComponent,

    AddToCartComponent,
    AddReclamationComponent,
    DashboardComponent,
    UserHomeComponent,
    ProductManagementComponent,
    UserManagementComponent,
    ComplaintManagementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
