import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent {
  //Form variables

  checklist = [
    { id: 1, value: 'Aldosterone test', isSelected: false },
    { id: 2, value: 'ADHD Screening', isSelected: false },
    { id: 3, value: 'Albumin Blood test', isSelected: false },
    { id: 4, value: 'Alcohol use screening test', isSelected: false },
    { id: 5, value: 'Allergy skin test', isSelected: false },
    { id: 6, value: 'Amylase test', isSelected: false },
    { id: 7, value: 'Anoscopy', isSelected: false },
    { id: 8, value: 'Anoscopy', isSelected: false },
  ];

  symptoms!: string;
  test!: string;
  investigation!: string;
  data!: {};

  constructor(
    private formBuilder: FormBuilder,
    private jsonDataService: PatientService,
    public patient: PatientService
  ) {}
  //select Test
  isAllSelected(item: any) {
    this.checklist.forEach((val) => {
      if (val.id == item.id) {
        val.isSelected = !val.isSelected;
        this.test = val.value;
      } else {
        val.isSelected = false;
      }
    });
  }
  //select symptoms
  onSelect(event: any) {
    this.symptoms = event.target.value;
  }
  //select Investigation
  onSelectInverstigation(event: any) {
    this.investigation = event.target.value;
  }

  onSubmit() {
    this.data = {
      symptoms: this.symptoms,
      test: this.test,
      investigation: this.investigation,
    };
  }
  ngOnInit() {
    //Add form  default value
    this.symptoms = 'Flu';
    this.investigation = 'Angiocardiography';
    this.test = 'Aldosterone test';
  }
}
