import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussCaseComponent } from './discuss-case.component';

describe('DiscussCaseComponent', () => {
  let component: DiscussCaseComponent;
  let fixture: ComponentFixture<DiscussCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
