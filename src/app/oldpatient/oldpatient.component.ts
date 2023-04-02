import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PatientService } from './../services/patient.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-oldpatient',
  templateUrl: './oldpatient.component.html',
  styleUrls: ['./oldpatient.component.css'],
})
export class OldpatientComponent {
  loginForm: any = FormGroup;
  submitted = false;
  email!: string;
  password!: string;
  data!: {};

  constructor(
    private formBuilder: FormBuilder,
    public patient: PatientService,
    private router: Router
  ) {}
  //Add user form actions
  get formControls() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.data = {
      email: this.email,
      password: this.password,
    };
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {

      const matchingUser = this.patient.patients.filter(
        (el: { email: string; password: string }) =>
          el.email === this.email && el.password === this.password
      )[0];
    
      if (matchingUser != undefined) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'patient has been found',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/consultation']);
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Patient not found',
          showConfirmButton: false,
          timer: 1500,
        });
      }

      this.data = {
        email: '',
        password: '',
      };
    

      this.loginForm = this.formBuilder.group({
        email: [''],
        password: [''],
      });
    }
  }
  ngOnInit() {
    //Add form validations
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
     
    });
  }
}
