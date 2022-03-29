import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEntradaComponent } from './detalles-entrada.component';

describe('DetallesEntradaComponent', () => {
  let component: DetallesEntradaComponent;
  let fixture: ComponentFixture<DetallesEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
