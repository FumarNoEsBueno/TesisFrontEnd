import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDiscoDuroComponent } from './preview-disco-duro.component';

describe('PreviewDiscoDuroComponent', () => {
  let component: PreviewDiscoDuroComponent;
  let fixture: ComponentFixture<PreviewDiscoDuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewDiscoDuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewDiscoDuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
