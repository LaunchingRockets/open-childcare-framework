import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenChildcareFrameworkComponent } from './open-childcare-framework.component';

describe('OpenChildcareFrameworkComponent', () => {
  let component: OpenChildcareFrameworkComponent;
  let fixture: ComponentFixture<OpenChildcareFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenChildcareFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenChildcareFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
