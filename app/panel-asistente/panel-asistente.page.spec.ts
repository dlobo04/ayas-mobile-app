import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAsistentePage } from './panel-asistente.page';

describe('PanelAsistentePage', () => {
  let component: PanelAsistentePage;
  let fixture: ComponentFixture<PanelAsistentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAsistentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAsistentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
