import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorDireccionComponent } from './mostrador-direccion.component';

describe('MostradorDireccionComponent', () => {
  let component: MostradorDireccionComponent;
  let fixture: ComponentFixture<MostradorDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostradorDireccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostradorDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
