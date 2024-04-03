import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleComponent } from './puzzle.component';

describe('PuzzleComponent', () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
