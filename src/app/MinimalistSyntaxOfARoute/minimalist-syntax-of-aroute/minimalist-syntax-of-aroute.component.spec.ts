import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalistSyntaxOfARouteComponent } from './minimalist-syntax-of-aroute.component';

describe('MinimalistSyntaxOfARouteComponent', () => {
  let component: MinimalistSyntaxOfARouteComponent;
  let fixture: ComponentFixture<MinimalistSyntaxOfARouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimalistSyntaxOfARouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalistSyntaxOfARouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
