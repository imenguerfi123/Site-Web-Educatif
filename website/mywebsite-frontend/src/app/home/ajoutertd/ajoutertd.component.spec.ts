import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertdComponent } from './ajoutertd.component';

describe('AjoutertdComponent', () => {
  let component: AjoutertdComponent;
  let fixture: ComponentFixture<AjoutertdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutertdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
