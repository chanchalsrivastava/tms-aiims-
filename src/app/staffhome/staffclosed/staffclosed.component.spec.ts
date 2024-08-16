import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffclosedComponent } from './staffclosed.component';

describe('StaffclosedComponent', () => {
  let component: StaffclosedComponent;
  let fixture: ComponentFixture<StaffclosedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffclosedComponent]
    });
    fixture = TestBed.createComponent(StaffclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
