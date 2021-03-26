import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionDadSonComponent } from './interaction-dad-son.component';

describe('InteractionDadSonComponent', () => {
  let component: InteractionDadSonComponent;
  let fixture: ComponentFixture<InteractionDadSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionDadSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionDadSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
