import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigndataComponent } from './assigndata.component';

describe('AssigndataComponent', () => {
  let component: AssigndataComponent;
  let fixture: ComponentFixture<AssigndataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssigndataComponent]
    });
    fixture = TestBed.createComponent(AssigndataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
