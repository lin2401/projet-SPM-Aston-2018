import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClasseCreationComponent } from './teacher-classe-creation.component';

describe('TeacherClasseCreationComponent', () => {
  let component: TeacherClasseCreationComponent;
  let fixture: ComponentFixture<TeacherClasseCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherClasseCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClasseCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
