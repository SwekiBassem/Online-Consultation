import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import patients from '../../assets/patient.json';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patients: any = [];
  constructor(private http: HttpClient) {
    this.patients = patients.patients;
  }
}
