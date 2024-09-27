import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { MembershipComponent } from './membership/membership.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)  },
  {
    path: 'news',
    component:NewsComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'membership',
    component:MembershipComponent
  },
  {
    path: 'amenities',
    component:AmenitiesComponent
  },
  {
    path: 'contact-us',
    component:ContactUsComponent
  }
];
