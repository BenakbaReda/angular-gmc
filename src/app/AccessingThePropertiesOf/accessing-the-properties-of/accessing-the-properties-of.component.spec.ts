import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessingThePropertiesOfComponent } from './accessing-the-properties-of.component';

describe('AccessingThePropertiesOfComponent', () => {
  let component: AccessingThePropertiesOfComponent;
  let fixture: ComponentFixture<AccessingThePropertiesOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessingThePropertiesOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessingThePropertiesOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
