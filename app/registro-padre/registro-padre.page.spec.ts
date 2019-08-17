import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPadrePage } from './registro-padre.page';

describe('RegistroPadrePage', () => {
  let component: RegistroPadrePage;
  let fixture: ComponentFixture<RegistroPadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPadrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
