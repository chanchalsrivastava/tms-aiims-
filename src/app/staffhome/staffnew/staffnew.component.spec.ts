import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffnewComponent } from './staffnew.component';

describe('StaffnewComponent', () => {
  let component: StaffnewComponent;
  let fixture: ComponentFixture<StaffnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffnewComponent]
    });
    fixture = TestBed.createComponent(StaffnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
