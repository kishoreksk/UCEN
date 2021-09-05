import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrationComponent } from './administration/administration.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PlacementComponent } from './placement/placement.component';
import { ResearchComponent } from './research/research.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { OthersComponent } from './others/others.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { VcComponent } from './administration/vc/vc.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavComponent,
    AdministrationComponent,
    DepartmentsComponent,
    PlacementComponent,
    ResearchComponent,
    FacilitiesComponent,
    OthersComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    VcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
