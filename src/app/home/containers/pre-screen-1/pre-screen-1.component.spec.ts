import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreScreen1Component } from './pre-screen-1.component';

describe('PreScreen1Component', () => {
  let component: PreScreen1Component;
  let fixture: ComponentFixture<PreScreen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreScreen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
