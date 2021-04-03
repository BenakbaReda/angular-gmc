import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveTheParametersComponent } from './retrieve-the-parameters.component';

describe('RetrieveTheParametersComponent', () => {
  let component: RetrieveTheParametersComponent;
  let fixture: ComponentFixture<RetrieveTheParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveTheParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveTheParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
