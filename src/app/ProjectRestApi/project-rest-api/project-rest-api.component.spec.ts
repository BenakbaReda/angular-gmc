import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRestApiComponent } from './project-rest-api.component';

describe('ProjectRestApiComponent', () => {
  let component: ProjectRestApiComponent;
  let fixture: ComponentFixture<ProjectRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRestApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
