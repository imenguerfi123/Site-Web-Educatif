import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursdetComponent } from './coursdet.component';

describe('CoursdetComponent', () => {
  let component: CoursdetComponent;
  let fixture: ComponentFixture<CoursdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
