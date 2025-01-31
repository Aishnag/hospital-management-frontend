import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindash',
  standalone: false,
  
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patients:Patient[]=[];
constructor(private pService:PatientService){}
ngOnInit():void{
  this.getPatients();
}

getPatients(){
this.pService.getpatient().subscribe(data=>{
this.patients=data;
})
}
delete(id:number){
  this.pService.deletePatients(id).subscribe(data=>{
    console.log(data);
    this.getPatients();
  })
}
}
