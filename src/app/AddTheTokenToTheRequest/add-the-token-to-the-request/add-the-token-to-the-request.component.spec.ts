import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTheTokenToTheRequestComponent } from './add-the-token-to-the-request.component';

describe('AddTheTokenToTheRequestComponent', () => {
  let component: AddTheTokenToTheRequestComponent;
  let fixture: ComponentFixture<AddTheTokenToTheRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTheTokenToTheRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheTokenToTheRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
