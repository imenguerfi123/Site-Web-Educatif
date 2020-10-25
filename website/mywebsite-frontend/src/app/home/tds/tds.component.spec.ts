import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDsComponent } from './tds.component';

describe('TDsComponent', () => {
  let component: TDsComponent;
  let fixture: ComponentFixture<TDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
