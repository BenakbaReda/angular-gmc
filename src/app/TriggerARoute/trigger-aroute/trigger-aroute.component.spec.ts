import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerARouteComponent } from './trigger-aroute.component';

describe('TriggerARouteComponent', () => {
  let component: TriggerARouteComponent;
  let fixture: ComponentFixture<TriggerARouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerARouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerARouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
