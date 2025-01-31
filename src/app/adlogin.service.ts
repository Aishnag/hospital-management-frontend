import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdloginService {

  constructor() { }

  authicate(username1:string,password1:string){
    if(username1=="geetu"&& password1=="Geet19"){
      sessionStorage.setItem(`username1`,username1);
      return true;
    }else{
      return false;
    }
  }

  isAdminLogin(){
    console.log("Admin is succesful login.");
  let user =  sessionStorage.getItem(`username1`);
    return !(user==null);
  }

  isAdminLogout(){
    console.log("Admin is succesfully logout.");
    sessionStorage.removeItem(`username1`);
  }
}
