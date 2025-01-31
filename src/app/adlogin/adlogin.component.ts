import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdloginService } from '../adlogin.service';

@Component({
  selector: 'app-adlogin',
  standalone: false,
  
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {

constructor(private router:Router, private adLogin:AdloginService){}
username:string="";
password:string="";
inValidLogin=false;
checkLogin(){
  if(this.adLogin.authicate(this.username,this.password)){
   this.router.navigate([`admin`]);
   this.inValidLogin=false;
  }else{
    alert(`wrong credentials`)
    this.router.navigate([`home`]);
    this.inValidLogin=true;
  }
  return this.inValidLogin;
}
}

