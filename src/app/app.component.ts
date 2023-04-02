import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { PatientService } from './services/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Form variables
registerForm:any = FormGroup;
submitted = false;
  firstname!: string;
  lastname!:string;
  email!:string;
  phone!:string;
  date!:Date;
  message!:string;
   data!:{};

constructor( private formBuilder: FormBuilder , private jsonDataService: PatientService,public patient:PatientService, ){}
//Add user form actions
}
