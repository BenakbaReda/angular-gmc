import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesNgClasComponent } from './attribute-directives-ng-clas.component';

describe('AttributeDirectivesNgClasComponent', () => {
  let component: AttributeDirectivesNgClasComponent;
  let fixture: ComponentFixture<AttributeDirectivesNgClasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectivesNgClasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectivesNgClasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
