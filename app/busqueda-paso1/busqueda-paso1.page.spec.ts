import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPaso1Page } from './busqueda-paso1.page';

describe('BusquedaPaso1Page', () => {
  let component: BusquedaPaso1Page;
  let fixture: ComponentFixture<BusquedaPaso1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPaso1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPaso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
