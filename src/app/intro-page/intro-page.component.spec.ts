import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPageComponent } from './intro-page.component';

describe('IntroPageComponent', () => {
  let component: IntroPageComponent;
  let fixture: ComponentFixture<IntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
