import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjdetComponent } from './projdet.component';

describe('ProjdetComponent', () => {
  let component: ProjdetComponent;
  let fixture: ComponentFixture<ProjdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
