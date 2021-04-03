import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesNgStylComponent } from './attribute-directives-ng-styl.component';

describe('AttributeDirectivesNgStylComponent', () => {
  let component: AttributeDirectivesNgStylComponent;
  let fixture: ComponentFixture<AttributeDirectivesNgStylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectivesNgStylComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectivesNgStylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
