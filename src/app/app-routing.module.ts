import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ProductPageComponent } from './pages/store/product-page/product-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { PetsPageComponent } from './pages/store/pets-page/pets-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';


const routes: Routes = [
  {path:'', children:[
    { path:'',component:ProductPageComponent  },
  {path:'cart', component:CartPageComponent}
]},
{path:'account', component:FramePageComponent,
children:[
  {path:'pets',component:PetsPageComponent}
]},
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path:'reset-password', component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
