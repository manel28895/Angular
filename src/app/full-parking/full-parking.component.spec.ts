import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullParkingComponent } from './full-parking.component';

describe('FullParkingComponent', () => {
  let component: FullParkingComponent;
  let fixture: ComponentFixture<FullParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
