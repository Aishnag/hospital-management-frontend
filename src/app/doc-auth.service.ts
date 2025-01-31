import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocAuthService {

  constructor() { }
  authicate(username:string,password:string){
    if(username=="aish"&& password=="Aish09"){
      sessionStorage.setItem(`username`,username);
      return true;
    }else{
      return false;
    }

  }

  idDocLogin(){
    console.log("doctor is login successfully.")
    let user=sessionStorage.getItem(`username`);
    return !(user==null);
  }
  idDocLogout(){
    console.log("doctor is logout successfully.")
    sessionStorage.removeItem(`username`);
    return false;
  }

}
