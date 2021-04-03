import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionSonAndDadComponent } from './interaction-son-and-dad.component';

describe('InteractionSonAndDadComponent', () => {
  let component: InteractionSonAndDadComponent;
  let fixture: ComponentFixture<InteractionSonAndDadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionSonAndDadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionSonAndDadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
