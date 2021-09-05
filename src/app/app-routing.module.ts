import { VcComponent } from './administration/vc/vc.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OthersComponent } from './others/others.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ResearchComponent } from './research/research.component';
import { PlacementComponent } from './placement/placement.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "administration", component: AdministrationComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "placement", component: PlacementComponent },
  { path: "research", component: ResearchComponent },
  { path: "facilities", component: FacilitiesComponent },
  { path: "others", component: OthersComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "contact", component: ContactComponent },
  { path: "vc", component: VcComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
