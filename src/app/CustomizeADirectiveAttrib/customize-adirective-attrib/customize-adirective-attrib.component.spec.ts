import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeADirectiveAttribComponent } from './customize-adirective-attrib.component';

describe('CustomizeADirectiveAttribComponent', () => {
  let component: CustomizeADirectiveAttribComponent;
  let fixture: ComponentFixture<CustomizeADirectiveAttribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeADirectiveAttribComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeADirectiveAttribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
