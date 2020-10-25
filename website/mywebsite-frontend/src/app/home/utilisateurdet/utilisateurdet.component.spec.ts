import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurdetComponent } from './utilisateurdet.component';

describe('UtilisateurdetComponent', () => {
  let component: UtilisateurdetComponent;
  let fixture: ComponentFixture<UtilisateurdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
