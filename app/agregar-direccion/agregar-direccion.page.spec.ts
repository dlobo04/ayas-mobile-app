import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDireccionPage } from './agregar-direccion.page';

describe('AgregarDireccionPage', () => {
  let component: AgregarDireccionPage;
  let fixture: ComponentFixture<AgregarDireccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDireccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDireccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
