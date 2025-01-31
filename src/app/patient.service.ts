import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }
  private baseUrl="http://localhost:8080/api/v1/patients"
  getpatient():Observable<Patient[]>
  {return this.httpclient.get<Patient[]>(`${this.baseUrl} `)}
  deletePatients(id:number):Observable<Object>{
return this.httpclient.delete(`${this.baseUrl}/${id}`)
  }
  createPatient(patient:Patient):Observable<Patient>
  {return this.httpclient.post<Patient>(`${this.baseUrl} `,patient)}

  getPatientById(id:Number):Observable<Patient>{
return this.httpclient.get<Patient>(`${this.baseUrl}/${id}`);
  }
  UpdatePatientList(id:number,patient:Patient):Observable<Object>{
  return this.httpclient.put<Patient>(`${this.baseUrl}/${id}`,patient);
  }
}


