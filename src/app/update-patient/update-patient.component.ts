import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  patient:Patient= new Patient();
  id:number=0;
  constructor( private route:ActivatedRoute ,private patientService:PatientService,private router:Router){}

  ngOnInit():void{
    this.id=this.route.snapshot.params[`id`];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
     
    })
  }

  onSubmit(){
this.patientService.UpdatePatientList(this.id,this.patient).subscribe(data=>{console.log(data);
  this.goToNavigate();
});

  }
  goToNavigate(){
this.router.navigate([`docdash`]);
  }

}
