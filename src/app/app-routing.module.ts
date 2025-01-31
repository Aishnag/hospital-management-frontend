import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { DoctorAuthGuardService } from './doctor-auth-guard.service';

const routes: Routes = [
 { path:`admin`, component:AdmindashComponent,canActivate:[AdminAuthGuardService]},
 {path:`appointmentlist`,component:AppointmentComponent,canActivate:[AdminAuthGuardService]},
 {path:`create-appointment`,component:CreateAppointmentComponent,canActivate:[AdminAuthGuardService]},
 {path:`home`,component:HomeComponent},
 {path:``,redirectTo:`home`, pathMatch:`full`},
 {path:'docdash',component:DocdashComponent,canActivate:[DoctorAuthGuardService]},
 {path:`create-patient`,component:CreatePatientComponent,canActivate:[DoctorAuthGuardService]},
 {path:`view-medicine`,component:MedicinelistComponent,canActivate:[DoctorAuthGuardService]},
 {path:`create-medicine`,component:CreateMedicineComponent,canActivate:[DoctorAuthGuardService]},
 {path:`update-patient/:id`,component:UpdatePatientComponent,canActivate:[DoctorAuthGuardService]},
 {path:`view-patient/:id`,component:ViewPatientComponent,canActivate:[DoctorAuthGuardService]},
 {path:`update-medicine/:id`,component:UpdateMedicineComponent,canActivate:[DoctorAuthGuardService]},
 {path:`doclogin`,component:DocloginComponent},
 {path:`adlogin`,component:AdloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
