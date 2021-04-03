import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgifComponent } from './structural-directives-ngif.component';

describe('StructuralDirectivesNgifComponent', () => {
  let component: StructuralDirectivesNgifComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectivesNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectivesNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
