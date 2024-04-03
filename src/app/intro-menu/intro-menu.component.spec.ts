import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMenuComponent } from './intro-menu.component';

describe('IntroMenuComponent', () => {
  let component: IntroMenuComponent;
  let fixture: ComponentFixture<IntroMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
