import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {
constructor(private medicineService:MedicineService,private router:Router){}

medicines:Medicine[]=[];

ngOnInit():void{
  this.getAllMedicines();
}

getAllMedicines(){
  this.medicineService.getMedicines().subscribe(data=>{
    this.medicines=data;
  })
}

update(id:number){
  this.router.navigate([`update-medicine`,id]);
}

delete(id:number){
  this.medicineService.deleteMedicines(id).subscribe(data=>{
    console.log(data);
    this.getAllMedicines();
  })
}



}
