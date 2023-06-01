import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { DiningComponent } from './components/dining/dining.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { FacilitieComponent } from './components/facilitie/facilitie.component';
import { WeedingEventComponent } from './components/weeding-event/weeding-event.component';
import { PackagesComponent } from './components/packages/packages.component';
import { SpaComponent } from './components/spa/spa.component';
import { LocalAttrectionComponent } from './components/local-attrection/local-attrection.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccountComponent } from './components/account/account.component';
import { SignupAndLoginComponent } from './components/account/signup-and-login/signup-and-login.component';
import { LogininfoComponent } from './components/account/logininfo/logininfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/account/login/login.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { NavComponent } from './components/nav/nav.component';
import { FancyWordsComponent } from './components/home/fancy-words/fancy-words.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    DiningComponent,
    AccommodationComponent,
    FacilitieComponent,
    WeedingEventComponent,
    PackagesComponent,
    SpaComponent,
    LocalAttrectionComponent,
    PromotionsComponent,
    NotFoundComponent,
    GalleryComponent,
    AboutComponent,
    BlogsComponent,
    ContactComponent,
    AccountComponent,
    SignupAndLoginComponent,
    LogininfoComponent,
    LoginComponent,
    SignUpComponent,
    NavComponent,
    FancyWordsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
