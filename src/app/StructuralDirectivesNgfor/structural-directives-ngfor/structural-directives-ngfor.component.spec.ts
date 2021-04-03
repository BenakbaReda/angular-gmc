import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgforComponent } from './structural-directives-ngfor.component';

describe('StructuralDirectivesNgforComponent', () => {
  let component: StructuralDirectivesNgforComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectivesNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectivesNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
