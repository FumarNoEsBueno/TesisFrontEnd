import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorHistorialComponent } from './mostrador-historial.component';

describe('MostradorHistorialComponent', () => {
  let component: MostradorHistorialComponent;
  let fixture: ComponentFixture<MostradorHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostradorHistorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostradorHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
