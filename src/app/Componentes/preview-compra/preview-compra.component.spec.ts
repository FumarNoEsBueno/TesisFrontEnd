import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCompraComponent } from './preview-compra.component';

describe('PreviewCompraComponent', () => {
  let component: PreviewCompraComponent;
  let fixture: ComponentFixture<PreviewCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
