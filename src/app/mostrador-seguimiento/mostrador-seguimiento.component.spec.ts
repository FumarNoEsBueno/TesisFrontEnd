import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorSeguimientoComponent } from './mostrador-seguimiento.component';

describe('MostradorSeguimientoComponent', () => {
  let component: MostradorSeguimientoComponent;
  let fixture: ComponentFixture<MostradorSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostradorSeguimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostradorSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
