import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardsComponent } from './cards/cards.component';
import { MarketComponent } from './store/market/market.component';
import { HomeComponent } from './store/home/home.component';
import { StudioComponent } from './store/studio/studio.component';
import { ProgramsComponent } from './store/programs/programs.component';
import { CommunityComponent } from './store/community/community.component';
import { MyBLComponent } from './store/my-bl/my-bl.component';
import { WantComponent } from './store/want/want.component';
import { CartComponent } from './store/cart/cart.component';
import { MyStoreComponent } from './store/my-store/my-store.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    JumbotronComponent,
    CardsComponent,
    MarketComponent,
    HomeComponent,
    StudioComponent,
    ProgramsComponent,
    CommunityComponent,
    MyBLComponent,
    WantComponent,
    CartComponent,
    MyStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
