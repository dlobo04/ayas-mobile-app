import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAsistentePage } from './perfil-asistente.page';

describe('PerfilAsistentePage', () => {
  let component: PerfilAsistentePage;
  let fixture: ComponentFixture<PerfilAsistentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAsistentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAsistentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
