import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'doctor',
    pathMatch: 'full'
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then(x => x.DoctorModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(x => x.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
