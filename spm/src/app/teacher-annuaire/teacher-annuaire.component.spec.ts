import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAnnuaireComponent } from './teacher-annuaire.component';

describe('TeacherAnnuaireComponent', () => {
  let component: TeacherAnnuaireComponent;
  let fixture: ComponentFixture<TeacherAnnuaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAnnuaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAnnuaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
