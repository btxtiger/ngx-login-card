import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoginCardFormFieldComponent } from './ngx-login-card-form-field.component';

describe('NgxLoginCardFormFieldComponent', () => {
  let component: NgxLoginCardFormFieldComponent;
  let fixture: ComponentFixture<NgxLoginCardFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxLoginCardFormFieldComponent]
    });
    fixture = TestBed.createComponent(NgxLoginCardFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
