import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './store/cart/cart.component';
import { CommunityComponent } from './store/community/community.component';
import { HomeComponent } from './store/home/home.component';
import { MarketComponent } from './store/market/market.component';
import { MyBLComponent } from './store/my-bl/my-bl.component';
import { MyStoreComponent } from './store/my-store/my-store.component';
import { ProgramsComponent } from './store/programs/programs.component';
import { StudioComponent } from './store/studio/studio.component';
import { WantComponent } from './store/want/want.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { AuthComponentComponent } from './auth/auth-component/auth-component.component';

const routes: Routes = [
  {path: 'market', component: MarketComponent},
  {path: '', component: HomeComponent},
  {path: 'studio', component: StudioComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'myStore', component: MyStoreComponent},
  {path: 'myBL', component: MyBLComponent},
  {path: 'want', component: WantComponent}, 
  {path: 'cart', component: CartComponent},
  {path: 'admin', component: AddProductComponent},
  {path: 'auth', component: AuthComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
