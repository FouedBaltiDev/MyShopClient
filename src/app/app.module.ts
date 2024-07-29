import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { SproductComponent } from './sproduct/sproduct.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeatureComponent } from './home/feature/feature.component';
import { Product1Component } from './home/product1/product1.component';
import { BannerComponent } from './home/banner/banner.component';
import { SmBannerComponent } from './home/sm-banner/sm-banner.component';
import { Banner3Component } from './home/banner3/banner3.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { Product2Component } from './home/product2/product2.component';
import { FooterComponent } from './footer/footer.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
