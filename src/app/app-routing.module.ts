import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { ProductManagementComponent } from './components/admin/product-management/product-management.component';
import { ComplaintManagementComponent } from './components/admin/complaint-management/complaint-management.component';
import { AddToCartComponent } from './components/user/add-to-cart/add-to-cart.component';
import { AddReclamationComponent } from './components/user/add-reclamation/add-reclamation.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'cart', component: CartComponent },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [UserGuard] },
  { path: 'add-to-cart', component: AddToCartComponent, canActivate: [UserGuard] },
  { path: 'add-reclamation', component: AddReclamationComponent, canActivate: [UserGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]}, // Route pour l'admin
  { path: 'user-home', component: UserHomeComponent, canActivate: [UserGuard] }, // Route pour les utilisateurs normaux
  { path: 'user-management', component: UserManagementComponent, canActivate: [AdminGuard] },
  { path: 'product-management', component: ProductManagementComponent, canActivate: [AdminGuard] },
  { path: 'complaint-management', component: ComplaintManagementComponent, canActivate: [AdminGuard] },
  { path: 'sign-up/:id', component: SignUpComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
