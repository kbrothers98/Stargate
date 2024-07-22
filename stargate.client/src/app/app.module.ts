import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PersonsListingComponent } from './persons-listing/persons-listing.component';
import { DutiesAdminComponent } from './duties-admin/duties-admin.component';
import { DutiesComponent } from './duties/duties.component';
import { MatCell, MatCellDef, MatHeaderRow, MatRow, MatRowDef, MatTableModule } from '@angular/material/table';
import { ApiModule } from './api/api.module';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TimelineModule } from 'primeng/timeline';
import { CreditsComponent } from './credits/credits.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PersonsListingComponent,
    DutiesAdminComponent,
    DutiesComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    TimelineModule, 
    MatTableModule, MatCellDef, MatCell, MatRowDef, MatRow, MatHeaderRow, MatLabel, MatFormField, MatDatepickerModule, MatNativeDateModule,
    MatIconModule,
    FormsModule,
    NgbModule
    //ApiModule.forRoot({ rootUrl: 'https://localhost:7235' }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
