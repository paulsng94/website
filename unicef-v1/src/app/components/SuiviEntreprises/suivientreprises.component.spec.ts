import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviEntreprisesComponent } from './suivientreprises.component';

describe('SuiviEntreprisesComponent', () => {
  let component: SuiviEntreprisesComponent;
  let fixture: ComponentFixture<SuiviEntreprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviEntreprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
