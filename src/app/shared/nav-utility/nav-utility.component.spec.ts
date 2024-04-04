import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUtilityComponent } from './nav-utility.component';

describe('NavUtilityComponent', () => {
  let component: NavUtilityComponent;
  let fixture: ComponentFixture<NavUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavUtilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
