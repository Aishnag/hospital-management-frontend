import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
constructor(private medicineService:MedicineService, private router:Router){}
medicine:Medicine=new Medicine();
saveMedicines(){
  this.medicineService.createMedicine(this.medicine).subscribe(data=>{
    console.log(data);
    
  })
}
onSubmit(){
  this.saveMedicines();
  this.goToViewMedicine();
}
goToViewMedicine(){
  this.router.navigate([`/view-medicine`])
}
}
