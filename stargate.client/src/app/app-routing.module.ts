import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsListingComponent } from './persons-listing/persons-listing.component';
import { DutiesAdminComponent } from './duties-admin/duties-admin.component';
import { DutiesComponent } from './duties/duties.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  { path: '', component: PersonsListingComponent },
  { path: 'admin/:personId', component: DutiesAdminComponent },
  { path: 'duties/:personId', component: DutiesComponent },
  { path: 'credits', component: CreditsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
