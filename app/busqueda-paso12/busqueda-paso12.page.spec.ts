import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPaso12Page } from './busqueda-paso12.page';

describe('BusquedaPaso12Page', () => {
  let component: BusquedaPaso12Page;
  let fixture: ComponentFixture<BusquedaPaso12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPaso12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPaso12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
