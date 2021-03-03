import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRenderComponent } from './signup-render.component';

describe('SignupRenderComponent', () => {
  let component: SignupRenderComponent;
  let fixture: ComponentFixture<SignupRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
