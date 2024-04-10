import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDiscoDuroComponent } from './display-disco-duro.component';

describe('DisplayDiscoDuroComponent', () => {
  let component: DisplayDiscoDuroComponent;
  let fixture: ComponentFixture<DisplayDiscoDuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDiscoDuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDiscoDuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
