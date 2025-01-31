import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
constructor(private medicineService:MedicineService, private route:ActivatedRoute,private router:Router){}
medicine:Medicine=new Medicine();
id:number=0;

ngOnInit():void{
  this.id=this.route.snapshot.params[`id`];
  this.medicineService.getMedicineById(this.id).subscribe(data=>{
  this.medicine=data;
  
  })
}
onSubmit(){
  this.medicineService.updateMedicines(this.id,this.medicine).subscribe(data=>{
    console.log(data);
    this.medicines();
  });

}
medicines(){
this.router.navigate([`view-medicine`]);

}
}
