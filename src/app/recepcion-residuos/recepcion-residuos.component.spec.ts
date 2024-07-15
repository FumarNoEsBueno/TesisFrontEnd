import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionResiduosComponent } from './recepcion-residuos.component';

describe('RecepcionResiduosComponent', () => {
  let component: RecepcionResiduosComponent;
  let fixture: ComponentFixture<RecepcionResiduosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepcionResiduosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcionResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
