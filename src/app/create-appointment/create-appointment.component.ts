import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { HttpClient } from '@angular/common/http';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
appointment:Appointment=new Appointment();
baseUrl=""
constructor(private appointmentService:AppointmentService,private router:Router){}
saveAppointment(){
  this.appointmentService.createappiontment(this.appointment).subscribe(data=>{
    console.log(data);
    this.gotoAppointment();
  })
}
onSubmit(){
this.saveAppointment();
}

gotoAppointment(){
  this.router.navigate([`/appointmentlist`]);
}
}
