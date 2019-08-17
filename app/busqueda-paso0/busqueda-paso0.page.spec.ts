import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPaso0Page } from './busqueda-paso0.page';

describe('BusquedaPaso0Page', () => {
  let component: BusquedaPaso0Page;
  let fixture: ComponentFixture<BusquedaPaso0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPaso0Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPaso0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
