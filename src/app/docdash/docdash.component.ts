import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Observable } from 'rxjs';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  standalone: false,
  
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
  patients:Patient[]=[];
  constructor(private patientService:PatientService,private router:Router){}
  baseUrl="http://localhost:8080/api/v1/patients"
ngOnInit():void{
  this.getPatients();
}
  getPatients(){
    this.patientService.getpatient().subscribe(data=>{
      this.patients=data
    })

  }
  update(id:number){
 this.router.navigate([`update-patient`,id]);
  }

  delete(id:number){
    this.patientService.deletePatients(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    });
    
  }

  view(id:number){
    this.router.navigate([`view-patient`,id])

  }
  
}
