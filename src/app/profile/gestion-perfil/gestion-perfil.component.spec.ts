import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDireccionesComponent } from './gestion-direcciones.component';

describe('GestionDireccionesComponent', () => {
  let component: GestionDireccionesComponent;
  let fixture: ComponentFixture<GestionDireccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDireccionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
