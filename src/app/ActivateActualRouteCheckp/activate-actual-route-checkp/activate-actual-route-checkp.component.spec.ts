import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateActualRouteCheckpComponent } from './activate-actual-route-checkp.component';

describe('ActivateActualRouteCheckpComponent', () => {
  let component: ActivateActualRouteCheckpComponent;
  let fixture: ComponentFixture<ActivateActualRouteCheckpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateActualRouteCheckpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateActualRouteCheckpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
