import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoginCardInputComponent } from './ngx-login-card-input.component';

describe('NgxLoginCardInputComponent', () => {
  let component: NgxLoginCardInputComponent;
  let fixture: ComponentFixture<NgxLoginCardInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxLoginCardInputComponent]
    });
    fixture = TestBed.createComponent(NgxLoginCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
