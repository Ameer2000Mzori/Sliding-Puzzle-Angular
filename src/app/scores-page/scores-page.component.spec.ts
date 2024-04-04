import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresPageComponent } from './scores-page.component';

describe('ScoresPageComponent', () => {
  let component: ScoresPageComponent;
  let fixture: ComponentFixture<ScoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoresPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
