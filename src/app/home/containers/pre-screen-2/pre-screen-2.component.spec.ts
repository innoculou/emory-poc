import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreScreen2Component } from './pre-screen-2.component';

describe('PreScreen2Component', () => {
  let component: PreScreen2Component;
  let fixture: ComponentFixture<PreScreen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreScreen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
