import { AccountComponent } from './components/account/account.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PackagesComponent } from './components/packages/packages.component';
import { WeedingEventComponent } from './components/weeding-event/weeding-event.component';
import { SpaComponent } from './components/spa/spa.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { FacilitieComponent } from './components/facilitie/facilitie.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { DiningComponent } from './components/dining/dining.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { LocalAttrectionComponent } from './components/local-attrection/local-attrection.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', 
  pathMatch: 'full',
  redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'blogs', component: BlogsComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'gallery', component: GalleryComponent }, 
  {path: 'account', component: AccountComponent }, 
  {path: 'local-attraction', component: LocalAttrectionComponent },
  {path: 'dining', component: DiningComponent },
  {path: 'accommodation', component: AccommodationComponent },
  {path: 'facilities', component: FacilitieComponent },
  {path: 'promotions', component: PromotionsComponent },
  {path: 'spa', component: SpaComponent },
  {path: 'weeding&events', component: WeedingEventComponent },
  {path: 'packages', component: PackagesComponent },
  {path: '**', component: NotFoundComponent }




];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
