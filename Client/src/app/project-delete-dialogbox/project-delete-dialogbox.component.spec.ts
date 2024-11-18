import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDeleteDialogboxComponent } from './project-delete-dialogbox.component';

describe('ProjectDeleteDialogboxComponent', () => {
  let component: ProjectDeleteDialogboxComponent;
  let fixture: ComponentFixture<ProjectDeleteDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDeleteDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDeleteDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
