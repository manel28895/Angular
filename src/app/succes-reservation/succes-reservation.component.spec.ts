import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesReservationComponent } from './succes-reservation.component';

describe('SuccesReservationComponent', () => {
  let component: SuccesReservationComponent;
  let fixture: ComponentFixture<SuccesReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
