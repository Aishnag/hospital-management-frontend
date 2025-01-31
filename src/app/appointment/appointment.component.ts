import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
 appointments:Appointment[]=[];
 ngOnInit():void{
  this.getAllAppointments();
 }
 constructor(private appointmentService:AppointmentService){}
getAllAppointments(){

  this.appointmentService.getAppointments().subscribe(data=>{
    this.appointments=data
  })

}
delete(id:number){
this.appointmentService.deleteappointment(id).subscribe(data=>{
  console.log(data);
  this.getAllAppointments();
})
}
}