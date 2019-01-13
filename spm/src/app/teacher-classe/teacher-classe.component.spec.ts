import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClasseComponent } from './teacher-classe.component';

describe('TeacherClasseComponent', () => {
  let component: TeacherClasseComponent;
  let fixture: ComponentFixture<TeacherClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
