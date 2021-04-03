import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectingAServiceiComponent } from './injecting-aservicei.component';

describe('InjectingAServiceiComponent', () => {
  let component: InjectingAServiceiComponent;
  let fixture: ComponentFixture<InjectingAServiceiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectingAServiceiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectingAServiceiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
