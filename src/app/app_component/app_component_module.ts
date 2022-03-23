import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../features/routing/app_routing_module';
import { AppComponent } from './app_component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from '../features/pages/home_page/home_page_module';
import { TourPageModule } from '../features/pages/tour_page/tour_page_module';
import { MyTripsPageModule } from '../features/pages/my_trips_page/my_trips_page_module';
import { ProfilePageModule } from '../features/pages/profile_page/profile_page_module';
import { OrganizerPageModule } from '../features/pages/organizer_page/organizer_page_module';
import { HostIntroPageModule } from '../features/pages/host_intro_page/host_intro_page_module';
import { HostCreateIntroPageeModule } from '../features/pages/host_create_intro_page/host_create_intro_page.module';
import { HostCreateTripPageModule } from '../features/pages/host_create_trip_page/host_create_trip_page_module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    TourPageModule,
    MyTripsPageModule,
    ProfilePageModule,
    OrganizerPageModule,
    HostIntroPageModule,
    HostCreateIntroPageeModule,
    HostCreateTripPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponentModule { }
