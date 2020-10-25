import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertpComponent } from './ajoutertp.component';

describe('AjoutertpComponent', () => {
  let component: AjoutertpComponent;
  let fixture: ComponentFixture<AjoutertpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutertpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
