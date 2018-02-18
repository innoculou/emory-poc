import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreopComponent } from './preop.component';

describe('PreopComponent', () => {
  let component: PreopComponent;
  let fixture: ComponentFixture<PreopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
