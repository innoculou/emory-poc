import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetYourSurgeonComponent } from './meet-your-surgeon.component';

describe('MeetYourSurgeonComponent', () => {
  let component: MeetYourSurgeonComponent;
  let fixture: ComponentFixture<MeetYourSurgeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetYourSurgeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetYourSurgeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
