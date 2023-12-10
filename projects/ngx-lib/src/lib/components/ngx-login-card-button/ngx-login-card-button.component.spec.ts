import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoginCardButtonComponent } from './ngx-login-card-button.component';

describe('NgxLoginCardButtonComponent', () => {
  let component: NgxLoginCardButtonComponent;
  let fixture: ComponentFixture<NgxLoginCardButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxLoginCardButtonComponent]
    });
    fixture = TestBed.createComponent(NgxLoginCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
