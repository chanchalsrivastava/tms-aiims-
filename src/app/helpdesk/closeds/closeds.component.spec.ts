import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedsComponent } from './closeds.component';

describe('ClosedsComponent', () => {
  let component: ClosedsComponent;
  let fixture: ComponentFixture<ClosedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedsComponent]
    });
    fixture = TestBed.createComponent(ClosedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
