import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldpatientComponent } from './oldpatient.component';

describe('OldpatientComponent', () => {
  let component: OldpatientComponent;
  let fixture: ComponentFixture<OldpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
