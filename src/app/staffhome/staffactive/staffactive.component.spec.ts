import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffactiveComponent } from './staffactive.component';

describe('StaffactiveComponent', () => {
  let component: StaffactiveComponent;
  let fixture: ComponentFixture<StaffactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffactiveComponent]
    });
    fixture = TestBed.createComponent(StaffactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
