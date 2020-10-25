import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterarticleComponent } from './ajouterarticle.component';

describe('AjouterarticleComponent', () => {
  let component: AjouterarticleComponent;
  let fixture: ComponentFixture<AjouterarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
