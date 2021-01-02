import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DegreeComponent } from './degree/degree.component';
import { LocationsComponent } from './locations/locations.component';
import { InstitutesComponent } from './institutes/institutes.component';


@NgModule({
  declarations: [SettingsComponent, SpecialtyComponent, DegreeComponent, LocationsComponent, InstitutesComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SettingsModule { }
