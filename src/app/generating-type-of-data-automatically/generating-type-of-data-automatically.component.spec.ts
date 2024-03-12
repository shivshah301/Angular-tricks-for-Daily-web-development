import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingTypeOfDataAutomaticallyComponent } from './generating-type-of-data-automatically.component';

describe('GeneratingTypeOfDataAutomaticallyComponent', () => {
  let component: GeneratingTypeOfDataAutomaticallyComponent;
  let fixture: ComponentFixture<GeneratingTypeOfDataAutomaticallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratingTypeOfDataAutomaticallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratingTypeOfDataAutomaticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
