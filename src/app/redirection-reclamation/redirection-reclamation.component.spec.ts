import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionReclamationComponent } from './redirection-reclamation.component';

describe('RedirectionReclamationComponent', () => {
  let component: RedirectionReclamationComponent;
  let fixture: ComponentFixture<RedirectionReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectionReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
