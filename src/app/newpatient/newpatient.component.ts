import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PatientService } from './../services/patient.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css'],
})
export class NewpatientComponent {
  //Form variables
  registerForm: any = FormGroup;
  submitted = false;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  phone!: string;
  date!: Date;
  message!: string;
  data!: {};

  constructor(
    private formBuilder: FormBuilder,
    private jsonDataService: PatientService,
    public patient: PatientService,
    private router: Router
  ) {}
  //Add user form actions
  get MyformControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.data = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      phone: this.phone,
      date: this.date,
      message: this.message,
    };

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      this.patient.patients.push(this.data);
    
      this.data = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        date: '',
        message: '',
      };

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'patient has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/consultation']);

      this.registerForm = this.formBuilder.group({
        fname: [''],
        lname: [''],
        email: [''],
        password: [''],
        phone: [''],
        date: [''],
        message: [''],
      });
    }
  }
  ngOnInit() {
    //Add form validations
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      date: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
}