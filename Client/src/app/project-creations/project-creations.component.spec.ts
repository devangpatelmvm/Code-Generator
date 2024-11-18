import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationsComponent } from './project-creations.component';

describe('ProjectCreationsComponent', () => {
  let component: ProjectCreationsComponent;
  let fixture: ComponentFixture<ProjectCreationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
