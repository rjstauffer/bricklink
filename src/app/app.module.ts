import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
//import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from 'src/environments/environment';


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
import { MarketNavBarComponent } from './store/market/market-nav-bar/market-nav-bar.component';
import { CatalogComponent } from './store/market/catalog/catalog.component';
import { StudioNavBarComponent } from './store/studio/studio-nav-bar/studio-nav-bar.component';
import { JumbotronStudioComponent } from './store/studio/jumbotron-studio/jumbotron-studio.component';
import { SearchStudioComponent } from './store/studio/search-studio/search-studio.component';
import { CardsStudioComponent } from './store/studio/cards-studio/cards-studio.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthComponentComponent } from './auth/auth-component/auth-component.component';


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
    MyStoreComponent,
    MarketNavBarComponent,
    CatalogComponent,
    StudioNavBarComponent,
    JumbotronStudioComponent,
    SearchStudioComponent,
    CardsStudioComponent,
    FooterComponent,
    AddProductComponent,
    AuthComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
