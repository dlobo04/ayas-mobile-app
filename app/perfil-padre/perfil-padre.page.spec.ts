import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPadrePage } from './perfil-padre.page';

describe('PerfilPadrePage', () => {
  let component: PerfilPadrePage;
  let fixture: ComponentFixture<PerfilPadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPadrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
