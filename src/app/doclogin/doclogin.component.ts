import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocAuthService } from '../doc-auth.service';

@Component({
  selector: 'app-doclogin',
  standalone: false,
  
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
  constructor(private router:Router, private docAuth:DocAuthService){}
username:string="";
password:string="";
inValidLogin=false;
checkLogin(){
  if(this.docAuth.authicate(this.username,this.password)){
   this.router.navigate([`docdash`]);
   this.inValidLogin=false;
  }else{
    alert(`wrong credentials`)
    this.router.navigate([`home`]);
    this.inValidLogin=true;
  }
  return this.inValidLogin;
}
}
